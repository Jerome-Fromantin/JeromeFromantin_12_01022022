//import { useEffect, useState } from 'react'
//import { getScore } from '../services/services.mock'
//import { getScore } from '../services/services'
import {PieChart, Pie} from 'recharts'

const score1 = [{score: 0.12}, {score: 0.88}]
//const score2 = [{score: 0.3}, {score: 0.7}]

function KPI(props) {
    /*const [score, setScore] = useState([0])

    useEffect(() => {
        async function init() {
            const userScore = await getScore(props.id)
            setScore(userScore)
        }
        init()
    }, [props.id])*/

    return (
        <div id="kpi" className="anaItem">
            <PieChart width={250} height={250}>
                <Pie data={score1} dataKey="score" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#FF0000"/>
            </PieChart>
        </div>
    )
}

export default KPI
