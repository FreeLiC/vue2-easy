import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '../page/home'
import Item from '../page/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'',
          component:r => require.ensure([], () => r(require('../page/home')), 'home')
        },
        {
          path:'/item',
          component:Item
        }
      ]
    }
  ]
})
