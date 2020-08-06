<template>
    <ul class="new-list">
      <li class=" new-item" v-if="awardList != []"  v-for="(award, index) in awardList" :key="index">
        <p class="ellipsis item-link" href="#">{{award.awardDetail}}</p>
        <span class="sub-time">{{award.awardDate}}</span>
      </li>
    </ul>
</template>

<script>
    import {reqGroupAward} from '../../api/index'
    export default {
        name: "newList",
        data(){
          return{
            awardList:''
          }
        },
        mounted() {
          this.init();
        },
        methods:{
          async init(){
            const _group = this.$route.query.id;
            const getGroupAward = await reqGroupAward(_group);   //默认第一页  一页7条
            this.awardList = getGroupAward.obj.content;
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .new-list
    .new-item
      .item-link
        display inline-block
        width 600px
        color: #5e6267
        line-height: 24px;
        font-size: 14px;
        text-decoration: none;
      .sub-time
        float: right;
        color: #999;
        font-size 14px

  @media (max-width: 568px)
    .new-list
      margin-bottom 40px
      .new-item
        .item-link
          width 100%

</style>
