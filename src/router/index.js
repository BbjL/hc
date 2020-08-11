import Vue from 'vue'
import Router from 'vue-router'

import Layout from  '@/layout/index'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      hidden:true,
    },
    //主页
    {
      path:'/home',
      name:'home',
      component:Layout,
      redirect:'/home/all',
      hidden:true,
      children:[
        {
          path:'/home/all',
          component:() => import('../pages/home/index'),
        }
      ]
    },
    //组别列表
    {
      path:'/groups',
      name:'groups',
      component:Layout,
      redirect:'/groups/list',
      meta :{title:"组别列表"},
      hidden:true,
      children:[
        {
          path:'/groups/list',
          component:() => import('../pages/groupsList/index'), // 重定向路由卜写title  为了方便Bread组件
        },
        {
          path:'/groups/info',
          component:() => import('../pages/groupsInfo/index'),
          meta:{title:"浏览组别", notOpacity:true},
        }
      ]
    },
    //团队信息
    {
      path:'/message',
      name:'message',
      component:Layout,
      meta:{title:'团队信息', notOpacity:true},
      redirect:"/message/all",
      children:[
        {
          path: '/message/all',
          component: () => import('@/pages/infomation/index')
        }
      ]
    },
    //团队风采
    {
      path:'/elegant',
      name:'elegant',
      component:Layout,
      meta:{title:'团队风采'},
      redirect:"/elegant/list",
      children:[
        {
          path: '/elegant/list',
          component: () => import('@/pages/elegantList/index'),
          meta:{notOpacity:true}
        },
        {
          path: '/elegant/info',
          component: () => import('@/pages/elegantInfo/index'),
          meta:{title:'浏览风采', notOpacity:true}
        }
      ]
    },
    //团队氛围
    {
      path:'/surround',
      name:'surround',
      component:Layout,
      meta:{title:'团队氛围', notOpacity:true},
      redirect:"/surround/list",
      children:[
        {
          path: '/surround/list',
          component: () => import('@/pages/surroundList/index'),
          meta:{notOpacity:true}
        },
        {
          path: '/surround/info',
          component: () => import('@/pages/surroundInfo/index'),
          meta:{title:'浏览氛围', notOpacity:true}
        }
      ]
    },
    //团队项目
    {
      path:'/project',
      name:'project',
      component:Layout,
      meta:{title:'团队项目', notOpacity:true},
      hidden:true,
      redirect:"/project/list",
      children:[
        {
          path: '/project/list',
          component: () => import('@/pages/projectsList/index'),
          meta:{notOpacity:true}
        },
        {
          path: '/project/info',
          component: () => import('@/pages/projectInfo/index'),
          meta:{title:'浏览项目', notOpacity:true}
        }
      ]
    },
    //科研视频
    {
      path:'/videos',
      name:'videos',
      component:Layout,
      meta:{title:'科研视频', notOpacity:true},
      redirect:"/videos/all",
      children:[
        {
          path: '/videos/all',
          component: () => import('@/pages/videosList/index'),
          meta:{ notOpacity:true},      // title 不用写  默认从定向到这里
        },
        {
          path: '/videos/info',
          component: () => import('@/pages/videoinfo/index'),
          meta:{title:'浏览视频', notOpacity:true},

        }
      ]
    },
    //团队荣誉
    {
      path:'/honor',
      name:'honor',
      component:Layout,
      meta:{title:'团队荣誉', notOpacity:true},
      redirect:"/honor/all",
      children:[
        {
          path: '/honor/all',
          component: () => import('@/pages/teamHonor')
        }
      ]
    }
  ]
})
