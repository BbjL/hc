<template>
  <main class="container info-wrapper">
    <div class="row">
      <!--路由导航-->
      <Bread :list="breadList" />
      <!--主要内容-->
      <article class="col-lg-9 ">
        <!--标题  简介-->
        <header class="article-header">
          <h1 class="title">{{ info.title }}</h1>
          <div class="basic-info">
            <span
              ><i class="fa fa-user-circle"></i>组长：{{ info.leader }}</span
            >
            <span><i class="fa fa-calendar"></i>成立时间：{{ info.date }}</span>
            <span><i class="fa fa-users"></i>小组成员：{{ info.members }}</span>
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
              alt=""
            />
          </div>
          <!--简介-->
          <p>{{ info.content }}</p>
          <!--组内近况-->
          <div class='d-none d-lg-block d-md-block d-sm-block'>
            <EventsRecent :eventsRecent="eventsRecent" />
          </div>
        </main>
        <!--底部申请列表-->
        <footer class="article-footer">
          <h1 class="second-title">申请加入</h1>
          <form action="">
            <p class="comment-form-comment">
              <label for="comment">Introduce</label>
              <textarea
                id="comment"
                name="comment"
                cols="45"
                rows="8"
                maxlength="500"
                required="required"
              ></textarea>
            </p>
            <div class="row">
              <p class="comment-form-author">
                <label for="author">Name <span class="required">*</span></label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  value=""
                  size="30"
                  maxlength="245"
                  required="required"
                />
              </p>
              <p class="comment-form-major">
                <label for="major">Major <span class="required">*</span></label>
                <input
                  id="major"
                  name="text"
                  type="text"
                  value=""
                  size="30"
                  maxlength="100"
                  required="required"
                />
              </p>
              <p class="comment-form-email">
                <label for="email">Email <span class="required">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  value=""
                  size="30"
                  maxlength="100"
                  required="required"
                />
              </p>
            </div>
            <button class="submit">Post Request</button>
          </form>
        </footer>
      </article>

      <!--侧边栏-->
      <aside class="col-lg-3 col-md-4 d-lg-block d-none">
        <SliderRight :others="others" nextRoute="/groups/list/info" />
      </aside>
    </div>
  </main>
</template>

<script>
import Bread from "@client/components/Bread/index";
import SliderRight from "@client/components/SliderRight";
import EventsRecent from "./components/EventsRecent";
import { filterBraed } from "@/utils/filters";
import { reqElegantRecent, reqGroups, reqGroupsInfo } from "@client/api/index";

export default {
  name: "index",
  components: { SliderRight, Bread, EventsRecent },
  data() {
    return {
      breadList: filterBraed(this.$route),
      eventsRecent: [],
      info: {},
      others: [],
      auth: "",
      email: "",
      text: "",
      major: "",
    };
  },
  beforeMount() {
    const { id } = this.$route.query;

    reqGroupsInfo({ id }).then((res) => {
      console.log(res);
      this.info = res.data.info;
    });

    reqElegantRecent({ num: 4 }).then((res) => {
      this.eventsRecent = res.data.recent;
    });

    reqGroups().then((res) => {
      this.others = res.data.groups;
    });
  },
  methods: {
    handleSubmit() {
      const auth = this.auth;
      const email = this.email;
      const text = this.text;
      const major = this.text;
      if (auth && email && text && major) {
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

        reqGroupsInfo({ id }).then((res) => {
          console.log(res);
          this.info = res.data.info;
        });
      },
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
