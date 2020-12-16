// 自动暴露模块的接口
const modulesFiles = require.context('./modules', false, /\.js$/);

let requestList = {}
modulesFiles.keys().forEach(key => {
  const reqNums = modulesFiles(key).default
  // 遍历每个模块的请求
  for (const item in reqNums) {
    requestList[item] = reqNums[item]
  }
});
console.log(requestList);

// 返回对象
module.exports = requestList