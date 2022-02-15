import { useEffect, useState } from 'react'
import { getMainData } from '../services/services.mock'
//import { getMainData } from '../services/services'
import texte from '../images/TestText.png'

function Header(props) {
    const [mainData, setMainData] = useState([])

    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const mainDatas = await getMainData(props.id)
            setMainData(mainDatas)
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    const userInfo = mainData.userInfos

    return (
        <header className="header">
            <h1 className="dashTitle">Bonjour <span className="userName">{userInfo.firstName}</span></h1>
            {/*<p className="dashText">Félicitation ! Vous avez explosé vos objectifs hier</p>*/}
            <img src={texte} alt="Phrase de félicitation"/>
        </header>
    )
}

export default Header
