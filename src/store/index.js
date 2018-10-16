import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search.js'
import load from './modules/load.js'
import address from'./modules/address.js'
import user from'./modules/user.js'
import toast from'./modules/toast.js'
import order from'./modules/order.js'
import cart from'./modules/cart.js'
import receipt from './modules/receipt.js'
import recommend from'./modules/recommend.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    load,
    cart,
    search,
    address,
    user,
    order,
    toast,
    receipt,
    recommend
  }
})

export default store