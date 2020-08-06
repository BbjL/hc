let Mock = require('mockjs');

Mock.mock('/mock/projects' , 'get', {
  // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
  'list|2-3': [{
    "name|1": [
      "水下机器人",
      "人工智能",
      "智能养机器人",
      "人流检测系统"
    ],
    'id|+1': 1,
    //属性 image 是一个随机图片 参数分别为size, background, text
    "image": "@image('200x100','#6c757d' ,'@name')"
  }],
  "status": 200
})


Mock.mock('/mock/projects/list','post',function(req){
  console.log(req)
  var cs=JSON.parse(req.body)
  console.log(cs)

  if(cs==1){
    // return data
  }else{
    // return data
  }

})

Mock.mock('')
