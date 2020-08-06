<template>
  <div style="min-height: 800px;">
    <HeadImg imgUrl="" title="多组别" content="多样化发展"/>
    <BreadNav currentUrl="组别介绍" :isFirst='true'/>
    <CardContentList itemList="" />
  </div>
</template>

<script>
  import HeadImg from '../../components/HeadImg/HeadImg'
  import BreadNav from '../../components/BreadNav/BreadNav'
  import CardContentList from '../../components/CardContentList/CardContentList'
  export default {
    name: "Category",
    components:{HeadImg,BreadNav,CardContentList},
    mounted(){
      window.scrollTo(0,0);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
