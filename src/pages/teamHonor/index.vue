<template>
    <div class="honor ">
      <div class="honer-header-image">
        <img src="@/assets/images/1.jpg" alt="" class="w-100 ">
      </div>
      <div class="honor-content container">
        <h3 class="title">荣誉证书</h3>
        <div class="honor-item">
            <ul class="honor-item-lists" v-if="allAward!=''">
              <li  v-for="(award , index) in allAward" class="item-list" :key="index"><span>— </span>{{award.awardDetail}}</li>
            </ul>
        </div>
        <h3 class="title">专利证书</h3>
        <div class="honor-picture" v-if="allAward!=''">
          <div class="pictures-item" v-for="(award , index) in allAward" :key="index">
            <el-image
              style="width: 213px; height: 150px"
              :src="'http://47.112.132.177:8081/award/showimg/{id}?id=' + award.id"
              :preview-src-list="['http://47.112.132.177:8081/award/showimg/{id}?id=' + award.id]"></el-image>
            <p style="width: 100%">{{award.awardDetail}}</p>
          </div>
        </div>
        <h3 class="title">赛事奖项</h3>
        <div class="honor-picture" v-if="allAward!=''">
          <div class="pictures-item" v-for="(award , index) in allAward" :key="index">
            <el-image
              style="width: 213px; height: 150px"
              :src="'http://47.112.132.177:8081/award/showimg/{id}?id=' + award.id"
              :preview-src-list="['http://47.112.132.177:8081/award/showimg/{id}?id=' + award.id]"></el-image>
            <p style="width: 100%">{{award.awardDetail}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {reqAllAward} from "../../api";
    export default {
        name: "TeamHonor",
        data(){
          return {
            allAward:'',      //所有奖项
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          }
        },
        mounted(){
          window.scrollTo(0,0)
          this.init()
        },
        methods:{
          async init(){
            const getAllAward = await reqAllAward();
            console.log(getAllAward);
            if( getAllAward.status == 200 ) this.allAward = getAllAward.obj.content;
          }
        }
    }
</script>

<style>

</style>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .honor-content
    min-height 800px
    .tit
      font-family TencentSansw7
      font-size 2em
      margin-top 50px
      font-weight 600
      text-align center
      color: #2385D5

    .honor-item
      margin 0 150px
      padding 25px 100px
      background-color #fbfbfb
      .honor-item-lists
        .item-list
          font-size 16px
          letter-spacing 2px
          color: #333333
          line-height 2em
    .honor-picture
      display -webkit-flex
      display flex
      flex-wrap wrap
      justify-content start
      padding 25px 150px
      background-color #fbfbfb
      .pictures-item
        max-width 216px
        overflow hidden
        line-height 16px
        letter-spacing 2px
        font-size 14px
        color #333333
        margin 20px 10px




  @media (max-width: 768px )
    .honor-content
      min-height 800px
      .tit
        font-family TencentSansw7
        font-size 2em
        margin-top 50px
        font-weight 600
        text-align center
        color: #2385D5
      .honer-header-image
        height 300px
      .honor-item
        margin 0 0px
        padding 10px 10px
        background-color #fbfbfb
        .honor-item-lists
          .item-list
            font-size 16px
            letter-spacing 2px
            color: #333333
            line-height 2em
      .honor-picture
        display -webkit-flex
        display flex
        flex-wrap wrap
        justify-content start
        padding 10px 10px
        background-color #fbfbfb
        .pictures-item
          /*max-width 150px*/
          width 150px
          overflow hidden
          line-height 16px
          letter-spacing 2px
          font-size 14px
          color #333333
          margin 20px 10px

</style>
