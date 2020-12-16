import request from "@/utils/request";

const reqVidsList = data => request({
  url: "/get_vids",
  type: "get",
  data
});

const reqVidInfo = data => request({
  url: "/get_vids/info",
  type: "get",
  data
});

const reqRecentVids = data => request({
  url: "/get_vids/recent",
  type: "get",
  data
});

export default {
  reqVidsList,
  reqVidInfo,
  reqRecentVids
}
