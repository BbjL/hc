<template>
  <div class="member-container">
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide class="slides-item" v-for="(item,index) in allMembers" :key="index">
            <!--<img :src="'http://47.112.132.177:8081/mem/showimg/{id}?id='+item.id" alt="">-->
            <el-image
              style="width: 100%; height: 200px"
              :src="'http://47.112.132.177:8081/mem/showimg/{id}?id='+item.id">
            </el-image>
            <p class="mem-name">{{item.memName}}</p>
            <p class="mem-direct">{{item.memDirectZh}}</p>
          </swiper-slide>
          <!--<swiper-slide class="slides-item">-->
            <!--<img src="../../../static/images/cards/4.jpg" alt="">-->
            <!--<p class="mem-name">川建国</p>-->
            <!--<p class="mem-direct">自由美利坚，枪战每一天</p>-->
          <!--</swiper-slide>-->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
    import {reqGroupMems} from "../../api";
    export default {
        name: "MemberList",
        props:['members'],
        data(){
          return {
            allMembers:{},
            swiperOption: {
              slidesPerView: '4',
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              }
            }
          }
        },
        mounted() {
          this.init();
        },
        methods:{
          async init(){
            const _group = this.$route.query.id;
            const getGroupMems = await reqGroupMems(_group)
            console.log(getGroupMems);
            this.allMembers = getGroupMems.obj.content
          }
        },
        // watch:{ //深度监听，可监听到对象、数组的变化
        //   members(newV,oldV){
        //     console.log(newV);
        //     this.allMembers = newV
        //   },
        //   deep:true
        // }
    }
</script>


<style>
  .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
  .swiper-pagination{
    text-align: right;
    bottom: 0 !important;
  }
</style>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  .member-container
    position relative
    .slides-item
      >img
        width 100%
        height 200px
        border-radius 10px
      .mem-name
        font-size 14px
        font-weight 600
        color: #000
        margin-top 8px
      .mem-direct
        margin-top 5px
        font-size 12px
        color #999
  @media (max-width: 568px)
    .member-container
      .slides-item
        >img
          width 100%
          height 100px
          border-radius 10px
</style>
