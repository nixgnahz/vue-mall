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
      state.address = address;
    },
    getAddressList (state, list) {
      state.addressList = list;
    },
    changeEditFlag (state) {
      state.editFlag = !state.editFlag;
    },
    deleteAddress (state, id) {
      for(var i in state.addressList) {
        if (id == state.addressList[i].id) {
          state.addressList.splice(i, 1)
        }
      }
    }
  },
  actions: {
    getAddressList (context) {
      getAddressList().then((res)=> {
        context.commit('getAddressList', res.data)
      })
    },
    addAddress (context, address) {
      context.commit('showLoad')
      addAddress(address).then((res)=> {
        context.commit('hideLoad')
        context.dispatch('getAddressList')
        context.commit('changeEditFlag')
      }).catch(()=> {
        context.commit('hideLoad')
      })
    },
    deleteAddress (context, id) {
      context.commit('showLoad')
      deleteAddress(id).then((res)=> {
        context.commit('hideLoad')
        context.commit('deleteAddress', id)
      }).catch(()=> {
        context.commit('hideLoad')
      })
    },
    editAddress (context, address) {
      context.commit('showLoad')
      editAddress(address.id, address).then((res)=> {
        context.commit('hideLoad')
        context.dispatch('getAddressList')
        context.commit('changeEditFlag')
      }).catch(()=> {
        context.commit('hideLoad')
      })
    },
    changeDefault (context, address) {
      context.commit('showLoad')
      editAddress(address.id, {
        isDefault: address.isDefault ? 0: 1
      }).then((res)=> {
        context.commit('hideLoad')
        context.dispatch('getAddressList')
      }).catch(()=> {
        context.commit('hideLoad')
      })
    }
  }
}

export default address