import request from "@/utils/request";

const reqAwadsCertification = data => request({
  url: "/get_awas/certif1ications",
  type: "get",
  data
});

const reqAwadsCompetion = data => request({
  url: "/get_awas/competions",
  type: "get",
  data
});

export default {
  reqAwadsCertification,
  reqAwadsCompetion
}
