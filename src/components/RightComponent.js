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
