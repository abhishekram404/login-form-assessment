import Input from '@components/Input'
import { InputProps } from '@components/Input/Input'
import { useState } from 'react'
import { PasswordEyeButton } from './PasswordInput.utils'

export interface PasswordInputProps extends Omit<InputProps, 'type'> {}

export default function PasswordInput(props: PasswordInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev)
  }

  const type = isPasswordVisible ? 'text' : 'password'

  return (
    <Input
      {...props}
      type={type}
      rightIcon={
        <PasswordEyeButton
          isPasswordVisible={isPasswordVisible}
          handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        />
      }
    />
  )
}
