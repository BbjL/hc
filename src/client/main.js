import Vue from "vue";
import App from "./App";
import router from "./router/index";

import "font-awesome/css/font-awesome.css"; //图标库
import "jquery";

import "./plugins";
import "./styles/style.css";

// if (process.env.VUE_APP_MOCK === "true" && process.env.NODE_ENV === "development") {
// }
require("../../mock/client");

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
