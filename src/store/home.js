//home所属仓库
const state = {
    todayList: {},
    hotList: {},
    likeList: {},
    likeList1: {}
}
const actions = {
    async getTodayList({ commit }) {
        let result = await reqTodyList()
        if (result.code == 200) {
            commit('GETTODAYLIST', result.data)
        }
    },
}
const mutations = {
    GETTODAYLIST(state, todayList) {
        state.todayList = todayList
    },

}
const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}