import request from "@/utils/request";

const reqAwardsAll = data => request({
  url:'/award/find/all',
  type: "post",
  data
})

const reqAwardsByGroup = data => request({
  url:'/award/find/group',
  type: "post",
  data
});

const reqAwardsByID = data => request({
  url: '/award/find/id',
  type: "post",
  data
});

const uploadAward = data => request({
  url:'/award/upload',
  type: "post",
  data
});

const updateAward = data => request({
  url:'/award/update',
  type: "post",
  data
});

const changeAwardStatus = data => request({
  url:'/award/update/delFlag',
  type: "post",
  data
})


export default {
  reqAwardsAll,
  reqAwardsByGroup,
  reqAwardsByID,
  uploadAward,
  updateAward,
  changeAwardStatus,
}
