import request from "@/utils/request";

const reqAllGroups = data => request({
  url:'/group/find/allno',
  type: "get",
  data
});


export default {
  reqAllGroups,
}
