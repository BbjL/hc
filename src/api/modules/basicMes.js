import request from "@/utils/request";

const reqRegulations = data => request({
  url: "/get_basic_mes/regulation",
  type: "get",
  data
});

const reqResource = data => request({
  url: "/get_basic_mes/resource",
  type: "get",
  data
});

export default {
  reqRegulations,
  reqResource
}
