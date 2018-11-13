import {api, instance} from './common'

const getRecommend = ()=> {
  return new Promise((resolve, reject)=> {
    instance.get(api.recommend).then((res)=> {
      resolve(res)
    }).catch((error)=> {
      reject(error)
    })
  })
}

export default getRecommend
