import Vue from 'vue'

const cart = {
  state: {
    cartList: [],
    total: '0.00',
    allSelected: true
  },
  mutations: {
    getCartList (state, list) {
      state.cartList = list;
    },
    changeSelected (state, id) {
      state.cartList.map((item)=> {
        if (item.id === id) {
          item.selected = !item.selected;
        }
      })
    },
    changeTotal (state) {
      let total = 0;
      let count = 0;
      state.cartList.map((item)=> {
        if (item.selected) {
          total += item.price * item.num;
        } else{
          count++;
        }
      })
      state.total = total.toFixed(2);
      state.allSelected = count ? false : true;
    },
    changeAll (state) {
      state.allSelected = !state.allSelected;
      if (!state.allSelected) {
        state.total = '0.00';
      }
      let total = 0;
      state.cartList.map((item)=> {
        item.selected = state.allSelected;
        if (state.allSelected) {
          total += item.price * item.num;
        }
      })
      state.total = total.toFixed(2);
    },
    addNum (state, id) {
      state.cartList.map((item)=> {
        if (item.id === id) {
          item.num++;
        }
      })
    },
    minusNum (state, id) {
      state.cartList.map((item, index)=> {
        if (item.id === id) {
          if (item.num > 1) {
            item.num--;
          } else{
            state.cartList.splice(index, 1)
          }
        }
      })
    }
  },
  actions: {
    getCartList (context) {
      context.commit('changeTotal')
    },
    changeSelected (context, id) {
      context.commit('changeSelected', id)
      context.commit('changeTotal')
    },
    changeAll (context) {
      context.commit('changeAll')
    },
    addNum (context, id) {
      context.commit('addNum', id)
      context.commit('changeTotal')
    },
    minusNum (context, id) {
      context.commit('minusNum', id)
      context.commit('changeTotal')
    }
  }
}

export default cart