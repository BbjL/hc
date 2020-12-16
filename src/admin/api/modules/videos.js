import request from "@/utils/request";

const reqVidsList = data => request({
  url: '/video/page',
  type: "post",
  data
});

const reqVidByID = data => request({
  url: '/video/id',
  type: "post",
  data
});


const uploadVid = data => request({
  url: '/video/upload',
  type: "post",
  data
});

const updateVid = data => request({
  url: '/video/update',
  type: "post",
  data
});

const changeVideoState = data => request({
  url: '/video/status',
  type: "post",
  data
});


export default {
  reqVidsList,
  reqVidByID,
  uploadVid,
  updateVid,
  changeVideoState
}
