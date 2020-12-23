<template>
  <div>
    <Carouse />

    <!--简短介绍-->
    <transition name="fade" mode="out-in" appear>
      <div class="watchword w-75 mx-auto text-center">
        <h3 class="title" style="margin-left: 0">海创团队</h3>
        <p class="content">
          海创团队经过多年的发展<br />形成了如今拥有一定技术积累、且制度严格的创新团队
        </p>
        <p class="content">目前实验室研究的方向有:</p>
        <p class="content">
          嵌入式系统、智能机器人、模式识别、深度学习、图像处理、网页设计等领域。
        </p>
      </div>
    </transition>

    <!--三列卡片-->
    <transition name="fade" mode="out-in" appear>
      <CardsList />
    </transition>

    <!--项目连接-->
    <transition name="fade" mode="out-in" appear>
      <Project />
    </transition>

    <!--联系方式-->
    <transition name="fade" mode="out-in" appear>
      <Contact />
    </transition>
  </div>
</template>

<script>
import Carouse from "./components/Carouse/index";
import CardsList from "./components/CardsList/index";
import Project from "./components/Project/index";
import Contact from "./components/Contact/index";

export default {
  name: "Home",
  components: { Carouse, CardsList, Project, Contact },
};
</script>

<style lang="scss"  scoped>
.watchword {
  padding: 80px 0;
  .content {
    color: #767676;
    font-size: 18px;
    font-family: TencentSansw3;
    line-height: 30px;
  }
  .learnMore {
    margin: 20px 0;
    & > a {
      color: #3b5bcc;
      font-size: 16px;
      .fa {
        padding-left: 8px;
      }
    }
  }
}
</style>
