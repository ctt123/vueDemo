<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.id">
        <my-card class="list-item"
                 :discount="item.discount"
                 :desc="item.desc"
                 :price="item.price"
                 :oPrice="item.oPrice"
                 :detail="item.detail"
                 :title="item.title">
        </my-card>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import MyCard from './Card.vue'

  export default {
    name: 'Test2',
    components: {MyCard},
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
        }, {
          id: 3,
          detail: '机+酒',
          title: '商店名称商店名称商店名称商店名称商店名称商店名称',
          price: 1999,
          desc: '本季新品 不去等一年',
          oPrice: 4999
        }, {
          id: 4,
          detail: '机+酒',
          title: '商店名称商店名称商店名称商店名称商店名称商店名称',
          price: 1999,
          discount: 300,
          desc: '本季新品 不去等一年',
          oPrice: 4999
        }, {
          id: 5,
          detail: '机+酒',
          title: '商店名称商店名称商店名称商店名称商店名称商店名称',
          price: 1999,
          discount: 300,
          desc: '本季新品 不去等一年',
          oPrice: 4999
        }, {
          id: 6,
          detail: '机+酒',
          title: '商店名称商店名称商店名称商店名称商店名称商店名称',
          price: 1999,
          discount: 300,
          desc: '本季新品 不去等一年',
          oPrice: 4999
        }, {
          id: 7,
          detail: '机+酒',
          title: '商店名称商店名称商店名称商店名称商店名称商店名称',
          price: 1999,
          discount: 300,
          desc: '本季新品 不去等一年',
          oPrice: 4999
        }]
      }
    },
    methods: {},
    mounted () {
      new Swiper('.swiper-container', {
        slidesPerView: 3
      })
    }
  }
</script>
<style scoped>
  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .list-item {
    display: inline-block;
    float: left;
    width: 100%;
    padding: 10px 0 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
