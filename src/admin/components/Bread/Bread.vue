<template>
  <el-breadcrumb class="bread" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        :to="index === 0 ? item.path : ''"
        v-for="(item, index) in crumbs"
        :key="index*1"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "bread",
  props: ["crumbs"],
};
</script>


