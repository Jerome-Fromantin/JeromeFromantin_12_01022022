import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

// POINTS A COMPLETER :
// - Modifier le contenu du tooltip.
// - Utiliser les vraies données sur "data.js".

const sessions1 = [
    {day: 1, sessionLength: 30},
    {day: 2, sessionLength: 23},
    {day: 3, sessionLength: 45},
    {day: 4, sessionLength: 50},
    {day: 5, sessionLength: 0},
    {day: 6, sessionLength: 0},
    {day: 7, sessionLength: 60}
]

const sessions2 = [
    {
        day: 1,
        sessionLength: 30
    },
    {
        day: 2,
        sessionLength: 40
    },
    {
        day: 3,
        sessionLength: 50
    },
    {
        day: 4,
        sessionLength: 30
    },
    {
        day: 5,
        sessionLength: 30
    },
    {
        day: 6,
        sessionLength: 50
    },
    {
        day: 7,
        sessionLength: 50
    }
]

const days = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}

const getDayLetter = (index) => {
    return days[index]
}

const tooltip = {
    background: "white",
    color: "black"
}

const tooltipValues = {
    color: "black"
}

function Objectifs() {
    return (
        <div id="objectifs" className="anaItem">
            <LineChart width={258} height ={263} data={sessions1} margin={{top: 80, right: 0, bottom: 20, left: 0}}
            className="graphCenter">
                <Line type="monotone" dataKey="sessionLength" dot={false} stroke="white"/>
                <CartesianGrid horizontal={false} vertical={false}/>
                <XAxis dataKey="day" axisLine={false} padding={{left: 10, right: 10}} stroke="white"
                tickFormatter={getDayLetter} tickLine={false} tickMargin={15}/>
                <YAxis axisLine={false} mirror={true} tickCount={0} tickLine={false}/>
                <Tooltip allowEscapeViewBox={{x: true, y: true}} contentStyle={tooltip} itemStyle={tooltipValues} offset={30}/>
            </LineChart>
            <div className="objectifsTitle">Durée moyenne des sessions</div>
        </div>
    )
}

export default Objectifs
