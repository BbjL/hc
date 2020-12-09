<template>
  <div class="others-wrapper">
    <!--搜索栏-->
    <div class="search">
      <input type="text" placeholder="Search" />
      <span class="search-query"><i class="fa fa-search"></i></span>
    </div>
    <!--列表-->
    <h1 class="slider-title">最近上传</h1>

    <div v-for="(item, index) in others" :key="index">
      <SliderRightItem :recentItem="item" :nextRoute="nextRoute" />
    </div>
  </div>
</template>

<script>
import SliderRightItem from "@/components/SliderRightItem/index";

export default {
  name: "SliderRight",
  components: { SliderRightItem },
  props: {
    others: {
      type: Array,
      required: true,
    },
    nextRoute: {
      type: String,
    },
  },
};
</script>

<style lang="scss" >
.others-wrapper h1 {
  font-family: normal;
  font-weight: 300;
  font-size: 20px;
}
.others-wrapper .search {
  position: relative;
  margin-top: 100px;
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
.others-wrapper .sidebar {
  margin-left: 10px;
  margin-bottom: 10px;
}
.others-wrapper .sidebar .slider-img {
  float: left;
  width: 70px;
}
.others-wrapper .sidebar .slider-intro {
  overflow: hidden;
  padding-left: 10px;
}
.others-wrapper .sidebar .recentpost_title {
  margin-top: 5px;
  display: block;
  line-height: 20px;
}
.others-wrapper .sidebar .recentpost_date {
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
