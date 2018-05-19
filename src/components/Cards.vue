<template>
  <div class="cards">
    <div v-for="item in cards" :key="item.id" class="list-item">
      <my-card
        :discount="item.discount"
        :desc="item.desc"
        :price="item.price"
        :oPrice="item.oPrice"
        :detail="item.detail"
        :title="item.title">
      </my-card>
    </div>
  </div>
</template>

<script>
  import MyCard from './Card.vue'

  export default {
    components: {MyCard},
    name: 'MyCards',
    props: {
      cards: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .list-item {
    display: inline-block;
    float: left;
    width: 50%;
    padding: 10px 0 0 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

  }
</style>
