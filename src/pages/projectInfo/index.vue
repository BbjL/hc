<template>
  <main class="container info-wrapper" >

    <!--路由导航-->
    <Bread :list="breadList"/>
    <!--主要内容-->
    <article >
      <!--标题  简介-->
      <header class="article-header">
        <h1 class="title">水下去物</h1>
        <div class="basic-info">
          <span><i class="fa fa-user-circle"></i>负责人：卜建立</span>
          <span><i class="fa fa-calendar"></i>开始时间：2019-6-6</span>
        </div>
        <div class="article-date"></div>
      </header>
      <!--主要内容介绍-->
      <main class="article-content">
        <!--大图-->
        <div class="article-img">
          <img
            width="100%"
            src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-848x400.jpg" alt="">
        </div>
        <!--简介-->
        <p>
          废话说在开头:我真的没有咕咕咕！！
          好不容易放假，舒舒服服的睡了个美容觉后，就看到了来自朋友的消息：“检测到未处理的木马文件，疑似被黑客入侵”
          因为昨天溯源的时候了解了一下TCP跳转之类的神奇东西，所以耽误了一些事情，想起来这篇文章的时候已经是半夜了，今天早上朋友的手机收到了来自某服务商的短信， 短信上附加了某服务商的修复建议，大体上与我的过程相同，于是早上又学习了大佬的文章，就只能现在开始写这篇文章了，溯源工作并没有完全做完，实际上我是想找到他的真实地址，而非C2服务器或者跳板机的地址，后期我会继续寻找这个真实地址并且出一期全文件解析，顺便学习溯源知识。
          接下来正式开始
        </p>
        <!--组内近况-->
        <RecentList :list="[]"/>
      </main>
    </article>

    <!--底部申请列表-->
    <footer class="article-footer">
      <h1 class="second-title">申请加入</h1>
      <form action="">
        <p class="comment-form-comment">
          <label for="comment">Introduce</label>
          <textarea id="comment" v-model="text" name="comment" cols="45" rows="8" maxlength="500" required="required" ></textarea>
        </p>
        <div class="row">
          <p class="comment-form-author">
            <label for="author">Name <span class="required">*</span></label>
            <input id="author" v-model="auth" name="author" type="text" value="" size="30" maxlength="245" required="required">
          </p>
          <p class="comment-form-major">
            <label for="major">Major <span class="required">*</span></label>
            <input id="major" v-model="major" name="text" type="text" value="" size="30" maxlength="100"  required="required">
          </p>
          <p class="comment-form-email">
            <label for="email">Email <span class="required">*</span></label>
            <input id="email" v-model="email" name="email" type="text" value="" size="30" maxlength="100"  required="required">
          </p>
        </div>
        <button  class="submit" @click="handleSubmit" >Post Request</button>
      </form>
    </footer>
  </main>
</template>

<script>
import OthersSlider from '@/components/OthersSlider/index'
import { filterBraed } from '@/filters/index'
import Bread from '../../components/Bread/index'
import RecentList from '@/components/RecentList'

export default {
  name: "index",
  components:{OthersSlider, Bread, RecentList},
  data(){
    return {
      breadList:filterBraed(this.$route),
      auth:'',
      email:'',
      text:'',
      major:''
    }
  },
  methods: {
    handleSubmit(){
      const auth = this.auth;
      const email = this.email;
      const text = this.text;
      const major = this.text;
      if(auth && email && text && major){
        this.$swal("暂未启用该功能!", {
          button: false,
          timer: 2000,
        });
      }
      return false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.info-wrapper
  color: #444

.article-header
  font-size 14px
  .basic-info
    font-size 14px
    margin 10px 0
    span:not(:last-of-type)::after
        content '|'
        padding 0 10px 0 5px
        font-size 12px

.article-footer
  margin-bottom 50px
  .comment-form-comment
    margin 15px 0
    #comment
      display block
      width 100%
  .submit
    margin:20px 0
  .comment-form-author,.comment-form-email,.comment-form-major
    float left
    padding:0 15px
    width 33.333333%
    .required
      color: red
    input
      width: 100%
      display block

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


@media (max-width: 576px)
  .article-footer
    margin-bottom 50px
    .comment-form-comment
      margin 15px 0
      #comment
        display block
        width 100%
    .submit
      margin:20px 0
    .comment-form-author,.comment-form-email,.comment-form-major
      float none
      width 100%
      margin:10px 0

</style>
