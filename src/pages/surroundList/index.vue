<template>
  <div class="container">

    <header >
      <!--面包屑-->
      <Bread :list="breadList"/>
      <!--搜索栏-->
      <div class="search">
        <input type="text"  placeholder="Search">
        <span class="search-query"><i class="fa fa-search"></i></span>
      </div>
      <!--标题-->
      <h1 class="title">氛围列表</h1>
    </header>

    <!--风采列表-->
    <ElegantItem :list="[]"/>
  </div>
  <!--http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/photo-1416339276121-ba1dfa199912-400x400.jpg-->
</template>

<script>
import Bread from '@/components/Bread/index'
import { filterBraed } from '@/filters/index'
import ElegantItem from './conmponents/elegantItem/index'

export default {
  name: "index",
  components:{Bread, ElegantItem},
  data(){
    return {
      breadList:filterBraed(this.$route)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    position relative
    float right
    input[type='text']
      font-size 14px
      border 1px solid rgba(196,196,196,.4)
      padding: 8px 5px 8px 35px;
      &:focus
        border-color: rgba(140,140,140,.8);
        box-shadow  0 0 8px rgba(200,200,200,.6)
        outline none
    .search-query
      padding: 8px 5px 5px 5px;
      position absolute
      cursor pointer
      left 5px
      color: #7e8c8d
</style>
