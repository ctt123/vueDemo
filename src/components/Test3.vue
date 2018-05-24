<template>
  <div class="container">
    <div class="tabs">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="goAnchor('#anchor-'+tab.id,index)" v-for="(tab,index) in tabs"
               :key="tab.id">
            <div class="tab" :class="{active:tab.isActive}">
              {{tab.name}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs-position"></div>
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
  import Swiper from 'swiper'

  export default {
    name: 'Test3',
    data() {
      return {
        tabs: [
          {
            id: 1,
            name: 'A',
            content: 'a',
            isActive: true
          }, {
            id: 2,
            name: 'B',
            content: 'b',
            isActive: false
          }, {
            id: 3,
            name: 'C',
            content: 'c',
            isActive: false
          }, {
            id: 4,
            name: 'D',
            content: 'd',
            isActive: false
          }, {
            id: 5,
            name: 'E',
            content: 'e',
            isActive: false
          }, {
            id: 6,
            name: 'F',
            content: 'f',
            isActive: false
          }, {
            id: 7,
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
      goAnchor(selector) {
        const anchor = this.$el.querySelector(selector)
        const contentContainer = this.$refs.con;
        var a=anchor.offsetTop-40;
        console.log(a)
        contentContainer.scrollTop = a
        console.log(contentContainer.scrollTop)
      },
      getLight(index) {
        if (this.oIndex !== index) {
          console.log(index)
          this.tabs[this.oIndex].isActive = false;
          this.oIndex = index;
          this.tabs[index].isActive = true;
        }
      },
      changeContent() {
        const contentContainer = this.$refs.con;
        for (let i = 0; i < this.contentHeightArr.length; i++) {
          console.log(i)
          console.log(contentContainer.scrollTop)
//          if ( contentContainer.scrollTop+i*10>= this.contentHeightArr[i]) {//scrollTop比arr[i]大，那么oIndex就是i
//            this.getLight(i);
//            return;
//          }
        }
      }
    },
    mounted() {
      this.tab = new Swiper('.swiper-container', {
        spaceBetween: 10,
        slidesPerView: 4,
        centeredSlides: false,
        initialSlide: 0
      });
      this.contentHeightArr = this.tabs.map(item => this.$el.querySelector('#anchor-' + item.id).offsetTop - 40)
      console.log(this.contentHeightArr)
    }
  }
</script>

<style scoped>
  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size:0;
  }

  .tabs {
    position: fixed;
    width: 100%;
    flex: none;
    height:40px;
    top:0;
    left:0;
    background-color: #cccccc;
  }

  .tab {
    height: 20px;
    text-align: center;
    vertical-align: middle;
    background-color: #999;
    color: #fff;
    margin-top:10px;
    font-size: 12px;
    line-height: 20px;
  }

  .tabs-position {
    width: 100%;
    height: 20px;
  }

  .content {
    min-height: 200px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #999999;
    font-size:12px;
    margin-bottom:10px;
  }

  .content-container {
    overflow: scroll;
    flex: 1;
  }

  .active {
    background-color: aqua;
  }


</style>
