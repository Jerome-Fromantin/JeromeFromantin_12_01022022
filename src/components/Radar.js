import { useEffect, useState } from 'react'
import { getPerformanceData } from '../services/services.mock'
//import { getPerformanceData } from '../services/services'
import {RadarChart, Radar, PolarGrid, PolarAngleAxis} from 'recharts'

function RadarData(props) {
    const [performanceData, setPerformanceData] = useState([])

    useEffect(() => {
        async function init() {
            const perfData = await getPerformanceData(props.id)
            setPerformanceData(perfData)
        }
        init()
    }, [props.id])

    const kindFR = {1: "Cardio", 2: "Energie", 3: "Endurance", 4: "Force", 5: "Vitesse", 6: "Intensité"}
    const getTheme = (index) => {
        return kindFR[index]
    }

    const performanceDataReverse = [...performanceData].sort((a, b) => b.kind - a.kind)

    return (
        <div id="radar" className="anaItem">
            <RadarChart width={250} height ={250} data={performanceDataReverse}
            margin={{top: 15, right: 15, bottom: 15, left: 15}} className="graphCenter">
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" fontSize={12} tickFormatter={getTheme} tickLine={false} stroke="white"/>
                <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7}/>
            </RadarChart>
        </div>
    )
}

export default RadarData
