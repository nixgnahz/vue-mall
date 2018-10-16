import Vue from 'vue'

const load = {
  state: {
    loadFlag: 0
  },
  mutations: {
    showLoad (state) {
      state.loadFlag = 1;
    },
    hideLoad (state) {
      state.loadFlag = 0;
    }
  }
}

export default load