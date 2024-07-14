import { AuthContext } from '@utils/AuthProvider'
import { useContext } from 'react'

export default function useAuth() {
  return useContext(AuthContext)
}
