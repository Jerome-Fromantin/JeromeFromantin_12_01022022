import { useEffect, useState } from 'react'

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
//import { getMainData } from '../services/services.mock'

// Access to "real" data in the backend API
import { getMainData } from '../services/services'

// Access to a part of data, mocked or not
import Formatter from '../services/formatter'

function Header(props) {
    const [userInfos, setUserInfos] = useState({})

    // Use of "AbortController()" to prevent memory leaks
    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const mainData = await getMainData(props.id)
            const formatter = new Formatter(mainData)
            setUserInfos(formatter.getUserInfos())
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    return (
        <header className="header">
            <h1 className="dashTitle">Bonjour <span className="userName">{userInfos.firstName}</span></h1>
            <p className="dashText">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    )
}

export default Header
