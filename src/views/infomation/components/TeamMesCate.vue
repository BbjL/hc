<template>
  <div class=" clearfix framework-wrap" >
    <div class="mod-con clearfix fengjunjie">
      <div class="t-flx clearfix">
        <div class="label-box">
          <h3 class="tit">组别信息</h3>
        </div>
      </div>
      <div class="framework-box clearfix">
        <div class="compy"><h4 style="color:#0052D9;font-family: TencentSansw7;font-size:30px">HC海创</h4></div>
        <div class="list-ul clearfix">
          <div class="li first-li">
            <p class="label">DL</p>
            <p class="val">深度学习</p>
          </div>
          <div class="li">
            <p class="label">AN</p>
            <p class="val">自主导航</p>
          </div>
          <div class="li">
            <p class="label">ROV</p>
            <p class="val">水下机器人</p>
          </div>
          <div class="li">
            <p class="label">MA</p>
            <p class="val">工业机械臂</p>
          </div>
          <div class="li ">
            <p class="label">SD</p>
            <p class="val">软件开发</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TeamMes-cate"
    }
</script>

<style>
  .framework-wrap{
    background: #FBFBFB;
    margin-top: 20px;
    padding: 80px 0;
    width: auto;
    margin-left: 20px;
    margin-right: 20px;
  }
  .framework-box{
    width: 100%;
    margin-top: 38px;
    text-align: center;
  }
  .framework-box .compy{
    text-align: center;
    margin-top: 12px;
    position: relative;
    margin-bottom: 64px;
  }
  .framework-box .compy:after{
    content: ' ';
    height: 26px;
    width: 2px;
    background: #D8D9DC;
    position: absolute;
    bottom: -38px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
  }
  .framework-box .compy img{
    width: 183px;
  }
  .framework-box .list-ul{
    width: 100%;
    position: relative;
  }
  .framework-box .list-ul:before{
    content: ' ';
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    width: 80.5%;
    top: -26px;
    height: 2px;
    background: #D8D9DC;
    display: block;
  }
  .framework-box .list-ul .first{
    margin-left: 0;
  }
  .framework-box .list-ul .li{
    width: 19.6%;
    background: #F2F3F5;
    padding: 32px  10px;
    box-sizing: border-box;
    text-align: center;
    float: left;
    margin-left: 0.5%;
    position: relative;
    cursor: pointer;
    -webkit-transition: background-color 0.2s linear;
    -moz-transition: background-color 0.2s linear;
    -o-transition: background-color 0.2s linear;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 1s linear;
  }
  .framework-box .list-ul .li:first-child{
    margin-left: 0;
  }
  .framework-box .list-ul .li:before{
    content: ' ';
    height: 26px;
    width: 2px;
    background: #D8D9DC;
    position: absolute;
    top: -26px;
  }
  .framework-box .list-ul .li .label{
    font-size: 30px;
    color: #0052D9;
    letter-spacing: 0;
    font-family: 'TencentSansw7';
  }
  .framework-box .list-ul .li .val{
    font-size: 14px;
    color: #5F6464;
    letter-spacing: 0;
    line-height: 36px;
  }
  .en-us .framework-box .list-ul .li .val span{
    display: block;
  }
  .framework-box .list-ul .active-li{
    background: #fff;
  }
  .framework-box .list-ul .active-li .san{
    display: block;
  }

  .framework-box .li-mess-box{
    width: 100%;
    margin-top: 48px;
    background: #fff;
    position: relative;
  }
  .framework-box .li-mess-box .mess-text{
    padding: 32px 42px;
    display: none;
    font-size: 14px;
    color: #5F6464;
    letter-spacing: 0;
    line-height: 25px;
    text-align: left;
    opacity: 0;
    transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    -webkit-transition: opacity 0.2s linear;
    -ms-transition: opacity 1s linear;
  }
  .framework-box .li-mess-box .active-mess{
    opacity: 1;
    display: block;
  }
  .framework-box .san{
    width: 48px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    bottom: -49px;
    display: none;
  }
</style>
