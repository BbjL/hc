<template>
  <div>
    <div class="img-wrapper">
      <ImageDuplicate 
        url='http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/photo-1416339684178-3a239570f315-400x400.jpg'
        :title='group.title'
       />
    </div>
    <div class="portfoliolink">
      <div class="piteminfo">
        <h5>{{ group.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    group: {
      type: Object,
      required: true
    },
  },
};
</script>

<style lang="scss" scoped>
.img-wrapper {
  cursor: pointer;
}

.lightboxhover {
  opacity: 1;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
}

.portfoliolink {
  position: absolute;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  bottom: 0;
  z-index: 1000;
  transition: opacity 0.5s ease-in;

  .piteminfo {
    padding: 8px;
    text-align: center;
  }
}
</style>
