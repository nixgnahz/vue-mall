const Login = (resolve) => require(['@/components/Login/Index'], resolve)
const Message = (resolve) => require(['@/components/Login/Message'], resolve)
const Password = (resolve) => require(['@/components/Login/Password'], resolve)

const loginRouter = {
  path: '/login',
  component: Login,
  children: [
    {
      path: '/',
      redirect: {
        name: 'password'
      }
    },
    {
      path: 'password',
      name: 'password',
      component: Password
    },
    {
      path: 'message',
      name: 'message',
      component: Message
    }
  ]
}

export default loginRouter