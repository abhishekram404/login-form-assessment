import { validateCreds } from '@pages/Login/Login.utils'
import loginApi from '@services/login.api'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'

export type Creds = {
  email: string
  password: string
}

export default function useLogin() {
  const [creds, setCreds] = useState<Creds>({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const login = useMutation({
    mutationFn: loginApi,
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
      const res = await login.mutateAsync(creds)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    creds,
    errors,
    handleChange,
    handleSubmit,
  }
}
