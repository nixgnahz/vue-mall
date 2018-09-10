import Vue from 'vue'
import Router from 'vue-router'

import Address from '@/components/Address/Index'
import Cart from '@/components/Cart/Index'
import Category from '@/components/Category/Index'
import GoodsDetail from '@/components/GoodsDetail/Index'
import Home from '@/components/Home/Index'
import Login from '@/components/Login/Index'
import Password from '@/components/Login/Password'
import Message from '@/components/Login/Message'
import Personal from '@/components/Personal/Index'
import Search from '@/components/Search/Index'
import UserInfo from '@/components/UserInfo/Index'
import Orders from '@/components/Orders/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: GoodsDetail
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        {
          path: '/',
          redirect: {
            path: 'password'
          }
        },
        {
          path: 'password',
          name: 'password',
          component: Password
        },
        {
          path: 'message',
          name: 'messgae',
          component: Message
        }
      ]
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
      path: '/user',
      name: 'user',
      component: UserInfo
    }
  ]
})
