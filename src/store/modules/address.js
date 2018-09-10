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
      addAddress(address).then((res)=> {
        context.dispatch('getAddressList')
        context.commit('changeEditFlag')
      })
    },
    deleteAddress (context, id) {
      deleteAddress(id).then((res)=> {
        context.commit('deleteAddress', id)
      })
    },
    editAddress (context, address) {
      editAddress(address.id, address).then((res)=> {
        context.dispatch('getAddressList')
        context.commit('changeEditFlag')
      })
    },
    changeDefault (context, address) {
      editAddress(address.id, {
        isDefault: address.isDefault ? 0: 1
      }).then((res)=> {
        context.dispatch('getAddressList')
      })
    }
  }
}

export default address