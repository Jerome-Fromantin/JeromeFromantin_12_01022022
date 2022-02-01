import logo from '../images/logo.png'

function HorizBar() {
    return (
        <div className="horizBar">
            <img src={logo} alt="Logo SportSee" className="logo"/>
            <div className="horizNav">
                <div className="horizNavLink">Accueil</div>
                <div className="horizNavLink">Profil</div>
                <div className="horizNavLink">Réglage</div>
                <div className="horizNavLink">Communauté</div>
            </div>
        </div>
    )
}

export default HorizBar
