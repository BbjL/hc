<template>
  <div class="elegantDetail_detail" v-if="element" style="background-color: white;">
    <div class="blankele"></div>
    <div class="elegantDetail_detail1" style="min-height: 800px">
      <Bread locations2="团队风采" path2="/elegant" locations3="详细介绍"/>
      <div class="elegantDetail_title">
        <p>{{element.articleName}}</p>
      </div>
      <div class="elegantDetail_main">
        <div class="elegantDetail_brief">
          <!--<div class="demo-image__preview" v-if="srcList.length>0">-->
            <!--<el-image-->
              <!--class="img"-->
              <!--:src="'http://47.112.132.177:8081/elegant/showimg/{id}?id=' + id"-->
              <!--:preview-src-list="srcList"-->
            <!--&gt;-->
              <!--<div slot="placeholder" class="image-slot pc" style="margin-top: 150px" v-loading="true"/>-->
              <!--<div slot="placeholder" class="image-slot phone" style="margin-top: 100px" v-loading="true"/>-->
            <!--</el-image>-->
          <!--</div>-->
          <div class="mianText" id="articleContent"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {reqElegantDetails} from '../../api/index'
  import store from 'store'
  import Bread from '@/components/BreadNav/BreadNav'
  export default {
    components:{Bread},
    data() {
      return {
        id:0,
        element:{},
        contents:'',
        srcList: []
      }
    },
    async mounted () {
      window.scrollTo(0,0)

      this.id = store.get('haiChuangElegantNo')
      var result = await reqElegantDetails(this.id)
      this.element = result.obj
      this.srcList.push('http://47.112.132.177:8081/elegant/showimg/{id}?id=' + this.id)
      $('#articleContent').html(this.element.articleContent)
    }
  }
</script>

<style>
  body{
    overflow-y: auto!important;
  }
  .el-carousel__item p {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  @media screen and (min-width: 500px) {
    .phone{
      display: none;
    }
    .img-box{
      width: 40%;
      min-width:250px;
      height:350px;
      float: right;
      margin: 0 10px 10px;
      border: 1px solid rgb(242,242,242);
      overflow: hidden;
    }
    .elegantDetail_detail{
      background-color: white;
    }
    .elegantDetail_bread{
      width: 100vw;
      background-color: rgb(242,243,245);
      height: 50px;
    }
    .elegantDetail_bread .elegantDetail_bread1{
      margin-left: 20vw;
    }
    .elegantDetail_bread .elegantDetail_font{
      font-size: 20px;
      line-height: 50px;
      height: 50px;
    }
    .elegantDetail_detail1{
      width: 60vw;
      margin: 80px auto 0;
    }
    .elegantDetail_title p{
      font-size: 36px;
      color: black;
      margin-bottom: 20px;
    }
    .elegantDetail_detail1 .elegantDetail_main{
      width: 100%;
      border-top: 2px solid rgb(242,243,245);
    }
    .elegantDetail_main .elegantDetail_brief{
      margin-top: 40px;
    }
    .elegantDetail_main .elegantDetail_text{
      margin-top: 30px;
    }
    .elegantDetail_main .elegantDetail_foot{
      margin-top: 30px;
    }
    #articleContent{
      text-indent: 2em;
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media screen and (min-width: 320px)and (max-width: 499px){
    .pc{
      display: none;
    }
    #articleContent{
      font-size: 16px;
    }
    .elegantDetail_title p{
      font-size: 22px;
      color: black;
      margin-bottom: 15px;
    }
    .img-box{
      width: 180px;
      height:200px;
      float: right;
      margin-left: 10px;
      border: 1px solid rgb(242,242,242)
    }
    .elegantDetail_detail{
      background-color: white;
    }
    .elegantDetail_bread{
      width: 100vw;
      background-color: rgb(242,243,245);
      height: 40px;
    }
    .elegantDetail_bread .elegantDetail_bread1{
      margin-left: 5vw;
    }
    .elegantDetail_bread .elegantDetail_font{
      font-size: 18px;
      line-height: 40px;
      height: 40px;
    }
    .elegantDetail_detail1{
      width: 90vw;
      margin: 20px auto 0;
    }
    .elegantDetail_title p{
      font-size: 22px;
      color: black;
    }
    .elegantDetail_detail1 .elegantDetail_main{
      width: 100%;
      border-top: 2px solid rgb(242,243,245);
    }
    .elegantDetail_main .elegantDetail_brief{
      margin-top: 20px;
    }
    .elegantDetail_main p{
      text-indent: 2em;
      font-size: 14px;
      line-height: 24px;
    }
    .elegantDetail_main .elegantDetail_text{
      margin-top: 30px;
    }
    .elegantDetail_main .elegantDetail_foot{
      margin-top: 30px;
    }
  }
</style>
