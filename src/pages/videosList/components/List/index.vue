<template>
  <div class="row groups-list">
    <div class=" col-lg-4 group-item" v-for="index in 9" :key="index" @click="$router.push({path:childrenPath})" >
    <div class="img-wrapper">
      <div class="pre-vid-icon"><i class="fa fa-play-circle-o"></i></div>
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
  name: "index",
  props:{
    groupsList: {
      type: Array
    }
  },
  data(){
    return {
      childrenPath : findTargetObj(this.$router.options.routes, 'path', this.$route.matched[0].path, 'children').children[1].path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .groups-list
    margin-bottom:50px




  .group-item
    padding 0 10px
    position relative
    margin-bottom 20px
    .pre-vid-icon
      &:hover
        opacity: .8;
        background-color rgba(255,255,255,0.6)
      position absolute
      left 0
      right 0
      bottom 0
      top 0
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content center
      align-items center
      opacity: 0;
      cursor pointer
      -webkit-transition: opacity .2s ease-in-out;
      -moz-transition: opacity .2s ease-in-out;
      -ms-transition: opacity .2s ease-in-out;
      -o-transition: opacity .2s ease-in-out;
      transition: opacity .2s ease-in-out;
      i
        color: rgb(255,255,255)
        text-align center
        width 100px
        font-size 100px

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
