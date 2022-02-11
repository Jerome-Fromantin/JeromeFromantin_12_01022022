import { useEffect, useState } from 'react'
import { getPoidsData } from '../services/services.mock'
//import { getPoidsData } from '../services/services'
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'
import barchartLegend from '../images/barchartLegend.png'

/* This function gets the number of the day, to be used in the X axis of the chart. */
const getDayNumber = (date) => {
    const dayNumber = new Date(date);
    return dayNumber.getDate()
}

/* This function gives to the tooltip a customized content with its own style. */
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

function Poids(props) {
    const [poidsData, setPoidsData] = useState([])

    useEffect(() => {
        async function init() {
            const sessions = await getPoidsData(props.id)
            setPoidsData(sessions)
        }
        init()
    }, [props.id])

    return (
        <div id="poids" className="anaItem">
            <BarChart width={805} height={320} data={poidsData} barGap={8} barSize={7}
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
            <div className="poidsTitleLegend">
                <div>Activité quotidienne</div>
                <div><img src={barchartLegend} alt="Légende du 1er graphique"/></div>
            </div>
        </div>
    )
}

export default Poids
