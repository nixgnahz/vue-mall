import Category from '@/components/Category/Index'
import CategoryList from '@/components/Category/CategoryList'
import CategoryResult from '@/components/Category/CategoryResult'

const categoryRouter = {
  path: '/category',
  component: Category,
  children: [
    {
      path: '/',
      redirect: {
        name: 'list'
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
}

export default categoryRouter