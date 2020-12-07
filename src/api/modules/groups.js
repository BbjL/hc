import request from "@/utils/request";

const reqGroups = data => request({
  url: "/req_grops",
  type: "get",
  data
});

const reqGroupsInfo = data => request({
  url: "/req_grops/info",
  type: "get",
  data
});

export default {
  reqGroups,
  reqGroupsInfo
}
