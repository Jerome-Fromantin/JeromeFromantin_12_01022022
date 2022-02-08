import {RadarChart, Radar, PolarGrid, PolarAngleAxis} from 'recharts'

// POINTS A COMPLETER :
// - Améliorer l'apparence du graphique.
// - Utiliser les vraies données sur "data.js".

/*const kind = {1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity'}
const data = [
    {value: 80, kind: 1},
    {value: 120, kind: 2},
    {value: 140, kind: 3},
    {value: 50, kind: 4},
    {value: 200, kind: 5},
    {value: 90, kind: 6}
]*/

const kindFR = {1: "Cardio", 2: "Energie", 3: "Endurance", 4: "Force", 5: "Vitesse", 6: "Intensité"}

const getTheme = (index) => {
    return kindFR[index]
}

const data1 = [
    {value: 80, kind: 1},
    {value: 120, kind: 2},
    {value: 140, kind: 3},
    {value: 50, kind: 4},
    {value: 200, kind: 5},
    {value: 90, kind: 6}
]

const data2 = [
    {
        value: 200,
        kind: 1
    },
    {
        value: 240,
        kind: 2
    },
    {
        value: 80,
        kind: 3
    },
    {
        value: 80,
        kind: 4
    },
    {
        value: 220,
        kind: 5
    },
    {
        value: 110,
        kind: 6
    }
]

function RadarData() {
    return (
        <div id="radar" className="anaItem">
            <RadarChart width={250} height ={250} data={data1} startAngle={90} endAngle={450}
            margin={{top: 40, right: 40, bottom: 40, left: 40}} className="graphCenter">
                <PolarGrid/> {/*polarAngles={[90, 150, 210, 270, 330, 390, 450]}/>*/}
                <PolarAngleAxis dataKey="kind" tickFormatter={getTheme} tickLine={false} stroke="white"/>
                <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7}/>
            </RadarChart>
        </div>
    )
}

export default RadarData
