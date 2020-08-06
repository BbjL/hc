<template>
  <transition name="fade">
    <div class="toTop"  v-show="showTop" @click="goTop">
      <i class="fa fa-chevron-up"></i>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "ToTop",
        data(){
          return  {
            showTop:false,
          }
        },
        mounted(){
          //绑定滚动条事件
          window.addEventListener('scroll' ,this.scrollTop);
        },
        methods:{
          scrollTop(){
            const top = window.scrollY;
            top===0? this.showTop=false:this.showTop=true;
          },
          goTop(){
            let scrollTop;
            let speed;
            const timer = setInterval(()=>{
              scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
              speed = Math.floor(-scrollTop/2.5);
              if(scrollTop <= 0){
                clearInterval(timer);
              }
              window.scrollTo(0,scrollTop + speed);
            },30);
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toTop
    text-align: center;
    bottom: 35px;
    cursor: pointer;
    position: fixed;
    right: 12px;
    z-index: 9999;
    display block;
    transition  .7s
    i
      background-color: #7f7f7f;
      height: 40px;
      width: 40px;
      color: #fff;
      line-height: 40px;
      -webkit-transition: all .3s ease 0s;
      transition: all .3s ease 0s;
      &:hover
        background-color: #fbd232;
        color: #fff;

  .fade-enter-active,.fade-leave-active
    transition: all .5s ease-in-out;
  .fade-enter
    opacity: 0;
  .fade-leave
    opacity 1;
  .fade-leave-to
    opacity 0
</style>
