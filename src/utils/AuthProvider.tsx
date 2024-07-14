import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'

export interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  loginSuccess?: (token: string) => void
  logout?: VoidFunction
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  loginSuccess: () => {},
  logout: () => {},
})

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  const loginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
    navigate('/')
  }
  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    loginSuccess,
    logout,
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
