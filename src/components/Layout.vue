<template>
  <div class="container">
    <div class="con1 box">
      <div class="con1-box"></div>
      <div class="con1-box"></div>
      <div class="con1-box"></div>
      <div class="con1-box"></div>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body {
    height: 100%;
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .box {
    padding: 15px;
    border-bottom: 1px dashed #cccccc;
  }

  .con1 {
    margin: 0 0;
    position: relative;
  }

  .con1-box{
    width:50%;
    height:50%;
    background-color: #cccccc;
    float:left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:5px solid #fff;
  }

  .con1-box:before {
    content: '';
    display: inline-block;
    padding-bottom:100%;
  }

  .con2 {
    display: flex;
    flex-direction: row;
  }

  .con2-box {
    flex-grow: 1;
    height: 150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 5px solid #fff;
    background-color: #cccccc;
  }

  .con3 {
    display: flex;
    flex-direction: row;
  }

  .con3-box1 {
    width: 105px;
    height: 150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 5px solid #fff;
    background-color: #cccccc;
  }

  .con3-box2 {
    height: 150px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 5px solid #fff;
    background-color: #cccccc;
    width: calc(100% - 105px);
  }

</style>
