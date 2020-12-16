import request from "@/utils/request";

const reqSurroundList = data => request({
  url:'/atm/find/all',
  type: "post",
  data
});

const reqSurroundByID = data => request({
  url:'/atm/find/one',
  type: "post",
  data
});

const updateSurround = data => request({
  url:'/atm/find/all',
  type: "post",
  data
});

const uploadSurround = data => request({
  url:'/atm/upload',
  type: "post",
  data
});

const changeSurroundStatus = data => request({
  url:'/atm/update/del',
  type: "post",
  data
});

export default {
  reqSurroundList,
  reqSurroundByID,
  updateSurround,
  uploadSurround,
  changeSurroundStatus,
}
