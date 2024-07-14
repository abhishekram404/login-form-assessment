import Layout from '@components/Layout/Layout'
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Transactions from '@pages/Transactions/Transactions'
import { RouteObject } from 'react-router-dom'
import Providers from './Providers'

export const routes: RouteObject[] = [
  {
    element: <Providers />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Layout />,
            children: [
              { path: '/', element: <Dashboard /> },
              {
                path: '/transactions',
                element: <Transactions />,
              },
            ],
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]
