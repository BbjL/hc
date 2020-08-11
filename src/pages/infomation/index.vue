<template>
  <div class="team-mes">
    <div class="top-img">
      <img src="@/assets/images/6.png" alt="">
    </div>
    <div class="intro-content">
      <div class="brief">
        <h4 class="tit">团队简介</h4>
        <p> 海创团队于2006年正式成立。</p>
        <p> 这是一个学生自我管理，自主学习的实干型团队。</p>
        <p> 本团队注重学术交流与项目实践，始终贯彻理论指导实践，实践推动理论学习的指导思想。</p>
        <p> 目前本工作组致力于</p>
        <p>嵌入式系统、海洋技术、图像处理与模式识别、机械人自动控制以及软件开发等领域。</p>
      </div>
      <div class="team-cate">
        <TeamMesCate/>
      </div>
      <div class="team-sour">
        <TeamMesSour/>
      </div>
      <div class="team-regu">
        <TeamMesRegu/>
      </div>
      <div class="team-honor">
        <h4 class="tit">荣誉墙</h4>
        <div class="honor-image">
          <img src="@/assets/images/mes/荣誉墙.png" class="w-100" alt="荣誉墙">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TeamMesCate from '../../components/TeamMes-comp/TeamMes-cate/TeamMes-cate'
  import TeamMesRegu from '../../components/TeamMes-comp/TeamMes-regu/TeamMes-regu'
  import TeamMesSour from '../../components/TeamMes-comp/TeamMes-sour/TeamMes-sour'

  export default {
        name: "TeamMes",
        components:{TeamMesCate,TeamMesRegu,TeamMesSour},
        mounted(){
          window.scrollTo(0,0)
        }
    }
</script>


<style lang="stylus" rel="stylesheet/stylus">

  .team-mes
    .tit
      color: #000000
      font-family 'TencentSansw7'
      font-weight 400 !important
      font-size 24px
    .top-img
      height 300px
      overflow hidden
      >img
        width 100%
        height 100%
    .intro-content
      .brief
        text-align center
        padding 80px 400px
        background-color: rgb(251, 251, 251);
        line-height 24px
        >p
          font-size: 14px;
          color: #5F6464;
          letter-spacing: 0;
      .team-cate
        margin-top 20px
        padding 0 150px
        background-color: rgb(251, 251, 251);
      .team-regu
        width 100%
        margin-top 120px
        padding-left 210px
        padding-right 10px
        background-color: rgb(251, 251, 251);
      .team-sour
        width 100%
        margin-top 80px
        padding 0 100px
      .team-honor
        margin 120px 120px
        width auto
        overflow hidden
        text-align center
        .honor-image
          width 100%

  @media (max-width:568px)
    .team-mes
      .intro-content
        .brief
          padding  80px  10px
        .team-cate
          padding 0
        .team-regu
          padding 0 20px
        .team-sour
          padding 0
        .team-honor
          margin-left 10px
          margin-right 10px

</style>
