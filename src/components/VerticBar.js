import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

function VerticBar() {
    return (
        <div className="verticBar">
            <div className="verticNav">
                <div className="verticNavLink"><img src={icon1} alt="Icône 1"/></div>
                <div className="verticNavLink"><img src={icon2} alt="Icône 2"/></div>
                <div className="verticNavLink"><img src={icon3} alt="Icône 3"/></div>
                <div className="verticNavLink"><img src={icon4} alt="Icône 4"/></div>
            </div>
            <div className="copyright">Copyright, SportSee2020</div>
        </div>
    )
}

export default VerticBar
