import request from "@/utils/request";

const reqRegulations = data => request({
  url: '/insitu/all',
  type: "post",
  data
});

const uploadRegulation = data => request({
  url:'/insitu/upload',
  type: "post",
  data
});

const updateRegulation = data => request({
  url:'/insitu/update',
  type: "post",
  data
});

const deleteRegulation = data => request({
  url:'/insitu/update/delFlag',
  type: "post",
  data
});


export default {
  reqRegulations,
  uploadRegulation,
  updateRegulation,
  deleteRegulation
}
