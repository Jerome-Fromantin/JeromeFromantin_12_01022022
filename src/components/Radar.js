import { useEffect, useState } from 'react'
//import { getPerformanceData } from '../services/services.mock'
import { getPerformanceData } from '../services/services'
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, Tooltip} from 'recharts'

function RadarData(props) {
    const [performanceData, setPerformanceData] = useState([])
    const [kinds, setKinds] = useState({})

    /* This function gives to the tooltip a customized content with its own style. */
    const customTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{
                background: "white",
                color: "black",
                fontSize: 10,
                fontWeight: 500,
                textAlign: "center",
                padding: 5}}>
                    <p>{`${kinds[payload[0].payload.kind]} : ${payload[0].value}`}</p>
                </div>
            )
        }
        return null
    }

    const getTheme = (index) => {
        return kinds[index]
    }

    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const perfData = await getPerformanceData(props.id)
            setPerformanceData(perfData.data)
            setKinds(perfData.kind)
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    const performanceDataReverse = [...performanceData].sort((a, b) => b.kind - a.kind)

    return (
        <div id="radar" className="anaItem">
            <RadarChart width={250} height ={250} data={performanceDataReverse}
            margin={{top: 15, right: 15, bottom: 15, left: 15}} className="graphCenter">
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" fontSize={12} tickFormatter={getTheme} tickLine={false} stroke="white"/>
                <Radar dataKey="value" fill="rgb(255, 1, 1)" fillOpacity={0.7}/>
                <Tooltip content={customTooltip}
                cursor={{stroke: "white", strokeOpacity : 0.2, strokeWidth: 10}} offset={30}/>
            </RadarChart>
        </div>
    )
}

export default RadarData
