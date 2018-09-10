import {api, instance} from "./common"

const getCategory = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.category).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export {
  getCategory
}