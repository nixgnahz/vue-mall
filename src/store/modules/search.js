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
      state.keyword = keyword;
    },
    showResult (state, result) {
      state.showResult = 1;
      state.resultArr = result;
    },
    hideResult (state) {
      state.showResult = 0;
      state.resultArr = [];
      state.keyword = '';
    },
    addHistory (state, keyword) {
      for (var i in state.historyArr) {
        if (state.historyArr[i] === keyword) {
          return;
        }
      }
      state.historyArr.unshift(keyword)
      if (state.historyArr.length > 6) {
        state.historyArr.pop()
      }
    },
    deleteHistory (state) {
      state.historyArr = [];
    }
  },
  actions: {
    getSearchResult (context, keyword) {
      if (!keyword) return;
      getSearchResult(keyword).then((res) => {
        context.commit('addHistory', keyword)
        context.commit('showResult', res.data)
      }).catch(() => {})
    }
  }
}

export default search