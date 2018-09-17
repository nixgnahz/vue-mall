import Vue from 'vue'

const order = {
  state: {
    activeIndex: 0
  },
  mutations: {
    changeActiveIndex (state, index) {
      state.activeIndex = index;
    }
  }
}

export default order