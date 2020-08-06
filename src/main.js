// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router  from './router/index'
import ElementUI from 'element-ui';         //element-ui
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../static/css/reset.css'   //默认样式
import $ from 'jquery'
import 'animate.css'                        //animate
import '../static/css/style.css'
import 'font-awesome/css/font-awesome.css'    //图标库
import VueAwesomeSwiper from 'vue-awesome-swiper'   //swiper
import 'swiper/dist/css/swiper.css'

require('@/mock/groups')

import axios from 'axios' // 引入axios

Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

