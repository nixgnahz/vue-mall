import {api, instance} from "./common"

const getUserInfo = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.user).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const editUserInfo = (params)=> {
  return new Promise((resolve, reject)=> {
    instance({
      url: api.user,
      method: 'patch',
      data: params
    }).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getUserInfo,
  editUserInfo
}
