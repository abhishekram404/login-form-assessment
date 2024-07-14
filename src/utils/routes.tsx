import Layout from '@components/Layout/Layout'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import { RouteObject } from 'react-router-dom'
import Providers from './Providers'

export const routes: RouteObject[] = [
  {
    element: <Providers />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [{ path: '/', element: <Dashboard /> }],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]
