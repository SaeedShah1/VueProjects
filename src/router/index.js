import { createRouter, createWebHistory } from 'vue-router'
import paycash from '../pages/paycash.vue'
import fundtransfer from '../MainPage/fundTransfer.vue'
import funddetails from '../MainPage/FundsDetails.vue'
import next from '../MainPage/display.vue'

 const routes = [
  
  {
    path: '/',
    name: 'fundTransfer',
    component: fundtransfer
  },
  {
    path: '/details',
    name: 'funddetails',
    component: funddetails
  },
  {
    path: '/display',
    name: 'next',
    component: next
  },
      {
        path: '/paycash',
        name: 'paycash',
        component: paycash
          },
      {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
