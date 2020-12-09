<template>
  <transition name="fade">
    <div class="toTop" v-show="showTop" @click="goTop">
      <i class="fa fa-chevron-up"></i>
    </div>
  </transition>
</template>

<script>
import { throttle } from "@/utils/handle_ev";

export default {
  name: "ToTop",
  data() {
    return {
      showTop: false,
    };
  },
  mounted() {
    //绑定滚动条事件
    window.addEventListener("scroll", throttle(this.scrollTop, 300));
  },
  methods: {
    scrollTop() {
      const top = window.scrollY;
      top === 0 ? (this.showTop = false) : (this.showTop = true);
    },
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.toTop {
  text-align: center;
  bottom: 35px;
  cursor: pointer;
  position: fixed;
  right: 12px;
  z-index: 9999;
  display: block;
  transition: 0.7s;
}
.toTop i {
  background-color: #7f7f7f;
  height: 40px;
  width: 40px;
  color: #fff;
  line-height: 40px;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.toTop i:hover {
  background-color: #fbd232;
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
