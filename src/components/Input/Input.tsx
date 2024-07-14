import React, { ReactNode } from 'react'
import {
  ErrorContainer,
  InputContainer,
  InputField,
  InputFieldContainer,
  InputLabel,
  LabelContainer,
} from './Input.styled'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelRightSection?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  errorMessage?: string
}

export default function Input(props: InputProps) {
  const {
    label,
    labelRightSection,
    leftIcon,
    rightIcon,
    errorMessage,
    disabled,
    ...rest
  } = props

  return (
    <InputContainer>
      <LabelContainer>
        <InputLabel>{label}</InputLabel>
        {labelRightSection}
      </LabelContainer>
      <InputFieldContainer $disabled={disabled}>
        {leftIcon}
        <InputField type="email" disabled={disabled} {...rest} />
        {rightIcon}
      </InputFieldContainer>
      {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
    </InputContainer>
  )
}
