<template>
  <div style="min-height: 800px;">
    <HeadImg imgUrl="" title="多组别" content="多样化发展"/>

    <Bread :list="breadList"/>

    <div class="title-class">
      <div class="container">
        <div class="page-header">
          <h1 class="title">组别列表</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <CardItem :groupsList="[]"/>
    </div>
  </div>
</template>

<script>
import HeadImg from '../../components/HeadImg/HeadImg'
import Bread from '../../components/Bread/index'
import CardItem from './components/CardItem'
import { filterBraed } from '@/filters/index'

export default {
  name: "Category",
  components:{HeadImg, Bread, CardItem},
  data(){
    return {
      breadList:filterBraed(this.$route)
    }
  },
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .group-item
    padding 0 10px
    position relative
    margin-bottom 20px
    .lightboxhover
      opacity: 1;
      -webkit-transition: opacity .2s ease-in-out;
      -moz-transition: opacity .2s ease-in-out;
      -ms-transition: opacity .2s ease-in-out;
      -o-transition: opacity .2s ease-in-out;
      transition: opacity .2s ease-in-out;
      &:hover
        opacity: .7;
    .portfoliolink
      position: absolute;
      background: #fff;
      background: rgba(255,255,255,.6);
      width: 100%;
      bottom: 0;
      z-index: 1000;
      transition opacity .5s ease-in
      .piteminfo
        padding: 8px;
        text-align: center;


</style>
