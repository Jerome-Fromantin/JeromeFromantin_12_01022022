import { useEffect, useState } from 'react'
import { getObjectifsData } from '../services/services.mock'
//import { getObjectifsData } from '../services/services'
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const days = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}

const getDayLetter = (index) => {
    return days[index]
}

/* This function gives to the tooltip a customized content with its own style. */
const customTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
            background: "white",
            fontSize: 10,
            fontWeight: 500,
            textAlign: "center",
            padding: 5}}>
                <p>{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

function Objectifs(props) {
    const [objectifsData, setObjectifsData] = useState([])

    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const sessions = await getObjectifsData(props.id)
            setObjectifsData(sessions)
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    return (
        <div id="objectifs" className="anaItem">
            <LineChart width={258} height ={263} data={objectifsData} margin={{top: 0, right: 0, bottom: 0, left: 0}}
            className="graphCenter">
                <Line type="monotone" dataKey="sessionLength"
                dot={false} activeDot={{r: 5, strokeOpacity : 0.2, strokeWidth: 10}} stroke="white"/>
                <CartesianGrid horizontal={false} vertical={false}/>
                <XAxis dataKey="day" axisLine={false} mirror={true}
                padding={{left: 10, right: 10}} stroke="rgba(255, 255, 255, 0.5)" style={{fontSize: 12, fontWeight: 500}}
                tickFormatter={getDayLetter} tickLine={false} tickMargin={15}/>
                <YAxis axisLine={false} domain={["dataMin - 20", "dataMax + 40"]} mirror={true}
                tickCount={0} tickLine={false}/>
                <Tooltip content={customTooltip}
                cursor={{stroke: "black", strokeOpacity : 0.2, strokeWidth: 40}} offset={30}/>
            </LineChart>
            <div className="objectifsTitle">Durée moyenne des sessions</div>
        </div>
    )
}

export default Objectifs
