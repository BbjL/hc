<template>
  <nav aria-label="breadcrumb" class="bread-box container">
    <ol class="breadcrumb" style="background: #fbfbfb; color: #333">
      <!--样式不同-->
      <li class="breadcrumb-item" v-for="(item, index) in list" :key="index">
        <span
          style="font-size: 14px"
          @click="
            $route.path !== item.path ? $router.push({ path: item.path }) : ''
          "
          >{{ item.title }}</span
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadNav",
  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-box .breadcrumb {
  padding: 15px 0;
}
.bread-box .breadcrumb .breadcrumb-item {
  color: #2a2e2e;
}
.bread-box .breadcrumb .breadcrumb-item > span {
  cursor: pointer;
}
.bread-box .breadcrumb .breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
</style>
