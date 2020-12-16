import axios from "axios";
import router from "@client/router/index";

export default function request({ url, data, type = "GET" }) {
  return new Promise((resolve, reject) => {
    const _type = type.toLocaleUpperCase();
    let promise = null,
      _url = url;

    // 请求类型判断
    switch (_type) {
      case "GET":
        if (data !== undefined) {
          _url += "?";
          Object.keys(data).forEach((param) => {
            _url += `${param}=${data[param]}&`;
          });
          _url = _url.slice(0, -1);
        }
        promise = axios.get(_url);
        break;
      case "POST":
        promise = axios.post(_url);
        break;
    }

    promise
      .then((res) => {
        resolve(res);
      })
      .catch((reason) => {
        reject(reason);
      });
  });
}

// 請求攔截
let cancelQueen = [];

const removePending = (config) => {
  cancelQueen.forEach((request, index) => {
    if (request.url === config.url && request.method === config.method) {
      request.cancel();
      cancelQueen.splice(index, 1);
    }
  });
};

axios.interceptors.request.use(function(config) {
  removePending(config); // 取消重复请求

  config.cancelToken = new axios.CancelToken(function(cancel) {
    cancelQueen.push({
      url: config.url,
      method: config.method,
      cancel,
    });
  });

  return config;
});

axios.interceptors.response.use(function(response) {
  // 请求成功则清除相应的cancelQueen请求
  cancelQueen.forEach((item, index) => {
      if (item.url === response.config.url && item.method === response.config.method) {
          cancelQueen.splice(index, 1)
      }
  });
  
  return response;
});


// 监听每次路由的跳转
// eslint-disable-next-line
router.beforeEach((to, from ,next) => {
  cancelQueen.forEach(request => {
    request.cancel()
  })
  // 清空请求队列
  cancelQueen = [];
  next()
})