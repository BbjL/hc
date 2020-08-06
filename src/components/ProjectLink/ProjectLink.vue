<template>
  <div class="link-box">
    <h3 class="title">项目推动技术</h3>
    <div class="resp_area ">
      <div class=" public_welfare">
        <div class="slide_area">
          <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" style="height: 100%;">
            <div class="carousel-inner" style="height: 100%;">
              <div class="carousel-item" :class="index==0?'active':''" data-interval="3000" style="height: 100%;" v-for="(item, index) in projects" :key="item.id">
                <p class="img-title">{{item.name}}</p>
                <img src="../../assets/images/projects/case_study_img2.png" class="d-block w-100 h-100" alt="">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <i class="hook_tri"></i>
      </div>
      <div class=" resp_details">
        <h3 class="tit">海创团队</h3>
        <p class="txt">创造科技园一流团队</p>
        <router-link to="/message"><i class="icon icon_arrow_r"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {reqTeamProjects} from "../../api";
import swal from 'sweetalert'

require('@/mock/projects')

export default {
      name: "TeamProjects",
      data(){
        return {
          timer:"",
          projects:''
        }
      },
      mounted(){
        this.$http.get('/mock/projects')
          .then(res => {
            if(res.status === 200){
              this.projects = res.data.list
              console.log(this.projects)
            }
          })
      },
      methods:{
        //跳转路由
        goLink(id){
          clearInterval(this.timer);
          this.$router.push({
            path:'teamprojects',
            query:{id:id}
          });
          // swal("暂时没有内容！!", {
          //   button: false,
          //   timer: 2000,
          // });
        },
      }
}
</script>

<style  scoped>
  .link-box .title{width:1280px;font-size: 30px;margin: 10px auto 50px;color: #000;font-family: TencentSansw7;}
  .resp_area{ display:block; width:1280px; height:620px; margin: 0px auto 84px; /*background:url(../img/index/bg_4.png) no-repeat 0 0; background-size: contain;*/ position: relative;}
  .resp_area .public_welfare{ display:block; width:627px; height:620px; position: absolute; left: 0px; top: 0px;}
  .resp_area .slide_area{ display:block; width:627px; height:620px; position: absolute; left: 0px; top: 0px; overflow: hidden;}
  .resp_area .slide_list{
    display:block; width:100%; height:620px; position: relative;color: white;
  }
  .resp_area .slide_list li{ width:627px; height:620px;position: absolute;opacity: 0;transition: opacity 0.3s linear;
    -moz-transition: opacity 0.3s linear;
    -ms-transition: opacity 0.3s linear;
    -o-transition: opacity 0.3s linear;
    -webkit-transition: opacity 0.3s linear;left: 0;top:1px;}
  .resp_area .slide_list li.active{
    opacity: 1;
    z-index: 1;
  }
  .resp_area .slide_list li .shadow_bg{ display:block; width:100%; height:30%; position: absolute; left: 0px; bottom: 0px; background: -webkit-linear-gradient(bottom,rgba(0,0,0,0.15),rgba(0,0,0,0)); pointer-events: none;}
  .resp_area .slide_list li .img-box{ display:block; width:627px; height:620px; position: absolute; left: 0px; top: 0px;}
  .resp_area .slide_list li .img1{
    background: url(./img/index_resp_bg1.jpg) no-repeat center center;background-size: cover;
  }
  .resp_area .slide_list li .img2{
    background: url(./img/index_resp_bg2.jpg) no-repeat center center;background-size: cover;
  }
  .resp_area .slide_list li .img3{
    background: url(./img/index_resp_bg3.jpg) no-repeat center center;background-size: cover;
  }
  .resp_area .slide_list li .tit{ display:block; width: 500px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size: 24px; position: absolute; left: 53px; bottom: 107px;z-index: 1;font-family: 'TencentSansw7';}
  .resp_area .slide_list li .txt{ display:block; width: 500px; font-size: 16px; position: absolute; left: 52px; bottom: 41px; line-height: 29px;z-index: 1;font-family: 'TencentSansw3';}

  .resp_area .public_welfare .hook_tri{z-index:1; display:block; width:43px; height:620px; background: url(./img/i_tri.png) no-repeat 0 0; background-size:  contain; position: absolute; right: 0px; bottom: 0px;}
  .resp_area .slide_area .icon_arrow{ display:block; width:10px; height:16px; background: url(./img/sli-left-icon.png) no-repeat center; position: absolute; right: 144px; bottom: 116px; margin-top:-30px;z-index:5;background-size: 10px 16px;padding: 5px;cursor: pointer; display: none\9; opacity: 0; transition: opacity 0.2s linear;}
  .resp_area .slide_area .icon_arrow_r{ left: auto; right: 98px; background: url(./img/sli-right-icon.png) no-repeat center;background-size: 10px 16px;}
  .resp_area .slide_area:hover .icon_arrow{
    display: block;
    opacity: 1;
  }

  .en-us .resp_area .slide_area .icon_arrow{ right:84px; bottom: 15px;}
  .en-us .resp_area .slide_area .icon_arrow_r{ right:48px;}
  .resp_area .resp_details{ display:block; width: 450px; position: absolute; left: 50%; margin-left: 68px; top: 50%; margin-top: -8.3%;}
  .resp_area .resp_details .tit{ display:block; color: #2a2e2e; width: 450px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size:36px; margin-bottom: 20px;font-family: 'TencentSansw7';}
  .resp_area .resp_details .txt{line-height: 30px; display:block; color: #5f6464; width: 450px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size:20px; margin-bottom: 40px;font-family: 'TencentSansw3';}
  .resp_area .resp_details .icon_arrow_r{ display:block; width: 38px; height: 16px; background: url(./img/icon_arrow_r_dark.png) no-repeat 0 0; margin-left: 3px;background-size: 100% 100%;}

  .en-us .resp_area .resp_details .txt{ white-space:normal; }

</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .alert
    position absolute

  @media (max-width 768px)
    .link-box .title
      width: 100%;
      padding-left: 15px
    .resp_area
      width 100%
      height auto
      .resp_details
        position static
        width 100%
        margin 70px 0 40px
        padding 0 15px
        .tit , .txt
          width 100%
      .public_welfare
        position static
        width: 100%;
        height: 350px;
        margin: 0px ;
        padding 0 15px
        .hook_tri
          display none
        .slide_area
          position relative
          width: 100%;
          height: 100%;

  .img-title
    position absolute
    color: white
    font-size 40px
    font-family TencentSansw7
    text-align center
    top 150px
    right 100px
</style>
