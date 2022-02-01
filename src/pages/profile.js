import '../styles.css'
import HorizBar from "../components/HorizBar"
import VerticBar from "../components/VerticBar"
import Header from "../components/Header"
import Poids from "../components/Poids"
import Objectifs from "../components/Objectifs"
import Radar from "../components/Radar"
import KPI from "../components/KPI"
import Calories from "../components/Calories"
import Proteines from "../components/Proteines"
import Glucides from "../components/Glucides"
import Lipides from "../components/Lipides"



function Profile() {
    return (
        <div className="whole">
            <HorizBar/>
            <div className="underHorizBar">
                <VerticBar/>
                <div className="dashboard">
                    <Header/>
                    <div className="analytics">
                        <div className="analyticsLeft">
                            <Poids/>
                            <div className="leftDown">
                                <Objectifs/>
                                <Radar/>
                                <KPI/>
                            </div>
                        </div>
                        <div className="analyticsRight">
                            <Calories/>
                            <Proteines/>
                            <Glucides/>
                            <Lipides/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
