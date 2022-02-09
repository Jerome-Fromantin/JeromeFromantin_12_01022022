import texte from '../images/TestText.png'

function Header() {
    return (
        <header className="header">
            <h1 className="dashTitle">Bonjour <span className="userName">Thomas</span></h1>
            {/* Prévoir {firstName} à la place de "Thomas". */}
            {/*<p className="dashText">Félicitation ! Vous avez explosé vos objectifs hier</p>*/}
            <img src={texte} alt="Phrase de félicitation"/>
        </header>
    )
}

export default Header
