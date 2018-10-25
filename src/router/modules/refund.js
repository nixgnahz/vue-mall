import Refund from '@/components/Refund/Index'
import RefundList from '@/components/Refund/RefundList'
import RefundDetail from '@/components/Refund/RefundDetail'

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