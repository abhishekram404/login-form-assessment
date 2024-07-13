import Button from '@components/Button'
import Input from '@components/Input'
import PasswordInput from '@components/PasswordInput/PasswordInput'
import {
  FormHeader,
  FormSubtitle,
  FormTitle,
  LoginContainer,
  LoginFormContainer,
} from './Login.styled'

export default function Login() {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <FormHeader>
          <FormTitle>Login</FormTitle>
          <FormSubtitle>Hi, welcome back 👋</FormSubtitle>
        </FormHeader>
        <Input type="email" label="Email" placeholder="abc@xyz.com" />
        <PasswordInput label="Password" placeholder="Hello@123" />
        <Button>Login</Button>
      </LoginFormContainer>
    </LoginContainer>
  )
}
