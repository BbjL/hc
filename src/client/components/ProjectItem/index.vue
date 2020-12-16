<template>
  <div class="project-item">
    <div class="row">
      <!--项目图片-->
      <div class="img-wrapper col-lg-3 col-md-3">
        <img
          class="w-100 lightboxhover"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-270x270.jpg"
          :alt="project.title"
          @click="$router.push({ path: nextRoute, query: { id: project.id } })"
        />
      </div>
      <!--项目简介-->
      <div class="short-intro col-lg-9 col-md-9">
        <!--日期-->
        <div class="post-date">
          <span>13</span>
          July 2019
        </div>
        <header class="intro-header">
          <!--项目标题-->
          <h3
            class="intro-title"
            @click="
              $router.push({ path: nextRoute, query: { id: project.id } })
            "
          >
            {{ project.title }}
          </h3>
          <!--icon-->
          <div class="basic-info">
            <span
              ><i class="fa fa-user-circle"></i>负责人：{{
                project.leader
              }}</span
            >
            <span
              ><i class="fa fa-calendar"></i>开始时间：{{ project.date }}</span
            >
          </div>
        </header>
        <!--项目内容-->
        <main class="intro-content">
          <p>
            {{ project.content }}
            <span
              @click="
                $router.push({ path: nextRoute, query: { id: project.id } })
              "
              >...READ MORE</span
            >
          </p>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    project: {
      type: Object,
      required: true,
    },
    nextRoute: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.project-item {
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}
.post-date {
  float: right;
  padding: 6px 8px 8px;
  color: #777;
  margin-top: 15px;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.05);
  line-height: normal;
}
.post-date span {
  font-size: 24px;
  display: block;
}
.short-intro {
  margin-left: -15px;
  font-size: 14px;
}
.short-intro .intro-header {
  font-size: 24px;
  margin: 15px 0;
}
.short-intro .intro-header .intro-title {
  font-family: normal;
  color: #444;
  font-weight: 400;
  cursor: pointer;
}
.short-intro .intro-header .basic-info {
  font-size: 14px;
  margin: 10px 0;
}
.short-intro .intro-header .basic-info span:not(:last-of-type)::after {
  content: "|";
  padding: 0 10px 0 5px;
  font-size: 12px;
}
.short-intro .intro-content span {
  color: #6c8dab;
  cursor: pointer;
}
@media (max-width: 768px) {
  .short-intro {
    margin-left: 0;
  }
}
</style>
