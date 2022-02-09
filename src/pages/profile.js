import "../styles.css"
import {useParams} from "react-router-dom"
import Header from "../components/Header"
import Poids from "../components/Poids"
import Objectifs from "../components/Objectifs"
import RadarData from "../components/Radar"
import KPI from "../components/KPI"
import RightComponent from "../components/RightComponent"
import caloIcon from "../images/calo-icon.png"
import protIcon from "../images/prot-icon.png"
import glucIcon from "../images/gluc-icon.png"
import lipiIcon from "../images/lipi-icon.png"

function Profile(props) {
    const param = useParams()

    return (
        <div>
            <Header/>
            <div className="analytics">
                <div className="analyticsLeft">
                    <Poids id={param.id}/>
                    <div className="leftDown">
                        <Objectifs/>
                        <RadarData/>
                        <KPI/>
                    </div>
                </div>
                <div className="analyticsRight">
                    <RightComponent compoId="calo" iconSrc={caloIcon} iconAlt="Icône calories"
                    compoValue="1,930kCal" compoType="Calories"/>
                    <RightComponent compoId="prot" iconSrc={protIcon} iconAlt="Icône protéines"
                    compoValue="155g" compoType="Protéines"/>
                    <RightComponent compoId="gluc" iconSrc={glucIcon} iconAlt="Icône glucides"
                    compoValue="290g" compoType="Glucides"/>
                    <RightComponent compoId="lipi" iconSrc={lipiIcon} iconAlt="Icône lipides"
                    compoValue="50g" compoType="Lipides"/>
                </div>
            </div>
        </div>
    )
}

export default Profile
