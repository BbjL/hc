<template>
    <div>
      <Carouse/>
      <div class="watchword w-75 mx-auto text-center animated slideInUp" >
        <h3 class="title" style="margin-left:0">海创团队</h3>
        <p class="content ">海创团队经过多年的发展<br/>形成了如今拥有一定技术积累、且制度严格的创新团队</p>
        <p class="content">目前实验室研究的方向有:</p>
        <p class="content">嵌入式系统、智能机器人、模式识别、深度学习、图像处理、网页设计等领域。</p>
      </div>
      <Cards/>
      <ProjectLink/>
    </div>
</template>

<script>
import Carouse from '../../components/Carouse/Carouse'
import Cards from '../../components/Cards/Cards'
import ProjectLink from '../../components/ProjectLink/ProjectLink'

require('@/mock/projects')

export default {
    name: "Home",
    components:{Carouse,Cards,ProjectLink},
    mounted(){


    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    margin-bottom 50px
    font-size 30px;
    margin-left 120px
    color: black
    font-family TencentSansw7
  .watchword
    padding 80px 0
    .content
      color: #767676
      font-size:18px
      font-family TencentSansw3
      line-height 30px
    .learnMore
      margin 20px 0
      >a
        color: #3B5BCC
        font-size 16px
        .fa
          padding-left 8px


</style>
