import request from "@/utils/request";

const reqLogin = data => request({
  url: "/login",
  type: "post",
  data
});


export default {
  reqLogin,
}
