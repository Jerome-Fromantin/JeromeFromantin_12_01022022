import {USER_ACTIVITY} from "./data"

export async function getPoidsData(userId) {
    const poidsData = USER_ACTIVITY.find(item => item.userId == userId)
    return poidsData.sessions
}