import Vue from 'vue'
import getRecommend from '@/api/recommend.js'

const recommend = {
  state: {
    recommendArr: []
  },
  mutations: {
    getRecommend (state, list) {
      state.recommendArr = list
    }
  },
  actions: {
    async getRecommend (context) {
      if (context.state.recommendArr.length) return
      const res = await getRecommend()
      context.commit('getRecommend', res.data)
    }
  }
}

export default recommend