const Category = (resolve) => require(['@/components/Category/Index'], resolve)
const CategoryList = (resolve) => require(['@/components/Category/CategoryList'], resolve)
const CategoryResult = (resolve) => require(['@/components/Category/CategoryResult'], resolve)

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