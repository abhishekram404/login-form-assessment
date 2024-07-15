import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './AuthProvider'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API
axios.defaults.headers.common['Authorization'] =
  `Bearer ${localStorage.getItem('token')}`

const queryClient = new QueryClient()

export default function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  )
}
