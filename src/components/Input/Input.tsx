import React from 'react'
import { InputContainer, InputField, InputLabel } from './Input.styled'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Input(props: InputProps) {
  const { label, ...rest } = props
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField type="email" {...rest} />
    </InputContainer>
  )
}
