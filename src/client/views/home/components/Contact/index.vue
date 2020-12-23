<template>
  <div class="info-contact">

    <div class="container">
      <div class="contact-us">
        <h3 class="title">联系我们</h3>
        <form action="#" method="post" class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 styled-input">
              <input type="text" name="Name" placeholder="Name" required="">
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 styled-input">
              <input type="email" name="Email" placeholder="Email" required="">
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 styled-input">
              <input type="text" name="phone" placeholder="phone" required="">
            </div>
            <div class="styled-input">
              <textarea name="Message" placeholder="Message" required=""></textarea>
            </div>
            <div class="click">
              <input type="submit" value="SEND">
            </div>
          </div>
        </form>
      </div>
      <div class="clearfix"> </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "contact"

}
</script>


<style scoped>
  .info-contact{
    margin-bottom: 50px;
  }
  .info-contact input[type="text"], .info-contact input[type="email"], .info-contact textarea {
    color: #000;
    border: none;
    padding: 1em;
    border: 1px solid #000;
    font-size: 15px;
    width: 100%;
    outline: none;
    letter-spacing: 1px;
  }
  .styled-input {
    margin: 2em 0em 0em;
    width: 100%;
  }
  .contact-us::-webkit-input-placeholder {
    color: #000;
  }
  .contact-us:-moz-placeholder { /* Firefox 18- */
    color: #000;
  }
  .contact-us::-moz-placeholder {  /* Firefox 19+ */
    color:#000;
  }
  .contact-us :-ms-input-placeholder {
    color:#000;
  }
  .info-contact textarea {
    min-height: 13em;
    resize: none;
  }
  .info-contact .click{
    width: 100%;
  }
  .info-contact input[type="submit"] {
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    border: solid 2px #ff5722;
    padding: .7em 3em;
    outline: 0;
    margin: 2em 0em 0em;
    background:#ff5722;
    display: inline-block;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
  .info-contact input[type="submit"]:hover {
    color: #fff;
    background:#000;
  }
  .styled-input:nth-child(1),.styled-input:nth-child(3){
    padding-left: 0px;
  }
  .styled-input:nth-child(2),.styled-input:nth-child(4){
    padding-right: 0px;
  }
  .styled-input:nth-child(1),.styled-input:nth-child(2) {
    margin-top: 0px;
  }

  @media (max-width: 576px){
    .info-contact .styled-input{
      margin-top:10px;
      padding: 0;
    }
  }
</style>
