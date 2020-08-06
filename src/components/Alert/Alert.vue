<template>
  <div></div>
</template>

<script>
    export default {
        name: "Alert",
        props:['showAlert'],
        mounted(){
          PubSub.subscribe('alert', function(msg, data){
            swal("Hello world!", {
              button: false,
            });
          })
        },
        methods:{
          isNeed(){
            swal("Hello world!", {
              button: false,
            });
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>


<style>
  .button {
    display: inline-block;
    margin: 20px;
    padding: 10px 20px;
    background:#fff;
    border:1px #333 solid;
    font-size:14px;
    color:#333;
  }
  a {
    font-size:14px;
    color:#333;
    text-decoration:none;
  }
  .close {
    text-align:right;
    padding: 10px;
  }
  p {
    padding: 20px;
    line-height:1.6;
  }
  video {
    width:100%;
    height:auto;
  }
</style>
