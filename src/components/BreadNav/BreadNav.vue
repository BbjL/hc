<template>
  <nav aria-label="breadcrumb" class="bread-box">
    <ol class="breadcrumb " v-if="isFirst" style=" background: #FBFBFB;color: #333;padding-top: 5px;padding-bottom: 5px"><!--样式不同-->
      <li class="breadcrumb-item"><span style="font-size: 14px"  @click="$router.replace('/home')">主页</span></li>
      <li style="font-size: 14px" class="breadcrumb-item active" aria-current="page">{{this.currentUrl}}</li>
    </ol>
    <ol class="breadcrumb smallone" v-else>
      <li class="breadcrumb-item"><span  @click="$router.replace('/home')">主页</span></li>
      <li class="breadcrumb-item"><span  @click="$router.replace(path2)">{{this.locations2}}</span>
      <li class="breadcrumb-item" v-if="locations3"><span  @click="$router.replace(path3)">{{this.locations3}}</span></li>
    </ol>
  </nav>
</template>

<script>
    export default {
        name: "BreadNav",
        props:['currentUrl','locations1' ,'path1' ,'locations2', 'path2','locations3', 'path3',
          'isFirst'
        ]
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bread-box
    .breadcrumb
      padding-left 230px
      padding-right 230px
      .breadcrumb-item
        color: #2a2e2e
        >span
          cursor: pointer
      .breadcrumb-item + .breadcrumb-item::before
        content: ">";
    @media (max-width: 568px)
      .breadcrumb
        padding-left 20px
        padding-right 20px

    .smallone
      background-color #ffffff
      padding-left 0
      padding-right 0
      .breadcrumb-item
        color: #5e6267
        font-size 14px
        >span
          cursor: pointer
</style>
