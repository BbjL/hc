import Vue from "vue";
import Router from "vue-router";

import Layout from "@/layout/index";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
      hidden: true,
    },
    //主页
    {
      path: "/home",
      name: "home",
      component: Layout,
      redirect: "/home/all",
      hidden: true,
      children: [
        {
          path: "/home/all",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/home/index"),
        },
      ],
    },
    // //组别列表
    {
      path: "/groups",
      name: "groups",
      component: Layout,
      redirect: "/groups/list",
      meta: { title: "所有组别" },
      hidden: true,
      children: [
        {
          path: "/groups/list",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/groupsList/index"),
          meta: { title: "组别列表", nextRoute: "/groups/list/info" },
        },
        {
          path: "/groups/list/info",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/groupsInfo/index"),
          meta: {
            title: "详细内容",
            notOpacity: true,
            parentRoutes: [{ path: "/groups/list", title: "组别列表" }],
          },
        },
      ],
    },
    // //团队信息
    {
      path: "/message",
      name: "message",
      component: Layout,
      meta: { title: "团队信息", notOpacity: true },
      redirect: "/message/all",
      children: [
        {
          path: "/message/all",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/infomation/index"),
        },
      ],
    },
    // //团队风采
    {
      path: "/elegant",
      name: "elegant",
      component: Layout,
      meta: { title: "团队风采" },
      redirect: "/elegant/list",
      children: [
        {
          path: "/elegant/list",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/teamViewList/index"),
          meta: {
            title: "风采列表",
            notOpacity: true,
            nextRoute: "/elegant/list/info",
          },
        },
        {
          path: "/elegant/list/info",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/teamViewInfo/index"),
          meta: {
            title: "详细内容",
            notOpacity: true,
            parentRoutes: [{ path: "/elegant/list", title: "风采列表" }],
          },
        },
      ],
    },
    // //团队氛围
    {
      path: "/surround",
      name: "surround",
      component: Layout,
      meta: { title: "团队氛围", notOpacity: true },
      redirect: "/surround/list",
      children: [
        {
          path: "/surround/list",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/teamViewList/index"),
          meta: {
            title: "氛围列表",
            notOpacity: true,
            nextRoute: "/surround/list/info",
          },
        },
        {
          path: "/surround/list/info",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/teamViewInfo/index"),
          meta: {
            title: "详细内容",
            notOpacity: true,
            parentRoutes: [{ path: "/surround/list", title: "氛围列表" }],
          },
        },
      ],
    },
    // //团队项目
    {
      path: "/project",
      name: "project",
      component: Layout,
      meta: { title: "团队项目", notOpacity: true },
      hidden: true,
      redirect: "/project/list",
      children: [
        {
          path: "/project/list",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/projectsList/index"),
          meta: {
            title: "团队项目",
            notOpacity: true,
            nextRoute: "/project/list/info",
          },
        },
        {
          path: "/project/list/info",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/projectInfo/index"),
          meta: {
            title: "浏览项目",
            notOpacity: true,
            parentRoutes: [ {path: '/project/list', title: '团队项目'} ]
          },
        },
      ],
    },
    // //科研视频
    {
      path: "/videos",
      name: "videos",
      component: Layout,
      meta: { title: "科研视频", notOpacity: true },
      redirect: "/videos/list",
      children: [
        {
          path: "/videos/list",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/videosList/index"),
          meta: {
            title: "科研视频",
            notOpacity: true,
          },
        },
        {
          path: "/videos/list/info",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/videoInfo/index"),
          meta: {
            title: "浏览视频",
            notOpacity: true,
            parentRoutes: [{ path: "/videos/list", title: "科研视频" }],
          },
        },
      ],
    },
    // //团队荣誉
    {
      path: "/honor",
      name: "honor",
      component: Layout,
      meta: { title: "团队荣誉", notOpacity: true },
      redirect: "/honor/all",
      children: [
        {
          path: "/honor/all",
          component: () => import(/* webpackChunkName: "client-index" */ "@/views/teamHonor"),
        },
      ],
    },
  ],
});

export default router;
