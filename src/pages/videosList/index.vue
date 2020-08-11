<template>
  <main class="container info-wrapper" >

    <div class="row">
      <!--面包屑-->
      <Bread :list="breadList"/>
      <!--主要内容-->
      <article class=" col-lg-9 col-md-8">
        <h1 class="title">视频列表</h1>
        <VideosList/>
      </article>

      <!--侧边栏-->
      <aside class=" col-lg-3 col-md-4">
        <OthersSlider/>
      </aside>

    </div>
  </main>
</template>

<script>
import VideosList  from './components/List/index'
import Bread from '../../components/Bread/index'
import OthersSlider from '@/components/OthersSlider/index'
import { filterBraed } from '@/filters/index'

export default {
  name: "index",
  components:{VideosList, Bread, OthersSlider},
  data(){
    return {
      breadList:filterBraed(this.$route)

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .info-wrapper
    color: #444
    line-height:20px

  .others-wrapper
    h1
      font-family normal
      font-weight 300
      font-size 20px
    .search
      position relative
      margin-top 80px
      margin-bottom 40px
      input[type='text']
        font-size 14px
        border 1px solid rgba(196,196,196,.4)
        padding: 8px 5px 8px 35px;
        &:focus
          border-color: rgba(140,140,140,.8);
          box-shadow  0 0 8px rgba(200,200,200,.6)
          outline none
      .search-query
        padding: 8px 5px 5px 5px;
        position absolute
        cursor pointer
        left 5px
        color: #7e8c8d

  .sidebar
    margin-left:10px
    .slider-img
      float left
      width:70px
    .slider-intro
      overflow hidden
      padding-left:10px
    .recentpost_title
      margin-top 5px
      display block
      line-height: 20px;
    .recentpost_date
      margin-top 5px
      display inline-block
      color: #999
      font-size 10px
      line-height 12px



  @media (max-width: 576px)
    .others-wrapper
      h1
        font-family normal
        font-weight 300
        font-size 20px
      .search
        position relative
        margin-top 20px
        margin-bottom 40px

</style>
