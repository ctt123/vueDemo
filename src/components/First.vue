<template>
  <div class="container">
    <div class="con1 box">
      <div class="div1">
        <div class="div2">
          <div class="div3">
            <div class="div4">
              <div class="div3 div5"></div>
            </div>
            <div class="div4">
              <div class="div3 div5"></div>
            </div>
            <div class="div4">
              <div class="div3 div5"></div>
            </div>
            <div class="div4">
              <div class="div3 div5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="con2 box">
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
    </div>
    <div class="con3 box">
      <div class="con3-box1"></div>
      <div class="con3-box2"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    height:100%;
    width:100%;
  }
  .container {
    display: flex;
    flex-direction: column;
  }

  .box{
    padding:10px;
    border-bottom:1px dashed gray;
  }
  .con1 {
    margin: 0 0;
  }

  .div1 {
    width: 100%;
  }

  .div2 {
    position: relative;
    padding-top: 100%;
    background-color: #000;
    /*margin-right:-10px;*/
  }

  .div3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .div4 {
    width: 50%;
    height: 0;
    background-color: red;
    position: relative;
    padding-top: 50%;
    float:left;
  }

  .div5 {
    background-color: gray;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:5px solid #fff;
  }

  .con2{
    display: flex;
    flex-direction: row;
  }

  .con2-box{
    flex-grow: 1;
    height:150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:5px solid #fff;
    background-color: gray;
  }

  .con3{
    display: flex;
    flex-direction: row;
  }

  .con3-box1{
    width: 105px;
    height:150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:5px solid #fff;
    background-color: gray;
  }
  .con3-box2 {
    height: 150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 5px solid #fff;
    background-color: gray;
    width: calc(100% - 105px);
  }

</style>
