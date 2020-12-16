<template>
  <div class="row lists">
    <div class="col-md card-list">
      <router-link to="/groups" class="img-wrapper">
        <img
          class="card-img-top"
          src="@/assets/images/client/modulesCard/card-1.jpg"
          alt="Card image cap"
        />
        <h5 class="card-title">组别介绍</h5>
      </router-link>
    </div>
    <div class="col-md card-list">
      <router-link to="/videos" class="img-wrapper">
        <img
          class="card-img-top"
          src="@/assets/images/client/modulesCard/card-2.jpg"
          alt="Card image cap"
        />
        <h5 class="card-title">科研视频</h5>
      </router-link>
    </div>
    <div class="col-md card-list">
      <router-link to="/elegant" class="img-wrapper">
        <img
          class="card-img-top"
          src="@/assets/images/client/modulesCard/card-3.jpg"
          alt="Card image cap"
        />
        <h5 class="card-title">团队风采</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    lists: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  overflow: hidden;
  @media (max-width: 768px) {
    .card-list {
      padding: 15px;
    }
  }
}

.card-list {
  padding-right: 10px;
  padding-left: 10px;
  height: 250px;
  .img-wrapper {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    &::after {
      display: block;
      content: "";
      height: 100%;
      width: 100%;
      background: rgba(0, 82, 217, 0.7);
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
      .card-img-top {
        transform: scale(1.024);
      }
      .card-title {
        &::after {
          opacity: 1;
          left: 0;
          width: 100%;
        }
      }
    }
    .card-img-top {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      transition: transform 0.3s ease-out;
    }
    .card-title {
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
      color: #fff;
      font-size: 30px;
      font-family: "TencentSansw7";
      margin-top: -20px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      z-index: 3;
      &::after {
        content: " ";
        width: 0;
        height: 2px;
        background: #fff;
        bottom: -2px;
        left: 0;
        position: absolute;
        opacity: 0;
        transition: all 0.2s linear;
      }
    }
  }
}
@media (max-width: 768px) {
  .thirdCard-content {
    padding: 20px 10px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .thirdCard-content {
    .lists {
      .card-list {
        padding: 15px;
      }
    }
  }
}
</style>
