import request from "@/utils/request";

const reqMemberList = data => request({
  url:'/mem/find/all',
  type: "post",
  data
});

// 分页获取所有在校成员信息
const reqMembersInSchoolByPage = data => request({
  url:'/mem/find/all/enabled',
  type: "post",
  data
});

const reqMembersInSchoolByGroup = data => request({
  url:'/mem/find/group',
  type: "post",
  data
});

const reqMemberById = data => request({
  url:'/mem/find/id',
  type: "post",
  data
});

const uploadMember = data => request({
  url:'/mem/upload',
  type: "post",
  data
});

const updateMember = data => request({
  url:'/mem/update/all',
  type: "post",
  data
});

const changeMemberStatus = data => request({
  url:'/mem/update/status',
  type: "post",
  data
});

export default {
  reqMemberList,
  reqMembersInSchoolByPage,
  reqMembersInSchoolByGroup,
  reqMemberById,
  uploadMember,
  updateMember,
  changeMemberStatus
}
