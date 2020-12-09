<template>
  <div style="min-height: 800px">
    <div class="HeadImg">
      <img
        src="@/assets/images/groups/head.png"
        alt=""
        style="height: 100%; width: 100%"
      />
      <div class="tit">
        <h3 style="font-family: TencentSansw7">多组别</h3>
        <span style="font-size: 18px; font-family: TencentSansw7"
          >多样化发展</span
        >
      </div>
    </div>

    <Bread :list="breadList" />

    <div class="title-class">
      <div class="container">
        <div class="page-header">
          <h1 class="title">组别列表</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row groups-list">
        <div
          class="col-lg-4 group-item"
          v-for="(group, index) in groups"
          :key="index"
          @click="
            $router.push({ path: '/groups/list/info', query: { id: group.id } })
          "
        >
          <CardItem :group="group" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from "@/components/Bread/index";
import CardItem from "./components/CardItem";
import { filterBraed } from "@/utils/filters";
import { reqGroups } from "@/api/index";

export default {
  name: "Category",
  components: { Bread, CardItem },
  data() {
    return {
      breadList: filterBraed(this.$route),
      groups: [],
    };
  },
  beforeMount() {
    reqGroups().then((res) => {
      this.groups = res.data.groups;
    });
  },
};
</script>

<style lang="scss" scoped>
.HeadImg {
  position: relative;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.86);
  color: #fff;
}
.HeadImg .tit {
  position: absolute;
  top: 50%;
  left: 10%;
}
.HeadImg .tit > h3 {
  display: inline-block;
  font-size: 40px;
  padding-right: 20px;
}
.HeadImg .tit > span {
  font-size: 20px;
}
@media (max-width: 768px) {
  .HeadImg {
    height: 180px;
  }
}
@media (max-width: 576px) {
  .HeadImg {
    height: 130px;
  }
}

.group-item {
  padding: 0 10px;
  position: relative;
  margin-bottom: 20px;
}
.group-item .lightboxhover {
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.group-item .lightboxhover:hover {
  opacity: 0.7;
}
.group-item .portfoliolink {
  position: absolute;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  bottom: 0;
  z-index: 1000;
  transition: opacity 0.5s ease-in;
}
.group-item .portfoliolink .piteminfo {
  padding: 8px;
  text-align: center;
}
</style>
