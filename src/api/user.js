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
    instance.patch(api.user, params).then((res)=> {
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
