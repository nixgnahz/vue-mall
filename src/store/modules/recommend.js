import Vue from 'vue'
import getRecommend from '@/api/recommend.js'

const recommend = {
  state: {
    recommendArr: []
  },
  mutations: {
    getRecommend (state, list) {
      state.recommendArr = list;
    }
  },
  actions: {
    getRecommend (context) {
      if (context.state.recommendArr.length) return;
      getRecommend().then((res)=> {
        context.commit('getRecommend', res.data)
      })
    }
  }
}

export default recommend