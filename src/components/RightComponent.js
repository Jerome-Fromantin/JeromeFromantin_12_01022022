// This component is used in the file "profile.js" to display the 4 little blocks on the right of the screen,
// each with its own icon, value and type through the use of props.
function RightComponent(props) {
    return (
        <div id={props.compoId} className="anaItem">
            <img src={props.iconSrc} alt={props.iconAlt} className="anaIcon"/>
            <div>
                <div className="analyticsRightValue">{props.compoValue}</div>
                <div className="analyticsRightType">{props.compoType}</div>
            </div>
        </div>
    )
}

export default RightComponent
