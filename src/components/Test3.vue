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
    <div class="contents">

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
      goAnchor (selector, index) {
        const contentContainer = this.$refs.con
        contentContainer.scrollTop = this.contentHeightArr[index]
        if (index > 4) {
          this.getLight(index)
        }
      },
      getLight (index) {
        if (this.oIndex !== index) {
          this.tabs[this.oIndex].isActive = false
          this.oIndex = index
          console.log(index)
          this.tabs[index].isActive = true
        }
      },
      tabLeft (index) {
        this.$refs.tabs.scrollLeft = index > 1 ? (this.$refs.tab[index - 1].offsetLeft - 10) : 0
      },
      changeContent () {
        const contentContainer = this.$refs.con
        for (let i = 0; i < this.contentHeightArr.length; i++) {
          if ((contentContainer.scrollTop >= this.contentHeightArr[i] - 1) && (contentContainer.scrollTop < this.contentHeightArr[i + 1] - 1)) {
            this.getLight(i)
            this.tabLeft(i)
            return
          }
        }
      }
    },
    mounted () {
      this.contentHeightArr = this.tabs.map(item => this.$el.querySelector('#anchor-' + item.id).offsetTop - 40)
      console.log(document.body.scrollWidth)
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
    /*position: fixed;*/
    width: 100%;
    flex: none;
    /*top: 0;*/
    /*left: 0;*/
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
    width: 110px;
    height: 30px;
    margin-right: 10px;
    line-height: 30px;
  }

  .content {
    min-height: 200px;
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

  .active {
    background-color: aqua;
  }
</style>
