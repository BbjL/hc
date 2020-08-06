<template>
    <div class="more-intro">
      <div class="fillTop"></div>
      <div class="small-bread">
        <BreadNav locations2="组别介绍" path2="/cardpage" locations3="详细介绍"/>
      </div>
      <div class=" intro" >
        <div class="intro-content" v-loading="loading">
          <h3 class="moto">{{target_group.groupName}}</h3>
          <div class="intro-detail" style="min-height: 600px;" >
            <p v-html="target_group.groupIntro" style="line-height: 24px"></p>
          </div>
          <div class="intro-member">
            <p class="intro-smalltit">成员介绍</p>
            <div>
              <MemberList :members="target_group.memList"/>
            </div>
          </div>
          <div class="intro-honor">
            <p class="intro-smalltit">获奖信息  <router-link to="/teamhonor" class="more-honor" >查看更多</router-link></p>
            <NewList/>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import BreadNav from '../../components/BreadNav/BreadNav'
  import NewList from '../../components/NewList/NewList'
  import MemberList from '../../components/MemberList/MemberList'
  import {reqTeamGroup} from "../../api";
  export default {
    name: "MoreIntro",
    components:{BreadNav,NewList,MemberList},
    data(){
      return {
        loading:false,
        target_group:''
      }
    },
    mounted(){
      window.scrollTo(0,0)
      this.init()
    },
    methods:{
      async init(){
        this.loading = true
        const get_groups = await reqTeamGroup();
        this.loading = false
        const target_group = get_groups.obj.find(item=> item.id == this.$route.query.id);
        this.target_group = target_group
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fillTop
    height 70px
  .small-bread
    margin 10px 320px 10px
  .intro
    position relative
    margin 10px 320px 10px
    .intro-smalltit
      line-height: 2em;
      margin: .5em 0;
      color: #5e6267;
      font-size: 1em;
      font-weight 600
      .more-honor
        font-size 14px
        float right
        color #0052d9
    .intro-name
      position absolute
      left -120px
      color: #000;
      font-weight: 400;
      font-size: 1.4em;
    .intro-content
      .moto
        color: #000;
        font-weight: 400;
        font-size: 1.4em;
  .more-intro
    position relative
    .silder-wrapper
      position fixed
      left 100px
      top 300px

  @media (max-width: 568px)
    .fillTop
      height 0
    .small-bread
      margin 10px 10px 10px
    .intro
      margin 10px 10px 10px
      .intro-name
        position relative
        left 0
        top -12px
        color: #000;
        margin-bottom 8px
      .intro-detail
        font-size 12px


</style>
