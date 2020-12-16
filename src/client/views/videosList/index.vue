<template>
  <main class="container info-wrapper">
    <div class="row">
      <!--面包屑-->
      <Bread :list="breadList" />
      <!--主要内容-->
      <article class="col-lg-9">
        <h1 class="title">视频列表</h1>
        <VideosList :groupsList="groupsList" />
      </article>

      <!--侧边栏-->
      <aside class="col-lg-3 col-md-4 d-lg-block d-none" >
        <SliderRight :others="others" nextRoute="/videos/list/info" />
      </aside>
    </div>
  </main>
</template>

<script>
import VideosList from "./components/List";
import Bread from "@client/components/Bread/index";
import SliderRight from "@client/components/SliderRight/index";
import { filterBraed } from "@/utils/filters";
import { reqVidsList, reqRecentVids } from "@client/api/index";

export default {
  name: "videoList",
  components: { VideosList, Bread, SliderRight },
  data() {
    return {
      breadList: filterBraed(this.$route),
      groupsList: [],
      others: [],
    };
  },
  beforeMount() {
    reqVidsList().then((res) => {
      this.groupsList = res.data.vidsList;
    });
    reqRecentVids().then((res) => {
      this.others = res.data.vidsList;
      // 修改传递给sliderright的参数
      this.others.forEach(item => {
        item.title = item.name
        delete item.name
      })
    });
  },
};
</script>

<style lang="scss" >
.info-wrapper {
  color: #444;
  line-height: 20px;
}
.others-wrapper h1 {
  font-family: normal;
  font-weight: 300;
  font-size: 20px;
}
.others-wrapper .search {
  position: relative;
  margin-top: 80px;
  margin-bottom: 40px;
}
.others-wrapper .search input[type="text"] {
  font-size: 14px;
  border: 1px solid rgba(196, 196, 196, 0.4);
  padding: 8px 5px 8px 35px;
}
.others-wrapper .search input[type="text"]:focus {
  border-color: rgba(140, 140, 140, 0.8);
  box-shadow: 0 0 8px rgba(200, 200, 200, 0.6);
  outline: none;
}
.others-wrapper .search .search-query {
  padding: 8px 5px 5px 5px;
  position: absolute;
  cursor: pointer;
  left: 5px;
  color: #7e8c8d;
}
.sidebar {
  margin-left: 10px;
}
.sidebar .slider-img {
  float: left;
  width: 70px;
}
.sidebar .slider-intro {
  overflow: hidden;
  padding-left: 10px;
}
.sidebar .recentpost_title {
  margin-top: 5px;
  display: block;
  line-height: 20px;
}
.sidebar .recentpost_date {
  margin-top: 5px;
  display: inline-block;
  color: #999;
  font-size: 10px;
  line-height: 12px;
}
@media (max-width: 576px) {
  .others-wrapper h1 {
    font-family: normal;
    font-weight: 300;
    font-size: 20px;
  }
  .others-wrapper .search {
    position: relative;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
