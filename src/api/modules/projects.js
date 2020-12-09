import request from "@/utils/request";

const reqProjs = data => request({
  url: "/get_projs",
  type: "get",
  data
});

const reqProjInfo = data => request({
  url: "/get_projs/info",
  type: "get",
  data
});

const reqProjsRecent = data => request({
  url: "/get_projs/recent",
  type: "get",
  data
});

export default {
  reqProjs,
  reqProjInfo,
  reqProjsRecent
}
