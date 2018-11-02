import Vue from 'vue'
import Router from 'vue-router'

const Address = (resolve)=> require(['@/components/Address/index'], resolve)
const Cart = (resolve)=> require(['@/components/Cart/Index'], resolve)
const GoodsDetail = (resolve)=> require(['@/components/GoodsDetail/Index'], resolve)
const Home = (resolve)=> require(['@/components/Home/Index'], resolve)
const Personal = (resolve)=> require(['@/components/Personal/Index'], resolve)
const Search = (resolve)=> require(['@/components/Search/Index'], resolve)
const UserInfo = (resolve)=> require(['@/components/UserInfo/Index'], resolve)
const Orders = (resolve)=> require(['@/components/Orders/Index'], resolve)
const Setting = (resolve)=> require(['@/components/Setting/Index'], resolve)
const OrderDetail = (resolve)=> require(['@/components/OrderDetail/Index'], resolve)
const PayDetail = (resolve)=> require(['@/components/PayDetail/Index'], resolve)
const EditReceipt = (resolve)=> require(['@/components/EditReceipt/Index'], resolve)

const Ticket = (resolve)=> require(['@/components/Ticket/Index'], resolve)
const Collect = (resolve)=> require(['@/components/Collect/Index'], resolve)
const Records = (resolve)=> require(['@/components/Records/Index'], resolve)
const Question = (resolve)=> require(['@/components/Question/Index'], resolve)
const Feedback = (resolve)=> require(['@/components/Feedback/Index'], resolve)
const About = (resolve)=> require(['@/components/About/Index'], resolve)
const Activity = (resolve)=> require(['@/components/Activity/Index'], resolve)

import refundRouter from './modules/refund'
import categoryRouter from './modules/category'
import loginRouter from './modules/login'

Vue.use(Router)

const routes = [
  refundRouter,
  categoryRouter,
  loginRouter,
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket
  },
  {
    path: '/collect',
    name: 'collect',
    component: Collect
  },
  {
    path: '/records',
    name: 'records',
    component: Records
  },
  {
    path: '/question',
    name: 'question',
    component: Question
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: EditReceipt
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: GoodsDetail
  },
  {
    path: '/pay/:id',
    name: 'pay',
    component: PayDetail
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/person',
    name: 'person',
    component: Personal
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/info/:id',
    name: 'info',
    component: OrderDetail
  },
  {
    path: '/user',
    name: 'user',
    component: UserInfo
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/activity/:id',
    name: 'activity',
    component: Activity
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
