<template>
  <div
    @click="$router.replace({ path: nextRoute, query: { id: recentItem.id } })"
  >
    <div class="img-wrapper lightboxhover">
      <ImageDuplicate
        url="http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/slide01-400x400.jpg"
        :title="recentItem.title"
      />
    </div>
    <div class="portfoliolink">
      <div class="piteminfo">
        <h5>{{ recentItem.title }}</h5>
        <p class="cportfoliotag">{{ recentItem.level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentItem",
  props: {
    recentItem: {
      type: Object,
      required: true,
    },
    nextRoute: {
      type: String,
    },
  },
};
</script>

<style lang="scss" >
.lightboxhover {
  overflow: hidden;
  border-radius: 8px;
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.lightboxhover:hover {
  opacity: 0.7;
}
.portfoliolink {
  position: absolute;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  bottom: 0;
  z-index: 1000;
  transition: opacity 0.5s ease-in;
}
.portfoliolink .piteminfo {
  padding: 8px;
  text-align: center;
}
</style>
