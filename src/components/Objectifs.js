import { useEffect, useState } from 'react'

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
//import { getObjectifsData } from '../services/services.mock'

// Access to "real" data in the backend API
import { getObjectifsData } from '../services/services'

// ACCESS TO NECESSARY COMPONENTS FROM THE LIBRARY "RECHARTS"
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

function Objectifs(props) {
    const [objectifsData, setObjectifsData] = useState([])

    // Use of "AbortController()" to prevent memory leaks
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

    /**
     * This function gets the first letter of the french word of the day from the corresponding data,
     * to be used in the X axis of the chart.
     */
    const days = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}
    const getDayLetter = (index) => {
        return days[index]
    }

    /**
     * This function gives to the tooltip (visible when the user hovers on the chart) a customized style for its content,
     * which is the values of the data with its unit.
     */
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

    return (
        <div id="objectifs" className="anaItem">
            <ResponsiveContainer width="100%" height={263}>
                <LineChart data={objectifsData} margin={{top: 0, right: 0, bottom: 0, left: 0}}
                className="graphCenter">
                    <Line type="monotone" dataKey="sessionLength"
                    dot={false} activeDot={{r: 5, strokeOpacity : 0.2, strokeWidth: 10}} stroke="white"/>
                    <CartesianGrid horizontal={false} vertical={false}/>
                    <XAxis dataKey="day" axisLine={false} mirror={true}
                    padding={{left: 10, right: 10}} stroke="rgba(255, 255, 255, 0.5)"
                    style={{fontSize: 12, fontWeight: 500}}
                    tickFormatter={getDayLetter} tickLine={false} tickMargin={15}/>
                    <YAxis axisLine={false} domain={["dataMin - 20", "dataMax + 40"]} mirror={true}
                    tickCount={0} tickLine={false}/>
                    <Tooltip content={customTooltip}
                    cursor={{stroke: "black", strokeOpacity : 0.2, strokeWidth: 40}} offset={30}/>
                </LineChart>
            </ResponsiveContainer>
            <div className="objectifsTitle">Durée moyenne des sessions</div>
        </div>
    )
}

export default Objectifs
