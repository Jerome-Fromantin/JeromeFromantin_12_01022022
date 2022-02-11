import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "./data"

export async function getFirstName(id) {
    const firstName = USER_MAIN_DATA.find(item => item.id == id)
    return firstName.userInfos
}

export async function getPoidsData(userId) {
    const poidsData = USER_ACTIVITY.find(item => item.userId == userId)
    return poidsData.sessions
}

export async function getObjectifsData(userId) {
    const objectifsData = USER_AVERAGE_SESSIONS.find(item => item.userId == userId)
    return objectifsData.sessions
}

export async function getPerformanceData(userId) {
    const performanceData = USER_PERFORMANCE.find(item => item.userId == userId)
    return performanceData.data
}

export async function getScore(id) {
    const userScore = USER_MAIN_DATA.find(item => item.id == id)
    return userScore.score
}

export async function getKeyData(id) {
    const rightCompData = USER_MAIN_DATA.find(item => item.id == id)
    return rightCompData.keyData
}