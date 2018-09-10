import {api, instance} from "./common"

const login = (params)=> {
  return new Promise((resolve, reject)=> {
    instance.post(api.login, params).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

const logout = ()=> {
  return new Promise((resolve, reject)=> {
    instance.post(api.logout).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  login,
  logout
}