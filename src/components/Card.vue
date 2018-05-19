<template>
  <div class="card">
    <div class="item-pic">
      <div v-if="discount" class="item-discount item-discount-rb">
        <div class="item-dis-content">
          <p class="item-dis-name">帮砍价</p>
          <span class="item-dis-num">-{{discount}}</span><span class="fs9">元</span>
        </div>
      </div>
    </div>
    <div class="item-detail">
      <span class="item-detail-detail">{{detail}}</span><span class="point">·</span><span
      class="item-detail-desc">{{desc}}</span>
    </div>
    <div class="item-title">
      {{title}}
    </div>
    <div class="item-price">
      <span class="item-price-price">{{price}}</span><span class="item-price-span">元起</span>
      <span class="item-dis-o-price">￥{{oPrice}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCard',
    props: {
      discount: {
        type: Number
      },
      detail: {
        type: String,
        default: '无'
      },
      desc: {
        type: String,
        default: '无'
      },
      price: {
        type: Number,
        default: 0.0
      },
      oPrice: {
        type: Number,
        default: 0.0
      },
      title: {
        type: String,
        default: '无'
      }
    }
  }
</script>

<style scoped>
  .item-pic {
    width: 100%;
    background-color: #cccccc;
    position: relative;
  }

  .fs9 {
    display: inline-block;
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

  .point {
    padding: 0 4px;
    vertical-align: middle;
    color: #999999;
  }

  .item-dis-o-price {
    margin-left: 8px;
    font-size: 12px;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    -ms-transform: scale(0.75);
    -o-transform: scale(0.75);
    transform: scale(0.75);
    color: #999999;
    text-decoration: line-through;
  }
</style>
