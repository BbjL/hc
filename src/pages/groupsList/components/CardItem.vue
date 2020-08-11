<template>
  <div class="row groups-list">
    <div class=" col-lg-4 group-item" v-for="index in 9" :key="index" @click="$router.push({path:childrenPath})">
      <div class="img-wrapper">
        <img
          class="w-100 lightboxhover"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/photo-1416339684178-3a239570f315-400x400.jpg"
          alt="">
      </div>
      <div class="portfoliolink">
        <div class="piteminfo">
          <h5>软件组</h5>
          <!--<p class="cportfoliotag"> Design</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findTargetObj } from '@/filters/index'
export default {
  name: "list",
  props:{
    groupsList: {
      type: Array,
      default: [],
    }
  },
  data(){
    return {
      childrenPath:findTargetObj(this.$router.options.routes, 'path', this.$route.matched[0].path, 'children').children[1].path//跳转到下一路由地址
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .groups-list
    margin-bottom:50px

  .group-item
    padding 0 10px
    position relative
    margin-bottom 20px
    .lightboxhover
      opacity: 1;
      -webkit-transition: opacity .2s ease-in-out;
      -moz-transition: opacity .2s ease-in-out;
      -ms-transition: opacity .2s ease-in-out;
      -o-transition: opacity .2s ease-in-out;
      transition: opacity .2s ease-in-out;
      &:hover
        opacity: .7;
    .portfoliolink
      position: absolute;
      background: #fff;
      background: rgba(255,255,255,.6);
      width: 100%;
      bottom: 0;
      z-index: 1000;
      transition opacity .5s ease-in
      .piteminfo
        padding: 8px;
        text-align: center;
</style>
