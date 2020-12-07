<template>
  <div class="row groups-list">
    <div
      class="col-lg-4 group-item"
      v-for="(item, index) in groupsList"
      :key="index"
      @click="$router.push({ path: '/videos/list/info', query: {id: item.id} })"
    >
      <div class="img-wrapper">
        <div class="pre-vid-icon"><i class="fa fa-play-circle-o"></i></div>
        <ImageDuplicate 
          url='http://themes.kadencethemes.com/virtue/wp-content/uploads/2013/07/photo-1416339684178-3a239570f315-400x400.jpg' 
          :title='item.name'
        />
      </div>
      <div class="portfoliolink">
        <div class="piteminfo">
          <h5>{{item.name}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    groupsList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.groups-list {
  margin-bottom: 50px;
}
.group-item {
  // padding: 0 10px;
  position: relative;
  margin-bottom: 20px;
}
.group-item .pre-vid-icon {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: pointer;
  -webkit-transition: opacity 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out;
  -ms-transition: opacity 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
.group-item .pre-vid-icon:hover {
  opacity: 0.8;
  background-color: rgba(255, 255, 255, 0.6);
}
.group-item .pre-vid-icon i {
  color: #fff;
  text-align: center;
  width: 100px;
  font-size: 100px;
}
.group-item .portfoliolink {
  position: absolute;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  bottom: 0;
  z-index: 1000;
  transition: opacity 0.5s ease-in;
}
.group-item .portfoliolink .piteminfo {
  padding: 8px;
  text-align: center;
}
</style>
