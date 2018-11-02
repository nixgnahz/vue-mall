const Refund = (resolve)=> require(['@/components/Refund/Index'], resolve)
const RefundList = (resolve)=> require(['@/components/Refund/RefundList'], resolve)
const RefundDetail = (resolve)=> require(['@/components/Refund/RefundDetail'], resolve)

const refundRouter = {
  path: '/refund',
  component: Refund,
  children: [
    {
      path: '/',
      redirect: {
        name: 'refundList'
      }
    },
    {
      path: 'list',
      name: 'refundList',
      component: RefundList
    },
    {
      path: 'detail/:id',
      name: 'refundDetail',
      component: RefundDetail
    }
  ]
}

export default refundRouter