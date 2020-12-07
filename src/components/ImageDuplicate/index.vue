<template>
  <div class="image-duplicate">
    <img
      :src="url"
      :alt="title"
      @error.once="showDuplicate = false"
      @load.once="showDuplicate = false"
    />
    <i v-if="showDuplicate"></i>
  </div>
</template>

<script>
export default {
  name: "ImageDuplicate",
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      defalut: "",
    },
  },
  data() {
    return {
      showDuplicate: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-duplicate {
  img {
    display: block;
    width: 100%;
  }
  i {
    display: block;
    width: 100%;
    text-align: center;
    padding-top: 100%;
    background-color: #fff;
    box-shadow: 0 0 2px 2px #e7e4e4;
  }
}
</style>