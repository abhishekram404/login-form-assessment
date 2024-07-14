import useAuth from '@hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) return null

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
