<template>
  <div class="honor">
    <div class="honer-header-image">
      <img src="@/assets/images/client/honor-head.jpg" alt="" class="w-100" />
    </div>
    <div class="honor-content">
      <h3 class="title">专利证书</h3>
      <div class="honor-picture">
        <div
          class="pictures-item"
          v-for="(award, index) in certifications"
          :key="index"
        >
          <img
            style="width: 100%"
            src="@/assets/images/client/awards/software-cup.jpg"
            alt="software-cup.jpg"
          />
        </div>
      </div>
      <h3 class="title">赛事奖项</h3>
      <div class="honor-picture">
        <div
          class="pictures-item"
          v-for="(award, index) in competions"
          :key="index"
        >
          <img
            style="width: 100%"
            src="@/assets/images/client/awards/universityComputition-cup.jpg"
            alt="universityComputition-cup.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqAwadsCertification, reqAwadsCompetion } from "@client/api/index";

export default {
  name: "TeamHonor",
  data() {
    return {
      certifications: [],
      competions: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      reqAwadsCertification().then((res) => {
        this.certifications = res.data.certif1ications;
      });

      reqAwadsCompetion().then((res) => {
        this.competions = res.data.competions;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.honor-content {
  min-height: 800px;
}
.honor-content .title {
  font-family: TencentSansw7;
  font-size: 2em;
  margin-top: 50px;
  margin-left: 70px;
  font-weight: 600;
  color: #2385d5;
  @media (max-width: 692px) {
    margin-left: 18px;
  }
}
.honor-content .honor-item {
  margin: 0 150px;
  padding: 25px 100px;
  background-color: #fbfbfb;
}
.honor-content .honor-item .honor-item-lists .item-list {
  font-size: 16px;
  letter-spacing: 2px;
  color: #333;
  line-height: 2em;
}
.honor-content .honor-picture {
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 25px 70px;
  background-color: #fbfbfb;
}
.honor-content .honor-picture .pictures-item {
  width: 216px;
  overflow: hidden;
  line-height: 16px;
  letter-spacing: 2px;
  font-size: 14px;
  color: #333;
  margin: 20px 10px;
}
@media (max-width: 768px) {
  .honor-content {
    min-height: 800px;
  }
  .honor-content .tit {
    font-family: TencentSansw7;
    font-size: 2em;
    margin-top: 50px;
    font-weight: 600;
    text-align: center;
    color: #2385d5;
  }
  .honor-content .honer-header-image {
    height: 300px;
  }
  .honor-content .honor-item {
    margin: 0 0px;
    padding: 10px 10px;
    background-color: #fbfbfb;
  }
  .honor-content .honor-item .honor-item-lists .item-list {
    font-size: 16px;
    letter-spacing: 2px;
    color: #333;
    line-height: 2em;
  }
  .honor-content .honor-picture {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px 10px;
    background-color: #fbfbfb;
  }
  .honor-content .honor-picture .pictures-item {
    /*max-width 150px*/
    width: 150px;
    overflow: hidden;
    line-height: 16px;
    letter-spacing: 2px;
    font-size: 14px;
    color: #333;
    margin: 20px 10px;
  }
}
</style>
