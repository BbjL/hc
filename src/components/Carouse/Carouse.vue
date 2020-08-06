<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" ><!--carouselExampleFade-->
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleFade" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner " >
      <div class="carousel-item active">
        <img class="d-block w-100 h-100" src="../../../static/images/10.jpg" alt="First slide">
        <div class="carousel-caption  slogan-box"><!--d-none d-md-block-->
          <div class="wthree-banner-grids row">
            <div class="col-5 agileinfo-banner-right">
              <h5>丰富学习资源和设备资源</h5>
              <p>丰富多样的学习资源，实验室购买了多种学习教程，可供快速学习入门。团队设备上，我们拥有工业机械臂、水下机器人以及智能投料机器人，
                拥有多届实验室成员开发成果以及专供实验室内部使用的刀片服务器。
              </p>
            </div>
            <div class="col-7 agileits-banner-left">
              <h3>丰富的实验室资源</h3>
              <h4>Abundant team resources</h4>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="banner-border"> </div>
          <div class="w3-button">
            <a href="javascript:;"  @click="clickScroll">了解更多</a>
          </div>
        </div>
      </div>
      <div class="carousel-item ">
        <img class="d-block w-100 h-100"  src="../../../static/images/2.jpg" alt="Second slide">
        <div class="carousel-caption  slogan-box"><!--d-none d-md-block-->
          <div class="wthree-banner-grids row">
            <div class="col-5 agileinfo-banner-right">
              <h5>团队文化是团队的灵魂</h5>
              <p>
                团队成果源自优秀的团队文化。在海创，我们共同努力，互相监督，以团结战斗的精神去完成共同的目标。每两周例会，
                总结这段时间的学习成果，时时勉励自己不能懈怠。寒暑假的留校习惯深入各个实验室成员的
                心中，在别人休息玩趣的时间，领先别人掌握各方面的知识，增强自身的就业竞争力。
              </p>
            </div>
            <div class="col-7 agileits-banner-left">
              <h3>优秀的团队文化</h3>
              <h4>Good team culture</h4>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="banner-border"> </div>
          <div class="w3-button">
            <a href="javascript:;" @click="clickScroll">了解更多</a>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" s>
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</template>

<script>
    export default {
        name: "Carouse",
        methods:{
          clickScroll(){
            $('html').animate({ scrollTop: "768" }, 700);
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  /*大幕文字内容*/
  .wthree-banner-grids
    margin-top 100px
    max-height 160px
    .agileits-banner-left
      text-align center
      >h3
        color: #FFFFFF;
        font-size: 3em;
        margin: 10px 0;
        letter-spacing: 1px;
        font-weight: 600;
        text-transform: uppercase;
      >h4
        color: #FFFFFF;
        font-size: 1em;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin: .5em 0 0 0;
    .agileinfo-banner-right
      text-align center
      >h5
        color: #FFFFFF;
        font-size: 1em;
        margin: 0 0 1em 0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 4px;
      >p
        color: #FFFFFF;
        font-size: .9em;
        line-height: 1.8em;
        margin: 0 auto;
        width: 75%;
        letter-spacing 2px


  .banner-border
    height: 1px;
    background: #FFFFFF;
    width: 20%;
    margin: 6em auto 5em;
  .w3-button
    margin: 0;
    padding: 1em;
    z-index: 1;
    text-align: center;
    >a
      color: #FFFFFF;
      font-size: .9em;
      padding: .8em 1.6em;
      border: solid 1px #FFFFFF;
      text-decoration: none;
      margin: 0;
      background: none;
      text-transform: uppercase;
      &:hover
        background-color #fbd232


  /*大幕切换按钮*/
  .carousel-control-prev , .carousel-control-next
    height: 50px;
    width: 50px
    position absolute
    top 50%
    transform translate(0,-50%)
    border-radius 50%
    border 1px solid #fff
  .carousel-control-prev
    margin-left 50px
  .carousel-control-next
    margin-right 50px
  .carousel-item
    position relative
    height 778px
    overflow hidden
  .slogan-box
    position absolute
    left 15%
    top 20%
    font-family TencentSansw7
  .carousel-indicators
    margin-bottom  60px
    >li
      height 10px
      width 10px
      border-radius 50%
      background-color: #aeaeae
      &.active
        background-color white



  @media (max-width: 768px)
    /*大幕文字内容*/
    .wthree-banner-grids
      margin-top 0px
      .agileits-banner-left
        text-align center
        >h3
          color: #FFFFFF;
          font-size: 18px;
          margin: 10px 0;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
        >h4
          color: #FFFFFF;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin: .5em 0 0 0;
      .agileinfo-banner-right
        text-align center
        >h5
          color: #FFFFFF;
          font-size: 14px;
          margin: 0 0 1em 0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 4px;
        >p
          color: #FFFFFF;
          font-size: 12px;
          line-height: 1.8em;
          margin: 0 ;
          width: 100%;
          letter-spacing 2px
    .banner-border
      height: 1px;
      background: #FFFFFF;
      width: 20%;
      margin: 6em auto 5em;
    .w3-button
      margin: 0;
      padding: 1em;
      z-index: 1;
      text-align: center;
      >a
        color: #FFFFFF;
        font-size: .9em;
        padding: .8em 1.6em;
        border: solid 1px #FFFFFF;
        text-decoration: none;
        margin: 0;
        background: none;
        text-transform: uppercase;
        &:hover
          background-color #fbd232
    /*大幕切换按钮*/
    .carousel-control-prev , .carousel-control-next
      height: 50px;
      width: 50px
      position absolute
      top 50%
      transform translate(0,-50%)
      border-radius 50%
      border 1px solid #fff
    .carousel-control-prev
      margin-left 50px
    .carousel-control-next
      margin-right 50px
    .carousel-item
      position relative
      height 480px
      overflow hidden
    .slogan-box
      position absolute
      top 6%
      left 10px
      right 10px
      font-family TencentSansw7
    .carousel-indicators
      margin-bottom  0px
      >li
        height 10px
        width 10px
        border-radius 50%
        background-color: #aeaeae
        &.active
          background-color white

</style>
