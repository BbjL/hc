import request from "@/utils/request";


// 获取所有年份
const reqElegantIncludeYear = data => request({
  url:'/elegant/ages', 
  type: "get",
  data
})

const reqElegantByID = data => request({
  url:'/elegant/details',
  type: "post",
  data
});

const reqElegantByYear = data => request({
  url:'/elegant/age',
  type: "post",
  data
});

const reqElegantByGroup = data => request({
  url:'/elegant/group',
  type: "post",
  data
});

const updateElegant = data => request({
  url:'/elegant/update',
  type: "post",
  data
});

const uploadElegant = data => request({
  url:'/elegant/upload',
  type: "post",
  data
});

const updateElegantStatus = data => request({
  url:'/elegant/update/delFlag',
  type: "post",
  data
})


export default {
  reqElegantIncludeYear,
  reqElegantByYear,
  reqElegantByGroup,
  reqElegantByID,
  updateElegant,
  uploadElegant,
  updateElegantStatus,
}
