import { validateCreds } from '@pages/Login/Login.utils'
import loginApi from '@services/login.api'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import useAuth from './useAuth'
import useToast from './useToast'

export type Creds = {
  email: string
  password: string
}

export default function useLogin() {
  const toast = useToast()
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
      const dataObj = data?.[0]
      loginSuccess?.(dataObj?.jwt_token, dataObj?.full_name)
      toast.success('Login successful')
    },
    onError(error) {
      let message = "Couldn't login"
      if (error instanceof AxiosError) {
        message = error?.response?.data?.message
      }
      toast.error(message)
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
