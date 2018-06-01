<template>
  <!--<div class="container">-->
  <!--<div class="tabs" ref="tabs">-->
  <!--<div class="tab" :class="{active:tab.isActive}" @click="goAnchor('#anchor-'+tab.id,index)"-->
  <!--v-for="(tab,index) in tabs" ref="tab"-->
  <!--:key="tab.id">-->
  <!--{{tab.name + index}}-->
  <!--</div>-->
  <!--</div>-->

  <!--<div class="content-container" ref="con" @scroll="changeContent()">-->
  <!--<div class="content" v-for="tab in tabs" :id="'anchor-'+tab.id" :key="tab.id">-->
  <!--{{tab.content}}-->
  <!--</div>-->
  <!--</div>-->
  <!--</div>-->
  <Tab :tabs="tabs">

  </Tab>
</template>
<script>
  import Tab from './Tab.vue'

  export default {
    components: {Tab},
    name: 'Test3',
    data () {
      return {
        tabs: [
          {
            id: 0,
            name: 'A',
            content: 'a',
            isActive: true
          }, {
            id: 1,
            name: 'B',
            content: 'b',
            isActive: false
          }, {
            id: 2,
            name: 'C',
            content: 'c',
            isActive: false
          }, {
            id: 3,
            name: 'D',
            content: 'd',
            isActive: false
          }, {
            id: 4,
            name: 'E',
            content: 'e',
            isActive: false
          }, {
            id: 5,
            name: 'F',
            content: 'f',
            isActive: false
          }, {
            id: 6,
            name: 'G',
            content: 'g',
            isActive: false
          }]
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 0;
  }

  .tabs {
    flex: none;
    background-color: #cccccc;
    font-size: 0;
    padding: 5px 10px;
    overflow-x: scroll;
    white-space: nowrap;
  }

  .tab {
    text-align: center;
    background-color: #999;
    color: #fff;
    font-size: 12px;
    display: inline-block;
    width: 80px;
    height: 30px;
    margin-right: 10px;
    line-height: 30px;
  }

  .content {
    min-height: 200px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #999999;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .content-container {
    overflow: scroll;
    flex: 1;
    padding: 10px;
  }

  /*.light-enter {*/
  /*background: red;*/
  /*-webkit-transition: background 5.5s;*/
  /*-moz-transition: background 5.5s;*/
  /*-ms-transition: background 5.5s;*/
  /*-o-transition: background 5.5s;*/
  /*transition: background 5.5s;*/
  /*}*/

  .active {
    background: aqua;
  }
</style>
