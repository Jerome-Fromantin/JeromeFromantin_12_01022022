import { useEffect, useState } from 'react'
import { getScore } from '../services/services.mock'
//import { getScore } from '../services/services'
import {PieChart, Pie} from 'recharts'

function KPI(props) {
    const [userScore, setScore] = useState([])

    useEffect(() => {
        let abortController = new AbortController()
        async function init() {
            const oneScore = await getScore(props.id)
            setScore(oneScore)
        }
        init()
        return () => {
            abortController.abort()
        }
    }, [props.id])

    const innerScore = [{score: 1, fill: "white"}]
    const fullScore = [{score: userScore.score, fill: "#FF0000"}, {score: 1, fill: "transparent"}]

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
                <span className="kpiCenterScore">{userScore.score * 100}%</span><br/>de votre<br/>objectif
            </div>
        </div>
    )
}

export default KPI
