// This file is used to access the data (mocked or not) present in the array "USER_MAIN_DATA" of the source file.
export default class Formatter {
    mainData = {}
    constructor(oneMainData) {
        this.mainData = oneMainData
    }
    
    getUserInfos () {
        return this.mainData.userInfos
    }

    getScore () {
        return this.mainData.todayScore || this.mainData.score
    }
    
    getKeyData () {
        return this.mainData.keyData
    }
}