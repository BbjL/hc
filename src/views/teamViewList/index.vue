<template>
  <div class="container">
    <header>
      <!--面包屑-->
      <Bread :list="breadList" />
      <!--搜索栏-->
      <div class="search">
        <input type="text" placeholder="Search" />
        <span class="search-query"><i class="fa fa-search"></i></span>
      </div>
      <!--标题-->
      <h1 class="title">{{ this.$route.meta.title }}</h1>
    </header>

    <!--风采列表-->
    <ElegantItem :list="list" :nextRoute="nextRoute" />
  </div>
</template>

<script>
import Bread from "@/components/Bread/index";
import ElegantItem from "./conmponents/ViewListItem";
import { filterBraed } from "@/utils/filters";
import { reqElegantList } from "@/api/index";

export default {
  name: "index",
  components: { Bread, ElegantItem },
  data() {
    return {
      breadList: filterBraed(this.$route),
      list: [],
      nextRoute: "",
    };
  },
  methods: {
    init() {
      reqElegantList().then((res) => {
        this.list = res.data.list;
        this.nextRoute = this.$route.meta.nextRoute;
      });
    },
  },
  beforeMount() {
    this.init();
  },
  watch: {
    $route: function () {
      this.init()
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  float: right;
}
.search input[type="text"] {
  font-size: 14px;
  border: 1px solid rgba(196, 196, 196, 0.4);
  padding: 8px 5px 8px 35px;
}
.search input[type="text"]:focus {
  border-color: rgba(140, 140, 140, 0.8);
  box-shadow: 0 0 8px rgba(200, 200, 200, 0.6);
  outline: none;
}
.search .search-query {
  padding: 8px 5px 5px 5px;
  position: absolute;
  cursor: pointer;
  left: 5px;
  color: #7e8c8d;
}
</style>
