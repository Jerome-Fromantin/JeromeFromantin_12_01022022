import lipiIcon from '../images/lipi-icon.png'

function Lipides() {
    return (
        <div id="lipi" className="anaItem">
            <img src={lipiIcon} alt="Icône lipides" className="anaIcon"/>
            <div>
                <div className="analyticsRightValue">50g</div>
                <div className="analyticsRightType">Lipides</div>
            </div>
        </div>
    )
}

export default Lipides
