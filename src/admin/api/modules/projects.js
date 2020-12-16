import request from "@/utils/request";

const reqProjectList = data => request({
  url:'/pro/all',
  type: "post",
  data
});

const reqProjectByID = data => request({
  url:'/pro/find/id',
  type: "post",
  data
});

const reqProjectByGroup = data => request({
  url:'/pro/group',
  type: "post",
  data
});

const uploadProject = data => request({
  url:'/pro/upload',
  type: "post",
  data
});

const updateProject = data => request({
  url:'/pro/update',
  type: "post",
  data
});


export default {
  reqProjectList,
  reqProjectByID,
  reqProjectByGroup,
  uploadProject,
  updateProject
}
