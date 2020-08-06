<template>
    <div class="surrounding" >
      <div class="blankele"></div>
      <div style="" class="surrounding-content" >
        <div class="small-bread">
          <BreadNav locations2="团队氛围" path2="" />
        </div>
        <p v-loading="loading"  v-html="content" style="margin-bottom: 50px;min-height: 300px;line-height: 24px" ></p>
      </div>
    </div>
</template>

<script>
    import BreadNav from '../../components/BreadNav/BreadNav'
    import {reqSurrounding} from "../../api";
    export default {
      components:{BreadNav},
        name: "Surroounding",
        data(){
          return {
            loading:false,
            content:""
          }
        },
        mounted() {
          window.scrollTo(0,0)
          this.init()
        },
        methods:{
          async init(){
            this.loading = true;
            const content = await reqSurrounding();
            if(content.status == 200 ){
              this.content = content.obj.atmDetail
            }
            this.loading = false
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .surrounding-content
    min-height 800px
    margin  80px 250px 0


  @media (max-width: 768px)
    .surrounding-content
      min-height 800px
      margin  0px 10px 0
</style>
