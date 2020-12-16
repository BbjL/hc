import request from "@/utils/request";

const reqResource = data => request({
  url: '/res/find/all',
  type: "post",
  data
});

const uploadRecource = data => request({
  url:'/res/upload',
  type: "post",
  data
});

const updateResource = data => request({
  url:'/res/update',
  type: "post",
  data
});

const deleteResource = data => request({
  url:'/res/update/del',
  type: "post",
  data
});


export default {
  reqResource,
  uploadRecource,
  updateResource,
  deleteResource
}
