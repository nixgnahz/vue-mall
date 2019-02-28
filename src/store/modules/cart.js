import Vue from 'vue'

const cart = {
  state: {
    cartList: [
      {
        id: 1,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/a/8/f/2/5b480e2033050.jpeg',
        name: '粗跟漏趾凉鞋女百搭2018夏季新款韩版时尚一字扣带女鞋',
        param: {
          color: '米色',
          size: '35'
        },
        price: '1690',
        num: 1,
        selected: true
      },
      {
        id: 2,
        cover: 'http://y1y-src.oss-cn-shanghai.aliyuncs.com/uploads/Q/Qdh4nAHglce5Bkn7PTKf/f/d/b/6/5b480e18a57f4.jpeg',
        name: '2017夏季新款韩版宽松收腰显廋短袖牛仔连衣裙女中长款休闲长裙',
        param: {
          color: '浅蓝色',
          size: 'XS'
        },
        price: '2690',
        num: 2,
        selected: true
      }
    ],
    total: '0.00',
    allSelected: true
  },
  mutations: {
    getCartList (state, list) {
      state.cartList = list
    },
    changeSelected (state, id) {
      state.cartList.map((item)=> {
        if (item.id === id) {
          item.selected = !item.selected
        }
      })
    },
    changeTotal (state) {
      let total = 0
      let count = 0
      state.cartList.map((item)=> {
        if (item.selected) {
          total += item.price * item.num
        } else{
          count++
        }
      })
      state.total = total.toFixed(2)
      state.allSelected = count ? false : true
    },
    changeAll (state) {
      state.allSelected = !state.allSelected
      if (!state.allSelected) {
        state.total = '0.00'
      }
      let total = 0
      state.cartList.map((item)=> {
        item.selected = state.allSelected
        if (state.allSelected) {
          total += item.price * item.num
        }
      })
      state.total = total.toFixed(2)
    },
    addNum (state, id) {
      state.cartList.map((item)=> {
        if (item.id === id) {
          item.num++
        }
      })
    },
    minusNum (state, id) {
      state.cartList.map((item, index)=> {
        if (item.id === id) {
          if (item.num > 1) {
            item.num--
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
    changeSelected ({ commit }, id) {
      commit('changeSelected', id)
      commit('changeTotal')
    },
    changeAll (context) {
      context.commit('changeAll')
    },
    addNum ({ commit }, id) {
      commit('addNum', id)
      commit('changeTotal')
    },
    minusNum ({ commit }, id) {
      commit('minusNum', id)
      commit('changeTotal')
    }
  }
}

export default cart