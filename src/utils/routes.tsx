import Layout from '@components/Layout/Layout'
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Transactions from '@pages/Transactions/Transactions'
import Providers from '@providers/Providers'
import { RouteObject } from 'react-router-dom'

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
              {
                path: '/',
                element: <Dashboard />,
                loader: async () => ({ pageName: 'Dashboard' }),
              },
              {
                path: '/transactions',
                element: <Transactions />,
                loader: async () => ({ pageName: 'Transactions' }),
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
