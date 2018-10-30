import {api, instance} from "./common"

const getAddressList = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.address).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const addAddress = (params)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.address,
      method: 'post',
      data: params
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const editAddress = (id, params)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.address + '/' + id,
      method: 'put',
      data: params
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const deleteAddress = (addressId)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.address + '/' + addressId,
      method: 'delete'
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getAddressList,
  addAddress,
  editAddress,
  deleteAddress
}