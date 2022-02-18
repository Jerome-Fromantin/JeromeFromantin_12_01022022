// This file is used to access the mocked data through the file "data.js" in the same folder.
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data"

// To do that, it uses the 4 following functions.

/**
 * This function gets the data to be used in 3 different parts.
 * - In the header, the first name of the user.
 * - In the RadialBarChart, the score.
 * - In the components on the right, the values.
 * @param {id} id : The id of the user.
 * @returns The data wanted.
 */
export async function getMainData(id) {
    const mainData = USER_MAIN_DATA.find(item => item.id === Number(id))
    return mainData
}

/**
 * This function gets the data to be used in the BarChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export async function getPoidsData(userId) {
    const poidsData = USER_ACTIVITY.find(item => item.userId === Number(userId))
    return poidsData.sessions
}

/**
 * This function gets the data to be used in the LineChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export async function getObjectifsData(userId) {
    const objectifsData = USER_AVERAGE_SESSIONS.find(item => item.userId === Number(userId))
    return objectifsData.sessions
}

/**
 * This function gets the data to be used in the RadarChart.
 * @param {userId} id : The id of the user.
 * @returns The data wanted.
 */
export async function getPerformanceData(userId) {
    const performanceData = USER_PERFORMANCE.find(item => item.userId === Number(userId))
    return performanceData
}