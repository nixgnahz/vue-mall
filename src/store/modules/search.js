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
    getSearchResult (context, keyword) {
      if (!keyword) return
      context.commit('showLoad')
      getSearchResult(keyword).then((res) => {
        context.commit('hideLoad')
        context.commit('addHistory', keyword)
        context.commit('showResult', res.data)
      }).catch(() => {
        context.commit('hideLoad')
      })
    }
  }
}

export default search