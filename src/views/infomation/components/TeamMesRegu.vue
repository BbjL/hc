<template>
  <div class="regulation row">
    <div class="col-md-8 order-md-last right">
      <img class="w-100" src="@/assets/images/mes/1.jpg" alt="" />
    </div>
    <div class="col-md-4 order-md-first left">
      <h4 class="tit">团队管理</h4>
      <div class="regu-content">
        <h5 class="second-tit">规章制度</h5>
        <ul class="regu-detail">
          <li v-for="(item, index) in regulations" :key='index'>
            {{ item.content }}
          </li>
        </ul>
      </div>
      <div class="regu-ideal">
        <h5 class="second-tit">管理理念</h5>
        <p>共同进步</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqRegulations } from "@/api/index";

export default {
  name: "TeamMesRegu",
  data() {
    return {
      regulations: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      //获取团队制度
      const result = await reqRegulations();
      this.regulations = result.data.regulations
    },
  },
};
</script>

<style lang="scss"  >
.regulation {
  width: 100%;
}

.regulation .second-tit {
  margin-top: 80px;
  color: #0052d9;
  font-family: TencentSansw7;
}

.regulation .regu-content .regu-detail >li {
  font-size: 14px;
  color: #5f6464;
  letter-spacing: 0;
  line-height: 25px;
  list-style: circle;
}

.regulation .regu-ideal {
  font-size: 14px;
  color: #5f6464;
  letter-spacing: 0;
  line-height: 25px;
}

@media (max-width: 568px) {
  .regulation .second-tit {
    margin-top: 40px;
  }
}
</style>
