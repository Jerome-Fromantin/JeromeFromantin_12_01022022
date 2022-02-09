export const getPoidsData = async (userId) => {
    const response = await fetch("http://localhost:3000/user/" + userId + "/activity")
    const data = await response.json()
    return data.data.sessions
}