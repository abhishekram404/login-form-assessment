import { validateCreds } from '@pages/Login/Login.utils'
import loginApi from '@services/login.api'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import useAuth from './useAuth'

export type Creds = {
  email: string
  password: string
}

export default function useLogin() {
  const { loginSuccess } = useAuth()
  const [creds, setCreds] = useState<Creds>({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess({ data }) {
      loginSuccess?.(data?.[0]?.jwt_token)
    },
  })

  const clearError = (type: keyof typeof errors) => {
    setErrors(prev => ({
      ...prev,
      [type]: '',
    }))
  }

  const handleChange = (type: keyof typeof creds) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      clearError(type)
      setCreds(prev => ({
        ...prev,
        [type]: e.target.value,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const { hasError, errors } = validateCreds(creds)
    if (hasError) {
      setErrors(errors)
      return
    }

    try {
      const payload = {
        login_id: creds.email,
        login_password: creds.password,
        ip_address: import.meta.env.VITE_LOGIN_IP,
      }
      await mutateAsync(payload)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    creds,
    errors,
    isPending,
    handleChange,
    handleSubmit,
  }
}
