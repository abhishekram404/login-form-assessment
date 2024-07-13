import Layout from '@components/Layout/Layout'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
]
