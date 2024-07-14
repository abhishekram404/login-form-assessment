import Button from '@components/Button'
import Input from '@components/Input'
import PasswordInput from '@components/PasswordInput/PasswordInput'
import { ChangeEvent, useState } from 'react'
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

  const handleChange = (type: keyof typeof creds) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setCreds(prev => ({
        ...prev,
        [type]: e.target.value,
      }))
    }
  }

  return (
    <LoginContainer>
      <LoginFormContainer>
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
        <Button>Login</Button>
      </LoginFormContainer>
    </LoginContainer>
  )
}
