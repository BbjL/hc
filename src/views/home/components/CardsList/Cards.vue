<template>
  <div class="thirdCard-content container">
    <Item :lists="[]" />
  </div>
</template>

<script>
import Item from "./Item/Item";

export default {
  name: "Card",
  components: { Item },
};
</script>

<style lang="scss"  scoped>
.thirdCard-content {
  display: block;
  width: 1240px;
  margin: 0px auto;
  margin-bottom: 84px;
  @media (max-width: 768px) {
    padding: 20px 10px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
</style>
