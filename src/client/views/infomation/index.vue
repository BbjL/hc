<template>
  <div class="team-mes">
    <div class="top-img">
      <img src="@/assets/images/client/messpage-head.png" alt="" />
    </div>
    <div class="intro-content">
      <div class="brief">
        <h4 class="tit">团队简介</h4>
        <p>海创团队于2006年正式成立。</p>
        <p>这是一个学生自我管理，自主学习的实干型团队。</p>
        <p>
          本团队注重学术交流与项目实践，始终贯彻理论指导实践，实践推动理论学习的指导思想。
        </p>
        <p>目前本工作组致力于</p>
        <p>
          嵌入式系统、海洋技术、图像处理与模式识别、机械人自动控制以及软件开发等领域。
        </p>
      </div>
      <div class="team-cate">
        <TeamMesCate />
      </div>
      <div class="team-sour">
        <TeamMesSour />
      </div>
      <div class="team-regu">
        <TeamMesRegu />
      </div>
      <div class="team-honor">
        <h4 class="tit">荣誉墙</h4>
        <div class="honor-image">
          <img
            src="@/assets/images/client/honorwall.png"
            class="w-100"
            alt="荣誉墙"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMesCate from "./components/TeamMesCate";
import TeamMesRegu from "./components/TeamMesRegu";
import TeamMesSour from "./components/TeamMesSour";

export default {
  name: "TeamMes",
  components: { TeamMesCate, TeamMesRegu, TeamMesSour },
};
</script>


<style lang="scss" scoped >
.team-mes .tit {
  color: #000;
  font-family: "TencentSansw7";
  font-weight: 400 !important;
  font-size: 24px;
}
.team-mes .top-img {
  height: 300px;
  overflow: hidden;
}
.team-mes .top-img > img {
  width: 100%;
  height: 100%;
}
.team-mes .intro-content .brief {
  text-align: center;
  padding: 80px 400px;
  background-color: #fbfbfb;
  line-height: 24px;
}
.team-mes .intro-content .brief > p {
  font-size: 14px;
  color: #5f6464;
  letter-spacing: 0;
}
.team-mes .intro-content .team-cate {
  margin-top: 20px;
  padding: 0 150px;
  background-color: #fbfbfb;
}
.team-mes .intro-content .team-regu {
  width: 100%;
  margin-top: 120px;
  padding-left: 210px;
  padding-right: 10px;
  background-color: #fbfbfb;
}
.team-mes .intro-content .team-sour {
  width: 100%;
  margin-top: 80px;
  padding: 0 100px;
}
.team-mes .intro-content .team-honor {
  margin: 120px 120px;
  width: auto;
  overflow: hidden;
  text-align: center;
}
.team-mes .intro-content .team-honor .honor-image {
  width: 100%;
}
@media (max-width: 568px) {
  .team-mes .intro-content .brief {
    padding: 80px 10px;
  }
  .team-mes .intro-content .team-cate {
    padding: 0;
  }
  .team-mes .intro-content .team-regu {
    padding: 0 20px;
  }
  .team-mes .intro-content .team-sour {
    padding: 0;
  }
  .team-mes .intro-content .team-honor {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
