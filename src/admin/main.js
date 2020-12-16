// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Plugin } from "vue-fragment"; //去除多余跟标签

import "./style/reset.css";
import "./style/elementUI.css";
import "./style/main.css";
import cookies from "@admin/utils/cookiesjs";
import { getFormatTime } from "./utils/global";
require("../../mock/admin");

Vue.use(ElementUI);
Vue.use(Plugin);
Vue.prototype.$cookies = cookies;
Vue.prototype.$getFormatTime = getFormatTime;

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
