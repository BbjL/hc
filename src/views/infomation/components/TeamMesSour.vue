<template>
  <div class="resource">
    <h4 class="tit">实验室资源</h4>
    <swiper :options='swiperOption'>
      <swiper-slide v-for="(slide, index) in resouce" :key="index">
        <div class="pict-box w-100">
          <div class="image">
            <img
              src='@/assets/images/projects/case_study_img1.png'
              class="w-100 h-100"
              alt="xxxx"
            />
          </div>
          <div class="illu">
            <h5 class="source-tit">{{ slide.name }}</h5>
            <p class="source-content">{{ slide.content }}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { reqResource } from "@/api/index";

export default {
  name: "TeamMesSour",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      resouce: [],
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      //获取实验室资源
      const result = await reqResource();
      this.resouce = result.data.resource;
      console.log(this.resouce);
    },
  },
};
</script>

<style>
.append-buttons {
  text-align: center;
  margin-top: 20px;
}
.append-buttons a {
  display: inline-block;
  margin: 0 10px;
}
</style>

<style lang="scss" >
.resource {
  padding: 0 200px;
}

.resource .tit {
  text-align: center;
}

.pict-box {
  height: 470px;
  overflow: hidden;
  font-size: 0;
}

.pict-box .image {
  height: 100%;
  width: 50%;
  display: inline-block;
  vertical-align: middle;
}

.pict-box .illu {
  height: 100%;
  width: 50%;
  vertical-align: middle;
  display: inline-block;
  background: #f2f3f5;
  padding: 50px 10px;
}

.pict-box .illu .source-tit {
  font-family: TencentSansw7;
  font-size: 20px;
}

.pict-box .illu .source-content {
  text-indent: 2em;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #5f6464;
}

@media (max-width: 568px) {
  .resource {
    padding: 0 10px;
  }

  .resource .resource-carousel .pict-box {
    height: 210px;
  }

  .resource .resource-carousel .pict-box .illu {
    padding: 0 10px 0;
    font-size: 12px;
  }
}
</style>



