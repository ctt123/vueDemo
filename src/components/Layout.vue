<template>
  <div class="container">
    <div class="con1 box">
      <div class="con1-box">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="clear"></div>
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

  .box {
    padding: 20px;
    border-bottom: 1px dashed #cccccc;
  }

  .con1 {
    position: relative;
    margin: -10px 0 0 -10px;
  }

  .clear{
    clear:both;
  }

  .con1-box {
    padding: 10px 0 0 10px;
    width: 50%;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .con1-box-content {
    display: inline-block;
    width: 100%;
    background-color: #cccccc;
  }
  .con1-box-content:before {
    content: '';
    height:0;
    display: inline-block;
    padding-top: 100%;
  }

  .con2 {
    display: flex;
    flex-direction: row;
    margin:-10px 0 0 -10px;
  }

  .con2-box {
    flex-grow: 1;
    height: 150px;
    margin:10px 0 0 10px;
    background-color: #cccccc;
  }

  .con3 {
    display: flex;
    flex-direction: row;
    margin:-10px 0 0 -10px;
  }

  .con3-box1 {
    width: 105px;
    height: 150px;
    margin:10px 0 0 10px;
    background-color: #cccccc;
  }

  .con3-box2 {
    height: 150px;
    margin:10px 0 0 10px;
    background-color: #cccccc;
    width: calc(100% - 105px);
  }

</style>
