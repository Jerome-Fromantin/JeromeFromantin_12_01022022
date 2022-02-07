import {LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'

function GraphTest() {
    const dataLine = [
        {"name": "JOUR 1", "value1": 400, "value2": 350}, {"name": "JOUR 2", "value1": 300, "value2": 325},
        {"name": "JOUR 3", "value1": 300, "value2": 400}, {"name": "JOUR 4", "value1": 200, "value2": 290},
        {"name": "JOUR 5", "value1": 278, "value2": 240}, {"name": "JOUR 6", "value1": 189, "value2": 200},
        {"name": "JOUR 7", "value1": 220, "value2": 175}, {"name": "JOUR 8", "value1": 250, "value2": 210},
        {"name": "JOUR 9", "value1": 275, "value2": 250}, {"name": "JOUR 10", "value1": 330, "value2": 240}
    ]
    const dataBar = [
        {"name": "JOUR 1", "Valeur 1 (kg)": 400, "Valeur 2 (cm)": 350}, {"name": "JOUR 2", "Valeur 1 (kg)": 300, "Valeur 2 (cm)": 325},
        {"name": "JOUR 3", "Valeur 1 (kg)": 300, "Valeur 2 (cm)": 400}, {"name": "JOUR 4", "Valeur 1 (kg)": 200, "Valeur 2 (cm)": 290},
        {"name": "JOUR 5", "Valeur 1 (kg)": 278, "Valeur 2 (cm)": 240}, {"name": "JOUR 6", "Valeur 1 (kg)": 189, "Valeur 2 (cm)": 200},
        {"name": "JOUR 7", "Valeur 1 (kg)": 220, "Valeur 2 (cm)": 175}, {"name": "JOUR 8", "Valeur 1 (kg)": 250, "Valeur 2 (cm)": 210},
        {"name": "JOUR 9", "Valeur 1 (kg)": 275, "Valeur 2 (cm)": 250}, {"name": "JOUR 10", "Valeur 1 (kg)": 330, "Valeur 2 (cm)": 240}
    ]

    const tooltip = {
        background: "#E60000",
        color: "white"
    }

    const tooltipValues = {
        color: "white"
    }

    /*const renderShape = () => {
        // Code à voir pour arrondir le sommet des barres...
    }*/
    
    return (
        <div className="graphTest">
            <h2>LineChart</h2>
            <div>
                <LineChart width={1000} height ={400} data={dataLine} margin={{top: 5, right: 20, bottom: 5, left: 0}}
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
                <BarChart width={1000} height={400} data={dataBar} margin={{top: 5, right: 0, bottom: 5, left: 0}}
                barGap={8} barSize={7} className="graphCenter"> {/*shape={renderShape}*/}
                    <Legend align="right" verticalAlign="top" iconSize={8} iconType={"circle"} height={100}/>
                    <CartesianGrid vertical={false} strokeDasharray="10"/>
                    <XAxis dataKey="name"/>
                    <YAxis orientation="right" domain={[100, 400]}/>
                    <Tooltip contentStyle={tooltip} itemStyle={tooltipValues}/>
                    <Bar dataKey="Valeur 1 (kg)" fill="#282D30"/>
                    <Bar dataKey="Valeur 2 (cm)" fill="#E60000"/>
                </BarChart>
            </div>
        </div>
    )
}

export default GraphTest
