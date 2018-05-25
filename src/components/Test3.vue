<template>
  <div class="container">
    <div class="tabs">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(tab,index) in tabs"
                 :key="tab.id" @click="goAnchor('#anchor-'+tab.id,index)" >
            <div class="tab" :class="{active:tab.isActive}"  >
              {{tab.name}}
            </div>
          </div>
        </div>
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
      goAnchor(selector,index) {
        console.log(index)
        const contentContainer = this.$refs.con;
        contentContainer.scrollTop = this.contentHeightArr[index];
      },
      getLight(index) {
        if (this.oIndex !== index) {
          this.tabs[this.oIndex].isActive = false;
          this.oIndex = index;
          this.tabs[index].isActive = true;
        }
      },
      changeContent() {
        const contentContainer = this.$refs.con;
        for (let i = 0; i < this.contentHeightArr.length; i++) {
//          console.log(this.contentHeightArr[i])
//          console.log(contentContainer.scrollTop)
//          console.log(this.contentHeightArr[i+1])
          if ( (contentContainer.scrollTop>= this.contentHeightArr[i]-1)&&(contentContainer.scrollTop< this.contentHeightArr[i+1]-1)) {//scrollTop比arr[i]大，那么oIndex就是i
            this.getLight(i);
//            console.log(i)
            return;
          }
        }
      }
    },
    mounted() {
      this.tab = new Swiper('.swiper-container', {
        spaceBetween: 10,
        slidesPerView: 3,
        slideToClickedSlide:true
//        centeredSlides: false,
//        initialSlide: 0
      });
      this.contentHeightArr = this.tabs.map(item => this.$el.querySelector('#anchor-' + item.id).offsetTop - 40)
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
    /*overflow-x: scroll;*/
    /*white-space: nowrap;*/
    padding:5px 10px;
    /*display:flex;*/
  }

  .tab {
    text-align: center;
    background-color: #999;
    color: #fff;
    font-size: 12px;
    display:inline-block;
    width:100%;
    height:30px;
    line-height: 30px;
    /*margin-right:5px;*/
  }

  .tabs-position {
    width: 100%;
    height: 40px;
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
    padding:10px;
  }

  .active {
    background-color: aqua;
  }


</style>
