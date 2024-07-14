import Button from '@components/Button'
import Input from '@components/Input'
import PasswordInput from '@components/PasswordInput/PasswordInput'
import useLogin from '@hooks/useLogin'
import {
  FormHeader,
  FormSubtitle,
  FormTitle,
  LoginContainer,
  LoginFormContainer,
} from './Login.styled'

export default function Login() {
  const { creds, errors, handleChange, handleSubmit } = useLogin()

  return (
    <LoginContainer>
      <LoginFormContainer onSubmit={handleSubmit} noValidate>
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
          errorMessage={errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Hello@123"
          value={creds.password}
          onChange={handleChange('password')}
          errorMessage={errors.password}
        />
        <Button type="submit">Login</Button>
      </LoginFormContainer>
    </LoginContainer>
  )
}
