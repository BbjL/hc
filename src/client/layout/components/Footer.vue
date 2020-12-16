<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-12 header-side">
          <p>Copyright © 2019.Company name All rights reserved haichuang <a class='admin-enter' href="admin.html">管理员入口</a></p>
        </div>
        <div class="col-md-5 col-sm-12 header-side">
          <div class="buttom-social-grd text-center">
            <ul>
              <li><a href="#"><span class="fa fa-qq"></span></a></li>
              <li><a href="#"><span class="fa fa-weixin"></span></a></li>
              <li><a href="#"><span class="fa fa-github"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
  footer {
    background:rgb(0, 0, 0);
  }

  footer p {
    padding: 2em 0;
    text-align: left;
    font-size: 14px;
    color: #fff;
    letter-spacing: 2px;
    font-weight: 100;
  }

  footer p a:hover {
    color: rgb(255, 255, 255);
  }

  footer p a {
    color: #fff;
    text-decoration: underline;
  }
  .buttom-social-grd ul li {
    display: inline-block;
    text-align: center;
    border: 1px solid #000;
    width: 40px;
    height: 40px;
    background: #fff;
    line-height: 41px;
    border-radius: 50px;
  }

  .buttom-social-grd ul li a {
    font-size: 15px;
    color: #000;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }

  .buttom-social-grd ul li a:hover {
    color:rgb(44, 190, 255);
  }

  .buttom-social-grd {
    padding: 26px 0px;
    text-align:right;
  }

  .buttom-social-grd ul li:nth-child(2),
  .buttom-social-grd ul li:nth-child(3) {
    margin: 0px 4px;
  }

  .admin-enter {
    text-decoration: none;
  }
  .admin-enter:hover {
    color: aqua;
  }
</style>
