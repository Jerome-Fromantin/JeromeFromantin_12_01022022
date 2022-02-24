import "../styles.css"
import { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
//import { getMainData } from '../services/services.mock'

// Access to "real" data in the backend API
import { getMainData } from '../services/services'

// Access to a part of data, mocked or not
import Formatter from '../services/formatter'

/* ACCESS TO COMPONENTS */
import Header from "../components/Header"
import Poids from "../components/Poids"
import Objectifs from "../components/Objectifs"
import RadarData from "../components/Radar"
import KPI from "../components/KPI"
import RightComponent from "../components/RightComponent"

/* ACCESS TO ICONS FOR THE COMPONENTS ON THE RIGHT */
import caloIcon from "../images/calo-icon.png"
import protIcon from "../images/prot-icon.png"
import glucIcon from "../images/gluc-icon.png"
import lipiIcon from "../images/lipi-icon.png"

function Profile(props) {
    /**
     * @type {{id: number}}
     */
    const param = useParams()
    const navigate = useNavigate()
    const [keyData, setKeyData] = useState({})

    // Use of "AbortController()" to prevent memory leaks
    useEffect(() => {
        let abortController = new AbortController()
        // This function uses "try catch" to return the data when the back-end API is working
        // or the 404 page when the back-end API isn't working or the user's id isn't correct.
        async function init() {
            try {
                const mainData = await getMainData(param.id)
                const formatter = new Formatter(mainData)
                if (!mainData) {
                    navigate("/page404")
                }
                else {setKeyData(formatter.getKeyData())}
            } catch (error) {
                navigate("/page404")
            }
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [navigate, param.id])

    return (
        <div>
            <Header id={param.id}/>
            <div className="analytics">
                <div className="analyticsLeft">
                    <Poids id={param.id}/>
                    <div className="leftDown">
                        <Objectifs id={param.id}/>
                        <RadarData id={param.id}/>
                        <KPI id={param.id}/>
                    </div>
                </div>
                <div className="analyticsRight">
                    <RightComponent id={param.id} compoId="calo" iconSrc={caloIcon} iconAlt="Icône calories"
                    compoValue={`${keyData.calorieCount}kCal`} compoType="Calories"/>
                    <RightComponent id={param.id} compoId="prot" iconSrc={protIcon} iconAlt="Icône protéines"
                    compoValue={`${keyData.proteinCount}g`} compoType="Protéines"/>
                    <RightComponent id={param.id} compoId="gluc" iconSrc={glucIcon} iconAlt="Icône glucides"
                    compoValue={`${keyData.carbohydrateCount}g`} compoType="Glucides"/>
                    <RightComponent id={param.id} compoId="lipi" iconSrc={lipiIcon} iconAlt="Icône lipides"
                    compoValue={`${keyData.lipidCount}g`} compoType="Lipides"/>
                </div>
            </div>
        </div>
    )
}

export default Profile
