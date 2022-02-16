import { useEffect, useState } from 'react'
//import { getMainData } from '../services/services.mock'
import { getMainData } from '../services/services'
import Formatter from '../services/formatter'
import {PieChart, Pie} from 'recharts'

function KPI(props) {
    const [userScore, setScore] = useState(0)

    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const mainData = await getMainData(props.id)
            const formatter = new Formatter(mainData)
            setScore(formatter.getScore())
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    const innerScore = [{score: 1, fill: "white"}]
    const fullScore = [{score: userScore, fill: "#FF0000"}, {score: 1, fill: "transparent"}]

    return (
        <div id="kpi" className="anaItem">
            <PieChart cx="50%" cy="50%" width={250} height={250} className="graphCenter">
                <Pie data={innerScore} dataKey="score" clockwise={false} outerRadius={90}
                startAngle={90} endAngle={450}/>
                <Pie data={fullScore} dataKey="score" clockwise={false} cornerRadius="50%"
                innerRadius={90} outerRadius={100} startAngle={90} endAngle={450}/>
            </PieChart>
            <div className="kpiTitle">Score</div>
            <div className="kpiCenterText">
                <span className="kpiCenterScore">{userScore * 100}%</span><br/>de votre<br/>objectif
            </div>
        </div>
    )
}

export default KPI
