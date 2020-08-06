import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import TeamMes from '../pages/TeamMes/TeamMes';
import Surrounding from '../pages/Surroounding/Surroounding'
import CardPage from '../pages/CardPage/CardPage'
import GroupsIntro from '../pages/GroupsIntro/GroupsIntro'
import Elegants from '../pages/Elegant/Elegant'
import ElegantDetail from '../pages/ElegantDetail/ElegantDetail'
import Videos from '../pages/Videos/Video'
import VideoDetail from '../pages/VideoDetail/VideoDetail'
import TeamHonor from '../pages/TeamHonor/TeamHonor'          //团队获奖荣誉
import TeamProjects from '../pages/TeamProjects/TeamProjects'   //团队项目

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      meta:{
        isOpacity:true
      }
    },
    {
      path:'/message',
      name:'message',
      component:TeamMes,
      meta:{
        isOpacity:true
      },
    },
    {
      path:'/surrounding',
      name:'surrounding',
      component:Surrounding,
      meta:{
        isOpacity:false
      },
    },
    {
      path:'/cardpage',
      name:'cardpage',
      component:CardPage,
      meta:{
        isOpacity:true
      },
    },
    {
      path:'/groupsintro',
      name:'groupsintro',
      component:GroupsIntro,
      meta:{
        isOpacity:false
      },
    },
    {
      path:'/teamhonor',
      name:'teamhonor',
      component:TeamHonor,
      meta:{
        isOpacity:true
      },
    },
    /**
     * 团队风采
     * */
    {
      path: '/elegant',
      name: 'home',
      component: Elegants
    },
    {
      path:'/details',
      name:'details',
      component:ElegantDetail
    },
    /**
     * 团队视频
     * */
    {
      path:'/videos',
      name:'video',
      component:Videos
    },
    {
      path:'/videodetail',
      name:'videodetail',
      component:VideoDetail
    },
    /**
     * 团队项目
     * */
    {
      path:'/teamprojects',
      name:'teamprojects',
      component:TeamProjects
    },

    // 组别列表
    {
      path:'/groupsList',
      name:'groupsList',
      component:() => import('@/pages/groupsList/index')
    }
  ]
})
