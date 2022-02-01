import caloIcon from '../images/calo-icon.png'

function Calories() {
    return (
        <div id="calo" className="anaItem">
            <img src={caloIcon} alt="Icône calories" className="anaIcon"/>
            <div>
                <div className="analyticsRightValue">1,930kCal</div>
                <div className="analyticsRightType">Calories</div>
            </div>
        </div>
    )
}

export default Calories
