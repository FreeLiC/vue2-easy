import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Home from '../page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'item',
          component:Home
        }
      ]
    }
  ]
})
