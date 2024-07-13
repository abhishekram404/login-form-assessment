import React, { ReactNode } from 'react'
import {
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
}

export default function Input(props: InputProps) {
  const { label, labelRightSection, leftIcon, rightIcon, ...rest } = props
  return (
    <InputContainer>
      <LabelContainer>
        <InputLabel>{label}</InputLabel>
        {labelRightSection}
      </LabelContainer>
      <InputFieldContainer>
        {leftIcon}
        <InputField type="email" {...rest} />
        {rightIcon}
      </InputFieldContainer>
    </InputContainer>
  )
}
