import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Middle from '@/components/Middle'
import Middle2 from '@/components/Middle2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }, {
      path: '/middle',
      name: 'Middle',
      component: Middle
    }, {
      path: '/middle2',
      name: 'Middle2',
      component: Middle2
    }
  ]
})
