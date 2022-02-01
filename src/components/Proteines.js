import protIcon from '../images/prot-icon.png'

function Proteines() {
    return (
        <div id="prot" className="anaItem">
            <img src={protIcon} alt="Icône protéines" className="anaIcon"/>
            <div>
                <div className="analyticsRightValue">155g</div>
                <div className="analyticsRightType">Protéines</div>
            </div>
        </div>
    )
}

export default Proteines
