import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

axios.defaults.baseURL = import.meta.env.VITE_BASE_API
const queryClient = new QueryClient()

export default function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  )
}
