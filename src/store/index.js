import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search.js'
import address from'./modules/address.js'
import user from'./modules/user.js'
import recommend from'./modules/recommend.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search,
    address,
    user,
    recommend
  }
})

export default store