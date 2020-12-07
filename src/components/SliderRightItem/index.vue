<template>
     <div class="sidebar">
      <div class="slider-img">
        <img
          width="100%"
          src="http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-80x50.jpg"
          class="attachment-widget-thumb size-widget-thumb wp-post-image"
          :alt="recentItem.title"
        />
      </div>
      <div class="slider-intro">
        <router-link
          :to="{ path: nextRoute, query: { id: recentItem.id } }"
          title="BasicImage Gallery Post"
          class="recentpost_title"
        >
          {{ recentItem.title }}
        </router-link>
        <span class="recentpost_date">{{ recentItem.date }}</span>
      </div>
    </div>
</template>

<script>

export default {
  name: "SliderRightItem",
  props: {
    recentItem: {
      type: Object,
      required: true,
    },
    nextRoute: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" >
.sidebar {
  margin-left: 10px;
  margin-bottom: 10px;
}
.sidebar .slider-img {
  float: left;
  width: 70px;
}
.sidebar .slider-intro {
  overflow: hidden;
  padding-left: 10px;
}
.sidebar .recentpost_title {
  margin-top: 5px;
  display: block;
  line-height: 20px;
}
.sidebar .recentpost_date {
  margin-top: 5px;
  display: inline-block;
  color: #999;
  font-size: 10px;
  line-height: 12px;
}
</style>
