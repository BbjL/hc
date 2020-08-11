<template>
  <div class="thirdCard-content container">
    <div class="row lists" >
      <Item :lists="[]"/>
    </div>
  </div>
</template>

<script>
import Item from './Item/Item'

export default {
  name: "Card",
  components:{Item}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .thirdCard-content
    display: block;
    width: 1240px;
    margin: 0px auto;
    margin-bottom: 84px;
    .lists
      overflow hidden



@media (max-width: 768px)
  .thirdCard-content
    padding 20px 10px
    width: 100%;
    margin 0 auto
    margin-bottom 50px
    .lists
      .card-list
        padding 15px

</style>
