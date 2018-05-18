<template>
  <div class="con">
    <div class="list">
      <div class="list-item" v-for="item in list" v-bind:key="item.id">
        <div class="item-pic">
          <div v-if="item.discount" class="item-discount item-discount-rb">
            <div class="item-dis-content">
              <p class="item-dis-name">帮砍价</p>
              <span class="item-dis-num">-{{item.discount}}</span><span class="fs9">元</span>
            </div>
          </div>
        </div>
        <div class="item-detail">
          <span class="item-detail-detail">{{item.detail}}</span><span class="point">·</span><span
          class="item-detail-desc">{{item.desc}}</span>
        </div>
        <div class="item-title">
          {{item.title}}
        </div>
        <div class="item-price">
          <span class="item-price-price">{{item.price}}</span><span class="item-price-span">元起</span>
          <span class="item-dis-o-price">￥{{item.oPrice}}</span>
        </div>
      </div>
    </div>
    <div class="list1" v-for="item in list1" v-bind:key="item.id">
      <div class="list1-item">
        <div class="item-left">
          <div v-if="item.discount" class="item-discount item-discount-lb">
            <div class="item-dis-content">
              <p class="item-dis-name">帮砍价</p>
              <span class="item-dis-num">-{{item.discount}}</span><span class="fs9">元</span>
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="item-detail">
            <span class="item-detail-detail">{{item.detail}}</span><span class="point">·</span><span
            class="item-detail-desc">{{item.desc}}</span>
          </div>
          <div class="item-title">
            {{item.title}}
          </div>
          <div class="item-price">
            <span class="item-price-price">{{item.price}}</span>元起
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [{
        id: 1,
        detail: '机+酒',
        title: '商店名称商店名称商店名称商店名称商店名称商店名称',
        price: 1999,
        discount: 300,
        desc: '本季新品 不去等一年',
        oPrice: 4999
      }, {
        id: 2,
        detail: '机+酒',
        title: '商店名称商店名称商店名称商店名称商店名称商店名称',
        price: 1999,
        desc: '本季新品 不去等一年',
        oPrice: 4999
      }],
      list1: [{
        id: 3,
        detail: '机+酒',
        title: '商店名称商店名称商店名称商店名称商店名称商店名称',
        price: 1999,
        discount: 300,
        desc: '本季新品 不去等一年',
        oPrice: 4999
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .con {
    padding: 25px 20px;
  }

  .list {
    margin: -10px 0 0 -10px;
  }

  .list:after {
    content: '';
    display: block;
    clear: both;
  }

  .list-item {
    display: inline-block;
    float: left;
    width: 50%;
    padding: 10px 0 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .item-pic {
    width: 100%;
    background-color: #cccccc;
    position: relative;
  }

  .fs9 {
    display:inline-block;
    font-size: 12px;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    -ms-transform: scale(0.75);
    -o-transform: scale(0.75);
    transform: scale(0.75);
  }

  .item-pic:after {
    content: '';
    height: 0;
    display: inline-block;
    padding-top: 78%;
  }

  .item-detail {
    margin-top: 8px;
  }

  .item-detail-detail {
    font-size: 12px;
    color: #3183A1;
    -webkit-transform: scale(0.83);
    -moz-transform: scale(0.83);
    -ms-transform: scale(0.83);
    -o-transform: scale(0.83);
    transform: scale(0.83);
  }

  .item-detail-desc {
    font-size: 12px;
    color: #999999;
    -webkit-transform: scale(0.83);
    -moz-transform: scale(0.83);
    -ms-transform: scale(0.83);
    -o-transform: scale(0.83);
    transform: scale(0.83);
  }

  .item-title {
    margin-top: 4px;
    font-family: PingFangSC;
    font-size: 12px;
    line-height: 17px;
  }

  .item-discount {
    width: 44px;
    height: 44px;
    color: white;
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
    background-color: #999999;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-discount-rb {
    right: 5px;
    bottom: 0;
  }

  .item-discount-lb {
    left: -10px;
    bottom: 0;
  }

  .item-dis-name {
    font-family: PingFangSC;
    font-weight: bold;
    margin: 0;
    font-size: 12px;
    text-align: center;
    transform: scale(0.75);
  }

  .item-dis-num {
    font-family: DINAlternate;
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    line-height: 0;
  }

  .item-price {
    margin-top: 4px;
    color: #E96A65;
    font-size: 12px;
  }

  .item-price-price {
    font-size: 16px;
  }

  .item-price-span {
    font-size: 12px;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    -ms-transform: scale(0.75);
    -o-transform: scale(0.75);
    transform: scale(0.75);
  }

  .list1 {
    margin-top: 20px;
  }

  .list1-item {
    display: flex;
    margin: -10px 0 0 -10px;
  }

  .item-left {
    width: 90px;
    height: 90px;
    flex: none;
    background-color: #cccccc;
    margin: 10px 0 0 10px;
    position: relative;
  }

  .item-right {
    flex: 1;
    margin: 10px 0 0 10px;
  }

  .point {
    padding: 0 4px;
    vertical-align: middle;
    color:#999999;
  }

  .item-dis-o-price{
    margin-left:8px;
    font-size: 12px;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    -ms-transform: scale(0.75);
    -o-transform: scale(0.75);
    transform: scale(0.75);
    color: #999999;
    text-decoration:line-through;
  }
</style>
