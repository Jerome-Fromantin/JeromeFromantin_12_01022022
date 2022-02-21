import { useEffect, useState } from 'react'

/* ACCESS TO DATA */
// Access to mocked data in the file "src/services/data.js"
//import { getMainData } from '../services/services.mock'

// Access to "real" data in the backend API
import { getMainData } from '../services/services'

// Access to a part of data, mocked or not
import Formatter from '../services/formatter'

// ACCESS TO NECESSARY COMPONENTS FROM THE LIBRARY "RECHARTS"
import {RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts'

function KPI(props) {
    const [userScore, setScore] = useState(0)

    // Use of "AbortController()" to prevent memory leaks
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

    // The first 7 fake scores are used to display a full white circle in the center of the chart.
    // They are also necessary as a comparison to the real data in "userScore", to display it correctly.
    const fullScore = [
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: 1, fill: "white"},
        {score: userScore, fill: "#FF0000"}]

    return (
        <div id="kpi" className="anaItem">
            <ResponsiveContainer width="97%" height={250}>
                <RadialBarChart cx="50%" cy="50%" data={fullScore}
                innerRadius={0} outerRadius={90} startAngle={90} endAngle={450} className="graphCenter">
                    <RadialBar minAngle={3} background clockwise={false} dataKey="score"
                    barSize={10} cornerRadius={50}/>
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="kpiTitle">Score</div>
            <div className="kpiCenterText">
                <span className="kpiCenterScore">{userScore * 100}%</span><br/>de votre<br/>objectif
            </div>
        </div>
    )
}

export default KPI
