<template>
  <div class="container">
    <div class="con1 box con1-clear">
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
    </div>
    <div class="con1 box con1-inline-block">
      <div class="con1-box-in">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box-in">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box-in">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box-in">
        <div class="con1-box-content">
        </div>
      </div>
      <div class="con1-box-in">
        <div class="con1-box-content">
        </div>
      </div>
    </div>
    <div class="con2 box">
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
      <div class="con2-box"></div>
    </div>
    <div class="con3 box">
      <div class="con3-box1"></div>
      <div class="con3-box2"></div>
    </div>
    <div class="con4 box">
      <div class="con4-box1"></div>
      <div class="con4-box2"></div>
    </div>

  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .box {
    padding: 20px;
    border-bottom: 1px dashed #cccccc;
  }

  .con1 {
    position: relative;
    margin: -10px 0 0 -10px;
  }

  .con1-inline-block {
    font-size: 0;
  }

  .con1-clear:after {
    content: '';
    display: block;
    clear: both;
  }

  .con1-box {
    padding: 10px 0 0 10px;
    width: 50%;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .con1-box-in {
    padding: 10px 0 0 10px;
    width: 50%;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .con1-box-content {
    width: 100%;
    background-color: #cccccc;
  }

  .con1-box-content:before {
    content: '';
    height: 0;
    display: inline-block;
    padding-top: 100%;
  }

  .con2 {
    margin: -10px 0 0 -10px;
    font-size: 0;
    overflow-x: scroll;
    white-space: nowrap;
  }

  .con2-box {
    display: inline-block;
    width: 105px;
    height: 160px;
    margin: 10px 0 0 10px;
    background-color: #cccccc;
  }

  .con3 {
    margin: -10px 0 0 -10px;
    position: relative;
  }

  .con3-box1 {
    width: 105px;
    height: 160px;
    background-color: #cccccc;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .con3-box2 {
    height: 160px;
    margin: 10px 0 0 125px;
    background-color: #cccccc;
  }

  .con4 {
    margin: -10px 0 0 -10px;
    display: flex;
  }

  .con4-box1 {
    width: 105px;
    height: 160px;
    margin:10px 0 0 10px;
    background-color: #cccccc;
    flex: none;
  }

  .con4-box2 {
    height: 160px;
    margin: 10px 0 0 10px;
    background-color: #cccccc;
    flex: 1;
  }
</style>
