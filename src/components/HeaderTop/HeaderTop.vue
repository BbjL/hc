<template>
  <div class="sticky-wrapper " :class="[{isOpacity:!$route.meta.isOpacity},{isSticky:isSticky}]" >
      <nav class="navbar navbar-expand-lg navbar-default pb-0 pt-0 h-100
          sticky" >
      <router-link class="navbar-brand ml-sm-5 color" to="/home">
        <img src="../../../static/images/mes/logo.png" width="25" height="30" class="d-inline-block align-top" alt="" style="vertical-align: middle;padding-top: 4px">
        <span style="vertical-align: top;font-size: 30px">海创</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="el-icon-s-operation" style="color: white;"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end mr-sm-5 h-100" id="navbarNavAltMarkup" >
        <div class="navbar-nav  item-list h-100 ">
          <router-link :class="{active:$route.path === '/message'}" class="link-color nav-item nav-link ml-sm-3 mr-sm-3 hvr-underline-from-center" to="/message">
            团队信息
          </router-link>
          <router-link :class="{active:$route.path === '/videos'||$route.path === '/videodetail'}" class= "link-color nav-item nav-link ml-sm-3 mr-sm-3 hvr-underline-from-center" to="/videos">
            科研视频
          </router-link >
          <router-link :class="{active:$route.path === '/surrounding'}" class="link-color nav-item nav-link  ml-sm-3 mr-sm-3 hvr-underline-from-center" to="/surrounding">
            团队氛围
          </router-link>
          <router-link :class="{active:$route.path === '/teamhonor'}" class="link-color nav-item nav-link  ml-sm-3 mr-sm-3 hvr-underline-from-center" to="/teamhonor">
            团队荣誉
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name:'HeaderTop',
    data () {
      return {
        isSticky:false
      }
    },
    mounted(){
      window.addEventListener('scroll' ,this.handleScroll)
    },
    methods:{
      handleScroll(){
        window.scrollY == 0 ? this.isSticky = false:this.isSticky = true;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

   .item-list
     display flex
     align-items center
     .nav-item
        font-family TencentSansw3
        font-weight 600
     .link-color
        padding 26px 0
        color: white;
        transition 0.4s
        &:hover
          color #FFFFFF



  .hvr-underline-from-center
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
    &.active
      &::before
        left: 0;
        right: 0;
  .hvr-underline-from-center:before
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: #ffffff;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before
    left: 0;
    right: 0;



  @media (max-width: 600px)
    .sticky-wrapper
      z-index: 2000;
      transition .4s all ease-in-out
      background-color rgba(34, 34, 34, 1)
      .navbar-brand
         font-family TencentSansw7
         color #fff

  @media (min-width: 768px)
    .sticky-wrapper
      position absolute
      width 100%
      z-index: 2000;
      height 70px
      transition .4s all ease-in-out
      &.isSticky
        position fixed
        top: 0
        z-index: 9999;
        height 60px
        background-color rgba(34, 34, 34, 0.75)
        .item-list
         .link-color
           padding-top 20px
           padding-bottom 20px
      .navbar-brand
        font-family TencentSansw7
        color #fff


    .isOpacity
      background-color rgba(34, 34, 34, 1)
</style>
