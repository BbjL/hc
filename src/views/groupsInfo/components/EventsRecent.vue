<template>
  <div class="group-elegant">
    <h3 class="second-title">组内近况</h3>
    <div class="row">
      <div
        class="elegant-item col-lg-3 col-md-3 col-sm-4 col-xs-12"
        v-for="(recentItem, index) in eventsRecent"
        :key="index"
      >
        <RecentItem :recentItem="recentItem" nextRoute='/elegant/list/info' />
      </div>
    </div>
  </div>
</template>

<script>
import RecentItem from "@/components/RecentItem";

export default {
  name: "",
  components: { RecentItem },
  props: {
    eventsRecent: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.group-elegant .second-title {
  margin: 20px 0 2%;
}
.group-elegant .elegant-item {
  padding: 0 10px;
  position: relative;
  margin-bottom: 20px;
}
</style>