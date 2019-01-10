import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import filter from '../static/filter'

Vue.config.productionTip = false;   //阻止 vue 在启动时生成生产提示

Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
