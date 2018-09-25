import Vue from 'vue'
import Router from 'vue-router'

import Address from '@/components/Address/Index'
import Cart from '@/components/Cart/Index'
import GoodsDetail from '@/components/GoodsDetail/Index'
import Home from '@/components/Home/Index'
import Personal from '@/components/Personal/Index'
import Search from '@/components/Search/Index'
import UserInfo from '@/components/UserInfo/Index'
import Orders from '@/components/Orders/Index'
import OrderDetail from '@/components/OrderDetail/Index'
import Setting from '@/components/Setting/Index'
import PayDetail from '@/components/PayDetail/Index'
import EditReceipt from '@/components/EditReceipt/Index'

import Category from '@/components/Category/Index'
import CategoryList from '@/components/Category/CategoryList'
import CategoryResult from '@/components/Category/CategoryResult'

import Login from '@/components/Login/Index'
import Password from '@/components/Login/Password'
import Message from '@/components/Login/Message'

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
      path: '/receipt',
      name: 'receipt',
      component: EditReceipt
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      children: [
        {
          path: '/',
          redirect: {
            path: 'list'
          }
        },
        {
          path: 'list',
          name: 'list',
          component: CategoryList
        },
        {
          path: 'result/:id',
          name: 'result',
          component: CategoryResult
        }
      ]
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
      path: '/info',
      name: 'info',
      component: OrderDetail
    },
    {
      path: '/user',
      name: 'user',
      component: UserInfo
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
