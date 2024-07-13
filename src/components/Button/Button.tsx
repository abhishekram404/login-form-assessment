import { ButtonStyled, UnstyledButtonElement } from './Button.styled'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  unstyled?: boolean
  fontSize?: string
}

export default function Button(props: ButtonProps) {
  const { children, fontSize, ...rest } = props

  if (props.unstyled) {
    return (
      <UnstyledButtonElement $fontSize={fontSize} {...rest}>
        {children}
      </UnstyledButtonElement>
    )
  }

  return (
    <ButtonStyled $fontSize={fontSize} {...rest}>
      {children}
    </ButtonStyled>
  )
}
