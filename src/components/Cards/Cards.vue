<template>
  <div class="thirdCard-content">
    <div class="row lists" >
      <div  class="col-md card-list">
        <router-link to="/cardpage" class="img-wrapper" >
          <img class="card-img-top" src="../../../static/images/cards/1.jpg"  alt="Card image cap" >
          <h5 class="card-title">组别介绍</h5>
        </router-link >
      </div>
      <div  class="col-md card-list">
        <router-link to="/videos" class="img-wrapper" >
          <img class="card-img-top" src="../../../static/images/cards/2.jpg"  alt="Card image cap" >
          <h5 class="card-title">科研视频</h5>
        </router-link >
      </div>
      <div  class="col-md card-list">
        <router-link to="/elegant" class="img-wrapper" >
          <img class="card-img-top" src="../../../static/images/cards/3.jpg"  alt="Card image cap" >
          <h5 class="card-title">团队风采</h5>
        </router-link >
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .thirdCard-content
    display: block;
    width: 1240px;
    margin: 0px auto;
    /*height: 250px;*/
    margin-bottom: 84px;
    .lists
      /*height 100%*/
      overflow hidden
      .card-list
        padding-right 10px
        padding-left  10px
        height 250px
        .img-wrapper
          display block
          position relative
          height 100%
          width 100%
          overflow hidden
          &::after
            display: block;
            content: "";
            height: 100%;
            width: 100%;
            background: rgba(0,82,217,0.7);
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease-out;
          &:hover
            &::after
              opacity 1
            .card-img-top
              transform scale(1.024)
            .card-title
              &::after
                opacity: 1;
                left: 0;
                width: 100%;
          .card-img-top
            position absolute;
            left 0
            top 0
            height 100%
            width 100%
            overflow hidden
            transition: transform 0.3s ease-out;
          .card-title
            height 40px
            position absolute
            top 50%
            left 50%
            transform translate(-50%)
            text-align center
            color white
            font-size: 30px;
            font-family: 'TencentSansw7';
            margin-top: -20px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(255,255,255,0);
            z-index 3
            &::after
              content: ' ';
              width: 0;
              height: 2px;
              background: #fff;
              bottom: -2px;
              left: 0;
              position: absolute;
              opacity: 0;
              transition all 0.2s linear

  @media (max-width: 568px)
    .thirdCard-content
      margin 0 0 80px !important
      padding 20px 10px
      width: 100%;
      .lists
        .card-list
          padding 15px
</style>
