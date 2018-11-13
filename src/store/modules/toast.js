import Vue from 'vue'

const toast = {
  state: {
    toastFlag: 0,
    toast: {}
  },
  mutations: {
    showToast (state, toast) {
      state.toast = toast
      state.toastFlag = 1
    },
    hideToast (state) {
      state.toastFlag = 0
    }
  },
  actions: {
    showToast (context, toast) {
      context.commit('showToast', toast)
      setTimeout(()=> {
          context.commit('hideToast')
      }, toast.duration)
    }
  }
}

export default toast