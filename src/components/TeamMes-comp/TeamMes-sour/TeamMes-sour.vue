<template>
    <div class="resource">
      <h4 class="tit">实验室资源</h4>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide,index) in team_sour" :key="index">
          <div class="pict-box w-100" >
            <div class="image">
              <img :src="'http://47.112.132.177:8081/res/showimg/{id}?id='+slide.id" class="w-100 h-100" alt="">
            </div>
            <div class=" illu">
              <h5 class="source-tit">{{slide.resName}}</h5>
              <p class="source-content">{{slide.resDetail}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
</template>

<script>
  import {reqTeamSour} from "../../../api";
  export default {
        name: "TeamMes-sour",
        data(){
          return{
            team_sour:'',
            swiperOption: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
              },
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }
            },
          }
        },
        mounted() {
          this.init()
        },
        methods:{
          async init(){
            //获取实验室资源
            const get_resource = await reqTeamSour();
            this.team_sour = get_resource;
            console.log(get_resource);
          },
        }
    }
</script>

<style>
  .append-buttons {
    text-align: center;
    margin-top: 20px;
  }
  .append-buttons a {
    display: inline-block;
    margin: 0 10px;
  }
</style>

<style lang="stylus" rel="stylesheet/stylus">

  .resource
    padding 0 200px
    .tit
      text-align center
  .pict-box
    height 470px
    overflow hidden
    font-size 0
    .image
      height  100%
      width 50%
      display inline-block
      vertical-align middle
    .illu
      height 100%
      width 50%
      vertical-align middle
      display inline-block
      background #F2F3F5
      padding 50px 10px
      .source-tit
        font-family TencentSansw7
        font-size 20px
      .source-content
        text-indent 2em
        font-size 15px
        line-height 24px
        letter-spacing 2px
        color: #5f6464




  @media (max-width: 568px)
    .resource
      padding 0 10px
      .resource-carousel
        .pict-box
          height 210px
          .illu
            padding 0 10px  0
            font-size 12px
</style>



