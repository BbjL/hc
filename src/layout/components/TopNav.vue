<template>
  <div
    class="sticky-wrapper"
    :class="[{ notOpacity: $route.meta.notOpacity }, { isSticky: isSticky }]"
  >
    <nav class="navbar navbar-expand-lg navbar-default pb-0 pt-0 h-100 sticky">
      <!--logo-->
      <router-link class="navbar-brand ml-sm-5 color" to="/home">
        <img
          src="@/assets/images/mes/logo.png"
          width="25"
          height="30"
          alt="海创团队"
          titile="“海创团队”"
          style="vertical-align: middle; padding-top: 4px"
        />
        <span style="vertical-align: middle; font-size: 30px">海创</span>
      </router-link>

      <!--移动端收缩按钮-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fa fa-bars" style="color: #fff"></span>
      </button>

      <!--路由导航-->
      <div
        class="collapse navbar-collapse justify-content-end mr-sm-5 h-100"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav item-list h-100">
          <router-link
            v-for="route in sliderRoutes"
            :key="route.name"
            :class="{ active: $route.path === route.redirect }"
            class="link-color nav-item nav-link ml-sm-3 mr-sm-3 hvr-underline-from-center"
            :to="route.path"
          >
            {{ route.meta.title }}
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { throttle } from "@/utils/handle_ev";
import { fliterRoutes } from "@/utils/filters";

export default {
  name: "TopNav",
  data() {
    return {
      isSticky: false,
      sliderRoutes: [],
    };
  },
  mounted() {
    // filter routes and show navbar
    const routes = this.$router.options.routes;
    this.sliderRoutes = fliterRoutes(routes)

    window.addEventListener("scroll", throttle(this.handleScroll, 60));
  },
  methods: {
    // if ? sticking in top 
    handleScroll() {
      window.scrollY == 0 ? (this.isSticky = false) : (this.isSticky = true);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-list {
  display: flex;
  align-items: center;
}

.item-list .nav-item {
  font-family: TencentSansw3;
  font-weight: 600;
}

.item-list .link-color {
  padding: 23px 0;
  color: #fff;
  transition: 0.4s;
}

.item-list .link-color:hover {
  color: #fff;
}

.hvr-underline-from-center {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
}

.hvr-underline-from-center.active::before {
  left: 0;
  right: 0;
}

.hvr-underline-from-center:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  right: 50%;
  bottom: 0;
  background: #fff;
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-underline-from-center:hover:before,
.hvr-underline-from-center:focus:before,
.hvr-underline-from-center:active:before {
  left: 0;
  right: 0;
}

@media (min-width: 992px) {
  .sticky-wrapper {
    position: absolute;
    width: 100%;
    z-index: 2000;
    height: 70px;
    transition: 0.4s all ease-in-out;
  }

  .sticky-wrapper.isSticky {
    position: fixed;
    top: 0;
    z-index: 9999;
    height: 60px;
    background-color: rgba(34, 34, 34, 0.75);
  }

  .sticky-wrapper.isSticky .item-list .link-color {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .sticky-wrapper .navbar-brand {
    font-family: TencentSansw7;
    color: #fff;
  }

  .notOpacity {
    position: relative;
    background-color: #000;
    margin-bottom: 30px;
  }
}

@media (min-width: 786px) and (max-width: 992px) {
  .sticky-wrapper {
    z-index: 2000;
    transition: 0.4s all ease-in-out;
    background-color: #222;
  }

  .sticky-wrapper .navbar-brand {
    padding: 15px 0;
    font-family: TencentSansw7;
    color: #fff;
  }
}

@media (max-width: 786px) {
  .sticky-wrapper {
    z-index: 2000;
    transition: 0.4s all ease-in-out;
    background-color: #222;
  }

  .sticky-wrapper .navbar-brand {
    padding: 15px 0;
    font-family: TencentSansw7;
    color: #fff;
  }
}
</style>
