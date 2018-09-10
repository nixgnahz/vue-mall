import Vue from 'vue'

const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {

  }
}

export default user