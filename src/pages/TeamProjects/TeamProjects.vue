<template>
    <div class="project">
      <div class="blankele"></div>
      <div class="project-content" >
        <div class="small-bread">
          <BreadNav locations2="团队项目" path2="" />
        </div>
        <div v-loading="loading" style="min-height:300px;">
          <p style="margin-bottom:20px;color: #333333; font-size: 2em">{{project.proName}}</p>
          <p style="line-height: 24px;" v-html="project.proDetail"  ></p>
        </div>
      </div>
    </div>
</template>

<script>
  import {reqTeamProjects,reqProjectById} from "../../api";
  import BreadNav from '../../components/BreadNav/BreadNav'
  export default {
        name: "TeamProjects",
        components:{BreadNav},
        data(){
          return {
            project:{},
            loading:false
          }
        },
        mounted(){
          window.scrollTo(0,0)
          this.init();
        },
        methods:{
          async init(){
            this.loading = true
            const _id = this.$route.query.id;
            const result = await reqProjectById(_id);
            this.loading = false
            if(result.status == 200 ){
              console.log(result);
              this.project = result.obj
            }
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .project-content
    margin 100px 250px 0
    min-height 800px

  @media (max-width: 768px)
    .project-content
      margin 0px 10px 0
      min-height 800px
</style>
