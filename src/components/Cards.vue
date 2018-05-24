<script type="text/jsx">
  import MyCard from './Card.vue'

  export default {
    components: {MyCard},
    name: 'MyCards',
    props: {
      cards: {
        type: Array,
        required: true
      }
    },
    render () {
      return (
        <div className="cards">
          {this.cards.map(item => <div className="list-item">
            <MyCard {...item}/>
          </div>)}
        </div>
      )
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
