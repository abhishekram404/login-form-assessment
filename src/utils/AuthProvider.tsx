import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import setBearerTokenInHeaders from './setBearerTokenInHeaders'
export interface AuthContextType {
  isAuthenticated: boolean
  isLoading?: boolean
  fullName?: string
  loginSuccess?: (token: string, fullName: string) => void
  logout?: VoidFunction
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loginSuccess: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [fullName, setFullName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const loginSuccess = (token?: string, fullName?: string) => {
    if (!token) return
    setBearerTokenInHeaders()
    if (fullName) setFullName(fullName)
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
    localStorage.setItem('fullName', fullName || '')
    navigate('/')
  }
  const logout = () => {
    setBearerTokenInHeaders()
    setIsAuthenticated(false)
    setFullName('')
    localStorage.removeItem('token')
    localStorage.removeItem('fullName')
    navigate('/login')
  }

  const value = {
    isAuthenticated,
    isLoading,
    fullName,
    setIsAuthenticated,
    loginSuccess,
    logout,
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const fullName = localStorage.getItem('fullName')
    if (token) {
      setBearerTokenInHeaders()
      setIsAuthenticated(true)
      if (fullName) setFullName(fullName)
    }
    setIsLoading(false)
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
