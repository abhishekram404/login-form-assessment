import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './AuthProvider'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

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
