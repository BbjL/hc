import request from "@/utils/request";

const reqElegantList = data => request({
  url: "/elegant/list",
  type: "get",
  data
});

const reqElegantInfo = data => request({
  url: "/elegant/info",
  type: "get",
  data
});

const reqElegantRecent = data => request({
  url: "/elegant/recent",
  type: "get",
  data
});

export default {
  reqElegantList,
  reqElegantInfo,
  reqElegantRecent
}
