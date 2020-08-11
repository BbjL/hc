<template>
  <div class="others-wrapper">
    <!--搜索栏-->
    <div class="search">
      <input type="text"  placeholder="Search">
      <span class="search-query"><i class="fa fa-search"></i></span>
    </div>
    <!--列表-->
    <h1 class="slider-title">最近上传</h1>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
    <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image" alt="">
      </div>
      <div class="slider-intro">
        <a href="#" title="Basic Image Gallery Post" class="recentpost_title">
          深度学习组
        </a>
        <span class="recentpost_date">January 13, 2014</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props:{
    list:{
      type:Array,
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .others-wrapper
    h1
      font-family normal
      font-weight 300
      font-size 20px
    .search
      position relative
      margin-top 100px
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
      margin-bottom 10px
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
