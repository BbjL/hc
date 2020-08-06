<template>
  <div class="video_detail" v-if="video" style="background-color: white;height: 100%">
      <div class="blankele"></div>
      <div class="video_detail1" style="min-height: 800px">
        <div class="breadcrumb-nav">
          <Bread locations2="科研视频" path2="/videos" locations3="详细介绍" path3=""/>
        </div>
        <div class="video_title">
          <p>{{video.videoName}}</p>
        </div>
        <div class="video_main">
          <div class="video_main_text">
            <div class="video_text">
              <video
                :id="'myVideo'+id"
                controls
                aspectRatio="16:9"
                fluid
                width="100%"
                height="100%"
                class="video"
                v-if="video.videoUrl"
              >
              <source
                :src="video.videoUrl"
                type="video/mp4"
              >
              </video>
            </div>
          </div>
          <div  class="brief">
            <p class="brief_p">详细介绍：</p>
            <div id="videoDetail"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Bread from '@/components/BreadNav/BreadNav'
  import {reqVideoDetails} from '../../api/index'
  import store from 'store'
  export default {
    components:{Bread},
    data() {
      return {
        video:{},
        detail:'',
        id:0,
      }
    },
    async mounted () {
      window.scrollTo(0,0)

      this.id = store.get('haiChuangVideoNo')
      var result = await reqVideoDetails(this.id)
      this.video = result.obj
      this.video.videoUrl = 'http://47.112.132.177:8081/video/showVideo/' + this.id
      $('#videoDetail').html(this.video.videoDetail)
    }
  }
</script>

<style>
  body{
    overflow-y: auto !important;
  }
  video:focus{
    outline: 0;
  }
  .video_bread{
    width: 100%;
    background-color: rgb(242,243,245);
    height: 50px;
  }
  .video_bread .video_bread1{
    margin-left: 20vw;
  }
  .video_bread .font{
    font-size: 20px;
    line-height: 50px;
    height: 50px;
  }
  .video_detail1{
    width: 60vw;
    margin: 80px auto 0;
  }
  .video_detail1 .video_main{
    width: 100%;
    border-top: 2px solid rgb(242,243,245);
  }

  .video_main_text{
    background-color: rgb(242,242,242);
    height: 30vw;
  }
  .video_main .brief{
    margin-top: 25px;
    width: 100%;
    color: black;
  }
  .video_main .brief_p{
    font-size: 22px;
    margin-bottom: 20px;
    text-indent: 0!important;
  }
  .video_main p{
    font-size: 18px;
    line-height: 32px;
  }
  .video_main .video_text{
    margin-top: 10px;
    height: 30vw;
    width: 60vw;
  }
  .video_title{
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
  }
  @media screen and (min-width: 320px)and (max-width: 499px){
    .video{
      margin: auto;
    }
    .my_pre{
      font-size: 22px!important;
      line-height: 26px!important;
    }
    .video_bread{
      width: 100vw;
      background-color: rgb(242,243,245);
      height: 40px;
    }
    .video_bread .video_bread1{
      margin-left: 5vw;
    }
    .video_bread .font{
      font-size: 18px;
      line-height: 40px;
      height: 40px;
    }
    .video_detail1{
      width: 90vw;
      margin: 20px auto 0;
    }
    .video_title p{
      font-size: 22px;
      color: black;
    }
    .video_detail1 .video_main{
      width: 100%;
      border-top: 4px solid rgb(242,243,245);
    }
    .video_main .brief{
      margin-top: 10px;
      color: black!important;
    }
    .video_main p{
      font-size: 14px;
      line-height: 20px;
    }
    .brief_p{
      font-size: 16px;
    }
    .video_main_text{
      background-color: rgb(242,242,242);
      height: 40vw;
    }
    .brief h3{
      font-size: 20px;
    }
    .video_main .video_text{
      margin-top: 30px;
      height: 38vw;
      width: 100%;
      margin: auto;
    }
  }
</style>
