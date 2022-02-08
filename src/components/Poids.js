import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'
import barchartLegend from '../images/barchartLegend.png'

// POINTS A COMPLETER :
// - Modifier le contenu du tooltip.
// - Utiliser les vraies données sur "data.js".

const sessions1 = [
    {day: '2020-07-01', kilogram: 80, calories: 240},
    {day: '2020-07-02', kilogram: 80, calories: 220},
    {day: '2020-07-03', kilogram: 81, calories: 280},
    {day: '2020-07-04', kilogram: 81, calories: 290},
    {day: '2020-07-05', kilogram: 80, calories: 160},
    {day: '2020-07-06', kilogram: 78, calories: 162},
    {day: '2020-07-07', kilogram: 76, calories: 390}
]

const sessions2 = [
    {
        day: '2020-07-01',
        kilogram: 70,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 69,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 70,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 70,
        calories: 500
    },
    {
        day: '2020-07-05',
        kilogram: 69,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 69,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 69,
        calories: 390
    }
]

const getDayNumber = (date) => {
    const dayNumber = new Date(date);
    return dayNumber.getDate()
}

const tooltip = {
    background: "#E60000",
    color: "white"
}

const tooltipValues = {
    color: "white"
}

const customTooltip = ({active, payload, dataKey, yAxisId}) => {
    if (active && payload && payload.length) {
        //if (dataKey === "kilogram") {
            return (
                <div>
                    <p>{`${payload[0].value} kg`}</p>
                </div>
            )
        //}
        /*if (yAxisId === "right") {
            return (
                <div>
                    <p>{`${payload[0].value} kCal`}</p>
                </div>
            )
        }*/
        //return "Pas bon !"
    }
    return "Ca ne marche pas !" //null
}

function Poids() {
    return (
        <div id="poids" className="anaItem">
            <BarChart width={805} height={320} data={sessions1} barGap={8} barSize={7}
            margin={{top: 90, right: 0, bottom: 25, left: 33}} className="graphCenter">
                <CartesianGrid strokeDasharray="2" vertical={false}/>
                <XAxis dataKey="day" axisLine={false} padding={{left: -49, right: -49}}
                tickFormatter={getDayNumber} tickLine={false} tickMargin={15}/>
                <Tooltip /*content={customTooltip}*/ contentStyle={tooltip} itemStyle={tooltipValues} offset={30}/>
                <YAxis yAxisId="left" axisLine={false} domain={["dataMin - 1", "dataMax"]} orientation="right" tickCount={3} tickLine={false} tickMargin={25}/>
                <YAxis yAxisId="right" axisLine={false} domain={["dataMin - 10", "dataMax"]} mirror={true} tickCount={0} tickLine={false}/>
                <Bar yAxisId="left" dataKey="kilogram" fill="#282D30"/>
                <Bar yAxisId="right" dataKey="calories" fill="#E60000"/>
            </BarChart>
            <div className="poidsTitleLegend">
                <div>Activité quotidienne</div>
                <div><img src={barchartLegend} alt="Légende du 1er graphique"/></div>
            </div>
        </div>
    )
}

export default Poids
