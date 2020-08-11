import Vue from 'vue'
import App from './App'
import router  from './router/index'
import store from '@/store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../static/css/reset.css'   //默认样式

import 'animate.css'                        //animate
import './assets/css/style.css'
import 'font-awesome/css/font-awesome.css'    //图标库

require('@/mock/groups')

import axios from 'axios' // 引入axios
Vue.prototype.$http = axios

import swal from 'sweetalert'   //alert
Vue.prototype.$swal = swal

import VueAwesomeSwiper from 'vue-awesome-swiper'   //swiper
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import { Plugin } from 'vue-fragment'  //去除组件包含标签
Vue.use(Plugin)

import vueMiniPlayer from 'vue-mini-player' // video
import 'vue-mini-player/lib/vue-mini-player.css'
Vue.use(vueMiniPlayer)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

