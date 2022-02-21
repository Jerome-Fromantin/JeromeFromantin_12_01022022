import { useEffect, useState } from 'react'

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
//import { getPoidsData } from '../services/services.mock'

// Access to "real" data in the backend API
import { getPoidsData } from '../services/services'

// ACCESS TO NECESSARY COMPONENTS FROM THE LIBRARY "RECHARTS"
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts'

// Picture for the legend of the chart, identical to every data
import barchartLegend from '../images/barchartLegend.png'

function Poids(props) {
    const [poidsData, setPoidsData] = useState([])

    // Use of "AbortController()" to prevent memory leaks
    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const sessions = await getPoidsData(props.id)
            setPoidsData(sessions)
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    /**
     * This function gets the number of the day from the corresponding data, to be used in the X axis of the chart.
     */
    const getDayNumber = (date) => {
        const dayNumber = new Date(date);
        return dayNumber.getDate()
    }

    /**
     * This function gives to the tooltip (visible when the user hovers on the chart) a customized style for its content,
     * which is the values of the data with their units.
     */
    const customTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#E60000",
                height: 63,
                color: "white",
                fontSize: 10,
                fontWeight: 500,
                textAlign: "center",
                padding: 5}}>
                    <p>{`${payload[0].value} kg`}</p>
                    <p>{`${payload[1].value} kCal`}</p>
                </div>
            )
        }
        return null
    }

    return (
        <div id="poids" className="anaItem">
            <ResponsiveContainer width="96%" height={320}>
                <BarChart data={poidsData} barGap={8} barSize={7}
                margin={{top: 90, right: 0, bottom: 25, left: 33}} className="graphCenter">
                    <CartesianGrid strokeDasharray="2" vertical={false}/>
                    <XAxis dataKey="day" axisLine={false} padding={{left: -49, right: -49}}
                    tickFormatter={getDayNumber} tickLine={false} tickMargin={15}/>
                    <Tooltip content={customTooltip} offset={30}/>
                    <YAxis yAxisId="left" axisLine={false} domain={["dataMin - 2", "dataMax + 1"]} orientation="right"
                    tickCount={3} tickLine={false} tickMargin={25}/>
                    <YAxis yAxisId="right" axisLine={false} domain={["dataMin - 10", "dataMax + 10"]} mirror={true}
                    tickCount={0} tickLine={false}/>
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[43, 43, 0, 0]}/>
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[43, 43, 0, 0]}/>
                </BarChart>
            </ResponsiveContainer>
            <div className="poidsTitleLegend">
                <div>Activité quotidienne</div>
                <div><img src={barchartLegend} alt="Légende du 1er graphique"/></div>
            </div>
        </div>
    )
}

export default Poids
