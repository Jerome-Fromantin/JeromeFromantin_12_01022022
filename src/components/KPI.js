import {PieChart, Pie} from 'recharts'

const score1 = [{score: 0.12}, {score: 0.88}]
const score2 = [{score: 0.3}, {score: 0.7}]

function KPI() {
    return (
        <div id="kpi" className="anaItem">
            <PieChart width={250} height={250}>
                <Pie data={score1} dataKey="score" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="red"/>
                <Pie data={score2} dataKey="score" cx="50%" cy="50%" innerRadius={50} outerRadius={60} fill="blue"/>
            </PieChart>
        </div>
    )
}

export default KPI
