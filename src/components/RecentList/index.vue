<template>
  <div class="group-elegant">
    <h3 class="second-title">最近上传</h3>
    <div class="row">
      <div class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="img-wrapper lightboxhover">
          <img width="100%" src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/slide01-400x400.jpg" alt="">
        </div>
        <div class="portfoliolink">
          <div class="piteminfo">
            <h5>软件杯大赛</h5>
            <p class="cportfoliotag"> 荣获三等奖</p>
          </div>
        </div>
      </div>
      <div class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="img-wrapper lightboxhover">
          <img width="100%" src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/slide01-400x400.jpg" alt="">
        </div>
        <div class="portfoliolink">
          <div class="piteminfo">
            <h5>软件杯大赛</h5>
            <p class="cportfoliotag"> 荣获三等奖</p>
          </div>
        </div>
      </div>
      <div class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="img-wrapper lightboxhover">
          <img width="100%" src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/slide01-400x400.jpg" alt="">
        </div>
        <div class="portfoliolink">
          <div class="piteminfo">
            <h5>软件杯大赛</h5>
            <p class="cportfoliotag"> 荣获三等奖</p>
          </div>
        </div>
      </div>
      <div class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="img-wrapper lightboxhover">
          <img width="100%" src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/slide01-400x400.jpg" alt="">
        </div>
        <div class="portfoliolink">
          <div class="piteminfo">
            <h5>软件杯大赛</h5>
            <p class="cportfoliotag"> 荣获三等奖</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props:{
    list:{
      type:Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .group-elegant
    .second-title
      margin 20px 0 2%
    .elegant-item
      padding 0 10px
      position relative
      margin-bottom 20px
      .lightboxhover
        overflow hidden
        border-radius 8px
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
