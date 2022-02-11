import { useEffect, useState } from 'react'
import { getFirstName } from '../services/services.mock'
//import { getFirstName } from '../services/services'
import texte from '../images/TestText.png'

function Header(props) {
    const [userInfos, setUserInfos] = useState([])

    useEffect(() => {
        async function init() {
            const userInfo = await getFirstName(props.id)
            setUserInfos(userInfo)
        }
        init()
    }, [props.id])

    return (
        <header className="header">
            <h1 className="dashTitle">Bonjour <span className="userName">{userInfos.firstName}</span></h1>
            {/*<p className="dashText">Félicitation ! Vous avez explosé vos objectifs hier</p>*/}
            <img src={texte} alt="Phrase de félicitation"/>
        </header>
    )
}

export default Header
