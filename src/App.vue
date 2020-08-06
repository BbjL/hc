<template>
  <div id="app" >
      <HeaderTop/>
      <router-view></router-view>
      <Footer/>
      <ToTop/>
  </div>
</template>

<script>
  import HeaderTop from './components/HeaderTop/HeaderTop'
  import Footer from './components/Footer/Footer'
  import ToTop from './components/ToTop/ToTop'

  export default {
  name: 'App',
  components:{HeaderTop,Footer,ToTop},
}
</script>



<style lang="stylus" rel="stylesheet/stylus" >
  .footer-bottom
    background-color #ffffff
    margin-bottom: 0;
    color: #232323;
    p
      font-family: 'Lato', sans-serif;
      font-weight: normal;
      color: #666666;
      font-size: 14px;
      line-height: 24px;
      margin-top 5px
      margin-bottom: 5px;

</style>
