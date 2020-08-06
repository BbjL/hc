<template>
    <div class="footer container-fluid">
      <h2 class="">海创团队</h2>
      <div class="footerContent row ">
        <div class="col-lg ">
          <div class="row footer-guide">
            <div class="col-lg-4  guide-item ">
              <p class="guide-title">关注我们</p>
              <ul class="more">
                <li @mouseenter="showImage('qq')" @mouseleave="hideImage('qq')">
                  <i class="fa fa-qq"></i><span>QQ</span>
                  <div class="qr_code"  v-if="qq_qrCode">
                    <img src="../../../static/images/8.jpg" alt="" style="height: 150px; ">
                  </div>
                </li><!--icon-->
                <li @mouseenter="showImage('wx')" @mouseleave="hideImage('wx')">
                  <i class="fa fa-weixin"></i><span>公众号</span>
                  <div class="qr_code" v-if="wx_qrCode">
                    <img src="../../../static/images/8.jpg" alt="" style="height: 150px; ">
                  </div>
                </li><!--icon-->
              </ul>
            </div>
            <div class="col-lg-4 guide-item">
              <p class="guide-title">加入我们</p>
              <ul class="more">
                <li><i class="fa fa-share-alt"></i><router-link to="/cardpage" >方向介绍</router-link></li><!--icon-->
                <li class="disable"><i class="fa fa-file"></i><span @click="showTip" >考核题目</span></li><!--icon-->
              </ul>
            </div>
            <div class="col-lg-4 guide-item">
              <p class="guide-title">管理员入口</p>
              <ul class="more">
                <li class="disable"><i class="fa fa-user"></i><span  @click="showTip">教师登陆</span></li><!--icon-->
                <li class="disable"><i class="fa fa-user"></i><span @click="showTip">学生登录</span></li><!--icon-->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg">
          <form class="contactUs">
            <p>联系我们</p>
            <div class=" row">
              <div class="col-lg">
                <input v-model="emailName " type="text"  class="form-control"  placeholder="你的姓名" value="">
              </div>
              <div class="col-lg">
                <input v-model="emailAccount " type="text" class="form-control"  placeholder="你的邮箱" value="">
              </div>
            </div>
            <div class="row">
              <div class="form-group col-sm">
                <textarea v-model="emailDetail " class="form-control"  rows="2" placeholder="编辑消息"></textarea>
              </div>
            </div>
            <button class=" submit" :class="{'email-enable':!isAbled}" type="submit" @click.prevent="sendMessage">快速联系{{isAbled?'':count}}</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  import {uploadMessage} from "../../api";
  import swal from 'sweetalert'
  export default {
        name: "Footer",
        data(){
          return{
            qq_qrCode:false,
            wx_qrCode:false,
            imageUrl:'',
            count:15,       //限制发送时间
            isAbled:true ,    //是否可用
            emailDetail:'',     //发送内容
            emailName:'',       //发送人
            emailAccount:''     //发送人邮箱
          }
        },
        methods:{

          showImage(type){
            if (type =='wx'){
              this.wx_qrCode = true
            }else{
              this.qq_qrCode = true
            }
          },
          hideImage(type){
            if (type =='wx'){
              this.wx_qrCode = false
            }else{
              this.qq_qrCode = false
            }
          },

          //警告框
          showTip(){
            swal("暂时没有内容！!", {
              button: false,
              timer: 1500,
            });
          },

          //发送留言
          async sendMessage(){
            const _name = this.emailName;
            const _email =  this.emailAccount
            const _detail = this.emailDetail
            const _isAbled =  this.isAbled
            if(_isAbled&&_detail!=''&&_email!=''&&_name!=''){
              const result = await uploadMessage(_name,_email,_detail);
              if(result.status == 200){
                this.isAbled = false
                this.emailName ='';
                this.emailDetail = ''
                this.emailAccount = ''
                swal({
                  icon: "success",
                  timer: 1500,
                });
                const timer = setInterval(()=>{ //设置按钮禁止时间
                  this.count--
                  if(this.count === 0 ){
                    this.isAbled = true
                    this.count = 30;
                    clearInterval(timer)
                  }
                },1000)
              }else{
                swal({
                  icon: "error",
                  timer: 1500,
                });
              }
            }
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .disable
    color #7a7a7a !important

  .email-enable
    background-color #c18a2a !important
    color #cbcbcb !important
  /*
  *  底部标题及邮箱
  */
  .footer
    width 100%
    background-color: rgb(30, 39, 46);
    /*background-color rgba(0, 0, 0, 0.85)*/
    color: #ffffff
    font-size 1em
    padding 30px 100px 40px
    >h2
      font-family TencentSansw7
      text-align center
      font-size 18px
      padding-bottom 20px
      border-bottom  1px solid #787878
    .contactUs
      >p
        font-size 16px
        margin-bottom 20px
      input,textarea
        background-color transparent
        border-color: #787878;
        border-style: solid;
        border-width: 0 0 1px;
        color: #fff;
        font-size: 12px;
        line-height: 29px;
        margin-bottom: 11px;
        margin-right: 30px;
        padding: 0 0 7px;
        box-shadow none
        &::-webkit-input-placeholder
          color: #bfbfbf;
          font-size 12px
          background-color transparent
   /*
    *  底部导航链接
   */
  .guide-item
    .guide-title
      font-size 16px
      padding-bottom 22px
    .more
      font-size 14px
      color: #c8c8c8
      >li
        font-size 12px
        position: relative
        margin-bottom 20px
        cursor: pointer
        &:hover
          color: #f8b239
        >a
          color: #c8c8c8
          transition 0s
          &:hover
            color: #f8b239
        >i
          padding-right 8px
        .qr_code
          position absolute
          left 0
          top 50%
          transform translate(35%,-50%)
          border 5px solid #dadada
          z-index 2
          &::before
            content ''
            display block
            position absolute
            width 10px
            height 10px
            left -25px
            top 50%
            transform translate(0,-50%)
            border-width 10px
            border-style solid
            border-color  transparent #dadada transparent transparent

  @media (max-width: 576px)
    .footer
      padding 20px 10px 10px
      >h2
        font-size 25px
</style>
