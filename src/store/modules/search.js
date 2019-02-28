import {getSearchResult} from '@/api/search'

const search = {
  state: {
    showResult: 0,
    keyword: '',
    historyArr: [],
    resultArr: []
  },
  mutations: {
    changeKeyword (state, keyword) {
      state.keyword = keyword
    },
    showResult (state, result) {
      state.showResult = 1
      state.resultArr = result
    },
    hideResult (state) {
      state.showResult = 0
      state.resultArr = []
      state.keyword = ''
    },
    addHistory (state, keyword) {
      for (let i in state.historyArr) {
        if (state.historyArr[i] === keyword) {
          return
        }
      }
      state.historyArr.unshift(keyword)
      if (state.historyArr.length > 6) {
        state.historyArr.pop()
      }
    },
    deleteHistory (state) {
      state.historyArr = []
    }
  },
  actions: {
    getSearchResult ({ commit }, keyword) {
      if (!keyword) return
      commit('showLoad')
      getSearchResult(keyword).then((res) => {
        commit('hideLoad')
        commit('addHistory', keyword)
        commit('showResult', res.data)
      }).catch(() => {
        commit('hideLoad')
      })
    }
  }
}

export default search