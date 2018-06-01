<template>
  <div class="container">
    <div class="tabs" ref="tabs">
      <div class="tab" :class="{active:tab.isActive}" @click="goAnchor('#anchor-'+tab.id,index)"
           v-for="(tab,index) in tabs" ref="tab"
           :key="tab.id">
        {{tab.name + index}}
      </div>
    </div>

    <div class="content-container" ref="con" @scroll="changeContent()">
      <div class="content" v-for="tab in tabs" :id="'anchor-'+tab.id" :key="tab.id">
        {{tab.content}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
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
          }],
        oIndex: 0,
        tab: null,
        contentHeightArr: []
      }
    },
    methods: {
      // 点击tab，滚动至对应div，tab变亮
      goAnchor (selector, index) {
        const contentContainer = this.$refs.con
        contentContainer.scrollTop = this.contentHeightArr[index]
        this.getLight(index)
      },
      // tab变亮
      getLight (index) {
        if (this.oIndex !== index) {
          this.tabs[this.oIndex].isActive = false
          this.oIndex = index
          this.tabs[index].isActive = true
        }
      },
      // tab居中
      tabCenter (index) {
        this.$refs.tabs.scrollLeft = this.$refs.tab[index].offsetLeft - document.body.clientWidth / 2 + this.$refs.tab[index].clientWidth / 2
      },
      // scroll滚动出发事件
      changeContent () {
        const contentContainer = this.$refs.con
        for (let i = 0; i < this.contentHeightArr.length; i++) {
          if ((contentContainer.scrollTop >= this.contentHeightArr[i] - 1) && (contentContainer.scrollTop < this.contentHeightArr[i + 1] - 1)) {
            this.getLight(i)
            this.tabCenter(i)
            return
          }
        }
      }
    },
    mounted () {
      this.contentHeightArr = this.tabs.map(item => this.$el.querySelector('#anchor-' + item.id).offsetTop - 40)
      console.log(document.body.clientWidth)
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
