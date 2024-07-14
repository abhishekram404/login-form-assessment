import Button from '@components/Button'
import Input from '@components/Input'
import PasswordInput from '@components/PasswordInput/PasswordInput'
import loginApi from '@services/login.api'
import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import {
  FormHeader,
  FormSubtitle,
  FormTitle,
  LoginContainer,
  LoginFormContainer,
} from './Login.styled'

export default function Login() {
  const [creds, setCreds] = useState({
    email: '',
    password: '',
  })

  const login = useMutation({
    mutationFn: loginApi,
  })

  const handleChange = (type: keyof typeof creds) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setCreds(prev => ({
        ...prev,
        [type]: e.target.value,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await login.mutateAsync(creds)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LoginContainer>
      <LoginFormContainer onSubmit={handleSubmit}>
        <FormHeader>
          <FormTitle>Login</FormTitle>
          <FormSubtitle>Hi, welcome back 👋</FormSubtitle>
        </FormHeader>
        <Input
          type="email"
          label="Email"
          placeholder="abc@xyz.com"
          value={creds.email}
          onChange={handleChange('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Hello@123"
          value={creds.password}
          onChange={handleChange('password')}
        />
        <Button type="submit">Login</Button>
      </LoginFormContainer>
    </LoginContainer>
  )
}
