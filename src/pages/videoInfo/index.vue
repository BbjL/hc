<template>
  <div class="container ">
    <div class="row">
      <Bread :list="breadList"/>
      <div class="col-lg-9 col-md-8">
        <!--头部标题-->
        <header>
          <h1 class="title">水下机器人潜水深度测试</h1>
        </header>
        <!--视频视频和简介内容-->
        <article class="article-content">
          <vueMiniPlayer ref="vueMiniPlayer" :video="video" style="width: 100%;height: auto" :mutex="true" />
          <div class="basic-info">
            <span><i class="fa fa-user-circle"></i>发布小组：水下机器人组</span>
            <span><i class="fa fa-calendar"></i>发布时间：2019-6-6</span>
          </div>
          <div >
            <p>废话说在开头:我真的没有咕咕咕！！ 好不容易放假，舒舒服服的睡了个美容觉后，就看到了来自朋友的消息：“检测到未处理的木马文件，疑似被黑客入侵” 因为昨天溯源的时候了解了一下TCP跳转之类的神奇东西，所以耽误了一些事情，想起来这篇文章的时候已经是半夜了，今天早上朋友的手机收到了来自某服务商的短信， 短信上附加了某服务商的修复建议，大体上与我的过程相同，于是早上又学习了大佬的文章，就只能现在开始写这篇文章了，溯源工作并没有完全做完，实际上我是想找到他的真实地址，而非C2服务器或者跳板机的地址，后期我会继续寻找这个真实地址并且出一期全文件解析，顺便学习溯源知识。 接下来正式开始</p>
          </div>
        </article>
        <!--底部申请列表-->
        <footer class="article-footer">
          <h1 class="second-title">发表意见</h1>
          <form action="">
            <p class="comment-form-comment">
              <label for="comment">Advice <span class="required">*</span></label>
              <textarea v-model="text" id="comment" name="comment" cols="45" rows="8" required="required" maxlength="500"></textarea>
            </p>
            <div class="row">
              <p class="comment-form-author">
                <label for="author">Name <span class="required">*</span></label>
                <input v-model="auth" id="author" name="author" type="text" value="" size="30" maxlength="245" required="required">
              </p>
              <p class="comment-form-email">
                <label for="email">Email <span class="required">*</span></label>
                <input id="email" v-model="email" name="email" type="text" value="" size="30" maxlength="100"  required="required">
              </p>
            </div>
            <button  class="submit" @click="handleSubmit" >Post Request</button>
          </form>
        </footer>
      </div>
      <!--侧边栏其他-->
      <div class="col-lg-3 col-md-4">
        <OthersSlider :list="[]"/>
      </div>
    </div>
  </div>
</template>

<script>
import OthersSlider from '@/components/OthersSlider/index'
import Bread from '../../components/Bread/index'
import { filterBraed } from '@/filters/index'

export default {
  components:{OthersSlider, Bread},
  data () {
    return {
      video: {
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png',
        muted: false,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      auth:'',
      email:'',
      text:'',
      breadList:filterBraed(this.$route)
    }
  },
  computed:{
    $video(){
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  methods:{
    handleSubmit(){
      const auth = this.auth;
      const email = this.email;
      const text = this.text;
      if(auth && email && text){
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

<style lang="stylus" rel="stylesheet/stylus">
  .basic-info
    font-size 14px
    margin 10px 0
    span:not(:last-of-type)::after
      content '|'
      padding 0 10px 0 5px
      font-size 12px

  .article-footer
    margin-bottom 50px
    .required
      color: red
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
      width 50%
      input
        width: 100%
        display block


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
