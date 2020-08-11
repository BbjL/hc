<template>
  <nav  aria-label="breadcrumb" class="bread-box container">
      <ol class="breadcrumb " style=" background: #FBFBFB;color: #333;"><!--样式不同-->
        <li class="breadcrumb-item" v-for="(item,index) in list" :key="index">
          <span style="font-size: 14px"  @click="$route.path !== item.path? $router.push({path:item.path}):''">{{item.meta.title}}</span>
        </li>
      </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadNav",
  props:{
    list:{
      type:Array
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bread-box
    .breadcrumb
      padding 15px 0
      .breadcrumb-item
        color: #2a2e2e
        >span
          cursor: pointer
      .breadcrumb-item + .breadcrumb-item::before
        content: ">";
</style>
