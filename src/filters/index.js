import Router from '@/router'

/**
 * 过滤隐藏路由
 * @param {Array} routes
 * */
export function fliterRoutes(routes){
  let res = []

  routes.forEach( (route,index) => {
    if(!(route.hidden )){
      res.push(route)
    }
  })

  return res
}
/**
 * 过滤面包屑
 * @param{Array} route
 * */
export function filterBraed(route){
  console.log(route)
  let matched = [];

  matched = route.matched.filter( route => route.meta && route.meta.title)

  matched = [{path:'/home' , meta:{title:'主页'} }].concat(matched)

  console.log(matched)
  return matched

}
/**
 * 跳转到对子路由
 * @param{Array}  source
 * @param{String}  key
 * @param{String}  value
 * @param{String}  innerArr 内嵌数组key值
 * */
export function findTargetObj(source, key, value, innerArr){
  let found = {}          // 查找结果

  source.find(item => {   // find()找到目标后将立即停止
    if(item[key] === value){
      found = item
      return true
    }else if(item[innerArr]){   // 如果查找的对象内嵌套数组，则继续往里面找
      let goOn = findTargetObj(item[innerArr], key, value, innerArr) // 找到后返回一个对象，没有找到返回undefined
      if(goOn) {    // 找到含目标值的对象，并传给found并结束遍历
        found = goOn
        return true
      }
      found  = undefined   // 返回的时一个undefined，继续遍历
      return false
    }else{
      found  = undefined
      return false
    }
  })

  return found

}
