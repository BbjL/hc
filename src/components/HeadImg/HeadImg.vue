<template>
  <div class="HeadImg">
    <img src="@/assets/images/groups/head.png" alt="" style="height:100%;width: 100%">
    <div class="tit">
      <h3 style="font-family: TencentSansw7">{{title}}</h3>
      <span style="font-size: 18px; font-family: TencentSansw7">{{content}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeadImg",
        props:['imgUrl' ,'title' , 'content']
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .HeadImg
    position relative
    height 250px
    background-color rgba(0, 0, 0, 0.86)
    color: #ffffff
    .tit
      position absolute
      top 50%
      left 10%
      >h3
        display inline-block
        font-size 40px
        padding-right 20px
      >span
        font-size 20px

@media (max-width: 768px)
  .HeadImg
    height:180px
@media (max-width: 576px)
  .HeadImg
    height 130px
</style>
