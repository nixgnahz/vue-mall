import Login from '@/components/Login/Index'
import Password from '@/components/Login/Password'
import Message from '@/components/Login/Message'

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