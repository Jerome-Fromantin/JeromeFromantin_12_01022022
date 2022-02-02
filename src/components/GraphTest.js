import {LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

function GraphTest() {
    const data1 = [
        {"name": "JOUR 1", "value1": 400, "value2": 350}, {"name": "JOUR 2", "value1": 300, "value2": 325},
        {"name": "JOUR 3", "value1": 300, "value2": 400}, {"name": "JOUR 4", "value1": 200, "value2": 290},
        {"name": "JOUR 5", "value1": 278, "value2": 240}, {"name": "JOUR 6", "value1": 189, "value2": 200},
        {"name": "JOUR 7", "value1": 220, "value2": 175}, {"name": "JOUR 8", "value1": 250, "value2": 210},
        {"name": "JOUR 9", "value1": 275, "value2": 250}, {"name": "JOUR 10", "value1": 330, "value2": 240}
    ]

    /*const renderShape = () => {
        // Code à voir pour arrondir le sommet des barres...
    }*/
    
    return (
        <div className="graphTest">
            <h2>LineChart</h2>
            <div>
            <LineChart width={1000} height ={400} data={data1} margin={{top: 5, right: 20, bottom: 5, left: 0}}
            className="graphCenter">
                <Line type="monotone" dataKey="value1" stroke="#FF0000"/>
                <Line type="monotone" dataKey="value2" stroke="#00FF00"/>
                <CartesianGrid stroke="#CCC" strokeDasharray="5 5"/>
                {/* Ci-dessus, la prop "strokeDasharray" met le quadrillage en pointillés en tirets. */}
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                {/* Ci-dessus, le composant affiche textuellement les valeurs avec le hover. */}
            </LineChart>
            </div>

            <h2>BarChart</h2>
            <div>
            <BarChart width={1000} height={400} data={data1} margin={{top: 5, right: 20, bottom: 5, left: 0}}
            barGap={8} barSize={7} className="graphCenter"> {/*shape={renderShape}*/}
            <CartesianGrid vertical={false} strokeDasharray="10"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="value1" fill="#282D30"/>
            <Bar dataKey="value2" fill="#E60000"/>
            </BarChart>
            </div>
        </div>
    )
}

export default GraphTest
