import {getAddressList, editAddress, addAddress, deleteAddress} from '@/api/address.js'
import Vue from 'vue'

const address = {
  state: {
    editFlag: 0,
    addressList: [],
    address: {
      isDefault: 0,
      position_id: 1,
      consignee: '',
      phone: '',
      positionStr: '',
      detailAddress: '',
      tag: ''
    }
  },
  mutations: {
    changeAddress (state, address) {
      if (!address) {
        address = {
          isDefault: 0,
          position_id: 1,
          consignee: '',
          phone: '',
          positionStr: '',
          detailAddress: '',
          tag: ''
        }
      }
      state.address = address
    },
    getAddressList (state, list) {
      state.addressList = list
    },
    changeEditFlag (state) {
      state.editFlag = !state.editFlag
    },
    deleteAddress (state, id) {
      for(let i in state.addressList) {
        if (id == state.addressList[i].id) {
          state.addressList.splice(i, 1)
        }
      }
    }
  },
  actions: {
    async getAddressList (context) {
      const res = await getAddressList()
      context.commit('getAddressList', res.data)
    },
    addAddress ({ commit, dispatch }, address) {
      commit('showLoad')
      addAddress(address).then((res)=> {
        commit('hideLoad')
        dispatch('getAddressList')
        commit('changeEditFlag')
      }).catch(()=> {
        commit('hideLoad')
      })
    },
    deleteAddress ({ commit }, id) {
      commit('showLoad')
      deleteAddress(id).then((res)=> {
        commit('hideLoad')
        commit('deleteAddress', id)
      }).catch(()=> {
        commit('hideLoad')
      })
    },
    editAddress ({ commit, dispatch }, address) {
      commit('showLoad')
      editAddress(address.id, address).then((res)=> {
        commit('hideLoad')
        dispatch('getAddressList')
        commit('changeEditFlag')
      }).catch(()=> {
        commit('hideLoad')
      })
    },
    changeDefault ({ commit, dispatch }, address) {
      commit('showLoad')
      editAddress(address.id, {
        isDefault: address.isDefault ? 0: 1
      }).then((res)=> {
        commit('hideLoad')
        dispatch('getAddressList')
      }).catch(()=> {
        commit('hideLoad')
      })
    }
  }
}

export default address