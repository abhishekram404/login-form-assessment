import React, { ReactNode } from 'react'
import {
  InputContainer,
  InputField,
  InputLabel,
  LabelContainer,
} from './Input.styled'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelRightSection?: ReactNode
}

export default function Input(props: InputProps) {
  const { label, labelRightSection, ...rest } = props
  return (
    <InputContainer>
      <LabelContainer>
        <InputLabel>{label}</InputLabel>
        {labelRightSection}
      </LabelContainer>
      <InputField type="email" {...rest} />
    </InputContainer>
  )
}
