import glucIcon from '../images/gluc-icon.png'

function Glucides() {
    return (
        <div id="gluc" className="anaItem">
            <img src={glucIcon} alt="Icône glucides" className="anaIcon"/>
            <div>
                <div className="analyticsRightValue">290g</div>
                <div className="analyticsRightType">Glucides</div>
            </div>
        </div>
    )
}

export default Glucides
