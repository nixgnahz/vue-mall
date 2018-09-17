import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search.js'
import address from'./modules/address.js'
import user from'./modules/user.js'
import toast from'./modules/toast.js'
import order from'./modules/order.js'
import recommend from'./modules/recommend.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search,
    address,
    user,
    order,
    toast,
    recommend
  }
})

export default store