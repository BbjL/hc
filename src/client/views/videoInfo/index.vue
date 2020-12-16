<template>
  <div class="container">
    <div class="row">
      <Bread :list="breadList" />
      <div class="col-lg-9 ">
        <!--头部标题-->
        <header>
          <h1 class="title">{{ info.title }}</h1>
        </header>
        <!--视频视频和简介内容-->
        <article class="article-content">
          <vueMiniPlayer
            ref="vueMiniPlayer"
            :video="video"
            style="width: 100%; height: auto"
            :mutex="true"
          />
          <div class="basic-info">
            <span
              ><i class="fa fa-user-circle"></i>发布小组：{{
                info.author
              }}</span
            >
            <span><i class="fa fa-calendar"></i>发布时间：{{ info.date }}</span>
          </div>
          <div>
            <p>{{ info.content }}</p>
          </div>
        </article>
        <!--底部申请列表-->
        <footer class="article-footer">
          <h1 class="second-title">发表意见</h1>
          <form action="">
            <p class="comment-form-comment">
              <label for="comment"
                >Advice <span class="required">*</span></label
              >
              <textarea
                v-model="text"
                id="comment"
                name="comment"
                cols="45"
                rows="8"
                required="required"
                maxlength="500"
              ></textarea>
            </p>
            <div class="row">
              <p class="comment-form-author">
                <label for="author">Name <span class="required">*</span></label>
                <input
                  v-model="auth"
                  id="author"
                  name="author"
                  type="text"
                  value=""
                  size="30"
                  maxlength="245"
                  required="required"
                />
              </p>
              <p class="comment-form-email">
                <label for="email">Email <span class="required">*</span></label>
                <input
                  id="email"
                  v-model="email"
                  name="email"
                  type="text"
                  value=""
                  size="30"
                  maxlength="100"
                  required="required"
                />
              </p>
            </div>
            <button class="submit" @click.prevent="handleSubmit">Post Request</button>
          </form>
        </footer>
      </div>
      <!--侧边栏其他-->
      <div class="col-lg-3 col-md-4 d-lg-block d-none">
        <SliderRight :others="others" nextRoute='/videos/list/info' />
      </div>
    </div>
  </div>
</template>

<script>
import SliderRight from "@client/components/SliderRight/index";
import Bread from "@client/components/Bread/index";
import { filterBraed } from "@/utils/filters";
import { reqVidInfo, reqRecentVids } from "@client/api/index";

export default {
  components: { SliderRight, Bread },
  data() {
    return {
      video: {
        url:
          "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
        cover: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png",
        muted: false,
        loop: false,
        preload: "auto",
        poster: "",
        volume: 1,
        autoplay: false,
      },
      info: {
        title: "",
        date: "",
        author: "",
        content: "",
      },
      others: [],
      auth: "",
      email: "",
      text: "",
      breadList: filterBraed(this.$route),
    };
  },
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    },
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      const { id } = this.$route.query;

      reqVidInfo({ id }).then((res) => {
        const result = res.data.videoInfo;
        const info = this.info;

        info.title = result.title;
        info.date = result.date;
        info.author = result.author;
        info.content = result.content;
      });

      reqRecentVids().then((res) => {
        this.others = res.data.vidsList;
        // 修改传递给slider的参数名
        this.others.forEach(item => {
          item.title = item.name;
          delete item.name
        })
      });
    },
    handleSubmit() {
      const auth = this.auth;
      const email = this.email;
      const text = this.text;
      if (auth && email && text) {
        this.$swal("暂未启用该功能!", {
          button: false,
          timer: 2000,
        });
      }
      return false;
    },
  },
  watch: {
    $route: {
      handler() {
        const { id } = this.$route.query;

        reqVidInfo({ id }).then((res) => {
          const result = res.data.videoInfo;
          const info = this.info;

          info.title = result.title;
          info.date = result.date;
          info.author = result.author;
          info.content = result.content;
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.basic-info {
  font-size: 14px;
  margin: 10px 0;
}
.basic-info span:not(:last-of-type)::after {
  content: "|";
  padding: 0 10px 0 5px;
  font-size: 12px;
}
.article-footer {
  margin-bottom: 50px;
}
.article-footer .required {
  color: #f00;
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
  width: 50%;
}
.article-footer .comment-form-author input,
.article-footer .comment-form-email input,
.article-footer .comment-form-major input {
  width: 100%;
  display: block;
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
