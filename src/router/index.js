import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Middle from '@/components/Middle'
import Middle2 from '@/components/Middle2'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'

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
    }, {
      path: '/test1',
      name: 'Test1',
      component: Test1
    }, {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }, {
      path: '/test3',
      name: 'Test3',
      component: Test3
    }
  ]
})
