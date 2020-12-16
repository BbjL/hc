import request from "@/utils/request";


// 获取所有年份
const reqEmailsAll = data => request({
  url:'/email/find/all',
  type: "post",
  data
})

const deleteEmail = data => request({
  url:'/email/update/del',
  type: "post",
  data
});



export default {
  reqEmailsAll,
  deleteEmail,
}
