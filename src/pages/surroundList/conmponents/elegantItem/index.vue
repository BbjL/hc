<template>
  <div class="row" >
    <div class="col-lg-6 col-md-6 " v-for="index in 10" :key="index">
      <div class="elegant-item">
        <div class="row">

          <div class="img-wrapper col-lg-5 col-md-5">
            <img
              class="w-100 lightboxhover"
              src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-270x270.jpg" alt="">
          </div>

          <div class="short-intro  col-lg-7 col-md-7">
            <div class="post-date">
              <span>13</span>
              July 2019
            </div>
            <header class="intro-header">
              <h3 class="intro-title">计算机设计大赛中荣获三等奖</h3>
            </header>
            <main class="intro-content">
              <p >
                Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库...
                <span @click="$router.push({path:childrenPath})">READ MORE</span>
              </p>
            </main>
          </div>

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
    list:{
      type:Array,
    }
  },
  data(){
    return {
      childrenPath:findTargetObj(this.$router.options.routes, 'path', this.$route.matched[0].path, 'children').children[1].path//跳转到下一路由地址
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .elegant-item
    border: 1px solid  rgba(0,0,0,.05);
    margin: 0 0 20px 0;

  .post-date
    float: right;
    padding: 6px 8px 8px;
    color: #777
    margin-top: 15px;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
    background-color rgba(0, 0, 0, 0.05)
    line-height: normal;
    span
      font-size 24px
      display block

  .short-intro
    margin-left -15px
    font-size: 14px
    .intro-header
      font-size 24px
      margin  15px 0
      .intro-title
        font-family normal
        color: rgb(68, 68, 68);
        font-weight 400
    .intro-content
      span
        color: #6c8dab
        cursor: pointer

  @media (max-width: 768px)
    .short-intro
      margin-left 0
</style>
