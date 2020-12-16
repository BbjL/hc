import router from '@client/router/index'
import NProgress from 'nprogress'   // 加载进度条
import 'nprogress/nprogress.css'

NProgress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  height:5,
  minimum: 0.3, // 初始化时的最小百分比
  template: '<div style="z-index:10000" class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
})

// 路由跳转前
// eslint-disable-next-line
router.beforeEach((to, from , next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});

router.afterEach(() => {
  NProgress.done();
})
