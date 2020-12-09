<template>
  <main class="container info-wrapper">
    <!--路由导航-->
    <Bread :list="breadList" />
    <!--主要内容-->
    <article>
      <!--标题  简介-->
      <header class="article-header">
        <h1 class="title">{{ info.title }}</h1>
        <div class="basic-info">
          <span><i class="fa fa-user-circle"></i>队长：{{ info.leader }}</span>
          <span><i class="fa fa-calendar"></i>获奖时间：{{ info.date }}</span>
        </div>
        <div class="article-date"></div>
      </header>
      <!--主要内容介绍-->
      <main class="article-content">
        <!--大图-->
        <div class="article-img">
          <img
            width="100%"
            src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-848x400.jpg"
            :alt="info.title"
          />
        </div>
        <!--简介-->
        <p>{{ info.content }}</p>
        <!--组内近况-->
        <div class="group-elegant">
          <h3 class="second-title">最近上传</h3>
          <div class="row">
            <div
              class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12"
              v-for="(item, index) in recent"
              :key="index"
            >
              <RecentItem :recentItem='item' nextRoute="/elegant/list/info" />
            </div>
          </div>
        </div>
      </main>
    </article>
  </main>
</template>

<script>
import Bread from "@/components/Bread/index";
import RecentItem from '@/components/RecentItem'
import { filterBraed } from "@/utils/filters";
import { reqElegantInfo } from "@/api/index";

export default {
  name: "index",
  components: { Bread, RecentItem },
  data() {
    return {
      info: {},
      recent: [],
      breadList: filterBraed(this.$route),
    };
  },
  beforeMount() {
    console.log(this.$route);
    this.initData();
  },
  methods: {
    initData() {
      const { id } = this.$route.query;
      reqElegantInfo(id).then((res) => {
        this.info = res.data.info;
        this.recent = res.data.recent;
      });
    },
  },
  watch: {
    $route: function () {
      this.initData();
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.info-wrapper {
  color: #444;
}
.article-header {
  font-size: 14px;
}
.article-header .basic-info {
  font-size: 14px;
  margin: 10px 0;
}
.article-header .basic-info span:not(:last-of-type)::after {
  content: "|";
  padding: 0 10px 0 5px;
  font-size: 12px;
}
.article-footer {
  margin-bottom: 50px;
}
.article-footer .comment-form-comment {
  margin: 15px 0;
}
.article-footer .comment-form-comment #comment {
  display: block;
  width: 100%;
}
.article-footer .submit {
  margin: 20px 0;
}
.article-footer .comment-form-author,
.article-footer .comment-form-email,
.article-footer .comment-form-major {
  float: left;
  padding: 0 15px;
  width: 33.333333%;
}
.article-footer .comment-form-author .required,
.article-footer .comment-form-email .required,
.article-footer .comment-form-major .required {
  color: #f00;
}
.article-footer .comment-form-author input,
.article-footer .comment-form-email input,
.article-footer .comment-form-major input {
  width: 100%;
  display: block;
}
.group-elegant .second-title {
  margin: 20px 0 2%;
}
.group-elegant .elegant-item {
  padding: 0 10px;
  position: relative;
  margin-bottom: 20px;
}
.group-elegant .elegant-item .lightboxhover {
  overflow: hidden;
  border-radius: 8px;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.group-elegant .elegant-item .lightboxhover:hover {
  opacity: 0.7;
}
.group-elegant .elegant-item .portfoliolink {
  position: absolute;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  bottom: 0;
  z-index: 1000;
  transition: opacity 0.5s ease-in;
}
.group-elegant .elegant-item .portfoliolink .piteminfo {
  padding: 8px;
  text-align: center;
}
@media (max-width: 576px) {
  .article-footer {
    margin-bottom: 50px;
  }
  .article-footer .comment-form-comment {
    margin: 15px 0;
  }
  .article-footer .comment-form-comment #comment {
    display: block;
    width: 100%;
  }
  .article-footer .submit {
    margin: 20px 0;
  }
  .article-footer .comment-form-author,
  .article-footer .comment-form-email,
  .article-footer .comment-form-major {
    float: none;
    width: 100%;
    margin: 10px 0;
  }
}
</style>
