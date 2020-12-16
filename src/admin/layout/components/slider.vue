<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="rgb(6 55 90)"
    text-color="#fff"
    active-text-color="#fff"
    menu-trigger="#2D8CF0"
    unique-opened
    :router="true"
    :collapse="isCollapse"
  >
    <h3 class="tit" v-if="!isCollapse" @click="$router.push({ name: 'home' })">
      海创团队
    </h3>
    <h3 class="tit" v-else @click="$router.push({ name: 'home' })">HC</h3>
    <p class="tit-divi">Main</p>

    <sliderMeau :routes="routes" />
  </el-menu>
</template>

<script>
import sliderMeau from "./sliderMeau";

export default {
  name: "slider",
  components: { sliderMeau },
  props: ["isCollapse"],
  data() {
    return {
      routes: [],
    };
  },
  beforeMount() {
    const { routes } = this.$router.options;
    this.routes = this.filterAsyncRoutes(routes);
  },
  methods: {
    // 过滤路由
    filterAsyncRoutes(routes) {
      let res = [];
      routes.forEach((route) => {
        if (!(route.meta && route.meta.noShow && route.meta.noShow === true)) {
          if (route.children) {
            route.children = this.filterAsyncRoutes(route.children);
          }
          res.push(route);
        }
      });
      return res;
    },
  },
};
</script>

<style lang="scss">
.el-menu-vertical-demo .tit {
  font-family: TencentSansw3;
  margin-top: 20px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}
.el-menu-vertical-demo .tit-divi {
  font-weight: 700;
  color: #adb5bd;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
