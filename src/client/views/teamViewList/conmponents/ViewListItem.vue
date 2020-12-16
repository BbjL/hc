<template>
  <div class="row">
    <div class="col-lg-6 col-md-6" v-for="(item, index) in list" :key="index">
      <div class="elegant-item">
        <div class="row">
          <div class="img-wrapper col-lg-5 col-md-5">
            <img
              class="w-100 lightboxhover"
              src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-270x270.jpg"
              :alt="item.title"
            />
          </div>

          <div class="short-intro col-lg-7 col-md-7">
            <div class="post-date">
              <span>{{ (item.date + "").split("-")[2] }}</span>
              July {{ (item.date + "").split("-")[0] }}
            </div>
            <header class="intro-header">
              <h3
                class="intro-title"
                @click="
                  $router.push({ path: nextRoute, query: { id: item.id } })
                "
              >
                {{ item.title }}
              </h3>
            </header>
            <main class="intro-content">
              <p>
                {{ item.content }}
                <span
                  @click="
                    $router.push({
                      path: nextRoute,
                      query: { id: item.id },
                    })
                  "
                  >...READ MORE</span
                >
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    list: {
      type: Array,
      required: true,
    },
    nextRoute: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.elegant-item {
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin: 0 0 20px 0;
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
}
.short-intro .intro-content p {
  position: relative;
  max-height: 6em;
  overflow: hidden;
}
.short-intro .intro-content p span {
  position: absolute;
  right: 3px;
  bottom: 0;
  color: #6c8dab;
  background-color: #fff;
  box-shadow: 0 0 3px 3px #fff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .short-intro {
    margin-left: 0;
  }
}
</style>
