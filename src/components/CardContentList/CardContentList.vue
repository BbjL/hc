<template>
    <div class=" card-content" >
      <router-link :to="{path:'/groupsintro' , query:{id:item.id}}"  class="row card-item" v-for="(item,index) in all_group.obj" :key="index">
        <div class="col-sm-3 item-img" style="padding:0 0">
          <div class="limit-box">
            <!--<img :src="'http://47.112.132.177:8081/group/showimg/{id}?id='+item.id" alt=""  style="height: 100%;width: 100%;">-->
            <el-image
              style="width: 100%; height: 100%"
              :src="'http://47.112.132.177:8081/group/showimg/{id}?id='+item.id">
            </el-image>
          </div>
        </div>
        <div class="col-sm-9 item-brief">
          <h3>{{item.groupName}}</h3>
          <p class="" >
            {{item.groupIntro.replace(/\<[\s\S]*?\>/gm , '').slice(0,200)}}
          </p>
        </div>
      </router-link>
      <div class="card-list-loading" v-loading="loading"></div>
    </div>
</template>

<script>
    import {reqTeamGroup} from "../../api";
    export default {
        name: "CardContentList",
        props:['itemList'],
        data(){
          return {
            loading:true,
            all_group:''
          }
        },
        mounted() {
          this.init()
        },
        methods:{
          async init(){
            const get_all_group = await reqTeamGroup();
            console.log(get_all_group);
            this.all_group = get_all_group;
            this.loading = false
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .card-list-loading
    position absolute
    left:0
    right 0
    top 200px

  .card-content
    padding 0 250px
    position relative
    .card-item
      padding 20px 0
      color: #2a2e2e
      .item-img
        .limit-box
          width 100%
          height 136px
          overflow hidden
          margin:auto
          >img
            width 100%
      .item-brief
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1)
        >h3
          max-height: 60px;
          font-size: 20px;
          font-weight 500
        >p
          position relative
          margin-top 20px
          max-height: 84px;
          line-height: 28px;
          overflow: hidden;
          color: #5f6464;
        >span
          color: #5f6464;

  @media (max-width:568px)
    .card-content
      padding 0 15px
      .card-item
        padding 20px 0
        color: #2a2e2e
        .item-img
          .limit-box
            width 100%
            height auto
            max-height 300px
            overflow hidden
            margin:auto
            >img
              width 100%
        .item-brief
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1)
          >h3
            max-height: 60px;
            font-size: 20px;
            font-weight 500
          >p
            position relative
            margin-top 20px
            max-height: 84px;
            line-height: 28px;
            overflow: hidden;
            color: #5f6464;
          >span
            color: #5f6464;

</style>
