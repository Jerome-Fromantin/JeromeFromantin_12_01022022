// This file is used to access the data through the back-end API.
// To do that, it uses the 4 endpoints offered.

/**
 * This function gets the data to be used in 3 different parts.
 * - In the header, the first name of the user.
 * - In the RadialBarChart, the score.
 * - In the components on the right, the values.
 * @param {id} id : The id of the user.
 * @returns The data wanted.
 */
export const getMainData = async (id) => {
    const response = await fetch("http://localhost:3000/user/" + id)
    const data = await response.json()
    return data.data
}

/**
 * This function gets the data to be used in the BarChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export const getPoidsData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/activity")
    const data = await response.json()
    return data.data.sessions
}

/**
 * This function gets the data to be used in the LineChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export const getObjectifsData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/average-sessions")
    const data = await response.json()
    return data.data.sessions
}

/**
 * This function gets the data to be used in the RadarChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export const getPerformanceData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/performance")
    const data = await response.json()
    return data.data
}