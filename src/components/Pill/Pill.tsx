import { ReactNode } from 'react'
import { PillWrapper } from './Pill.styled'

export type PillProps = {
  children: ReactNode
  backgroundColor?: string
  color?: string
  hoverColor?: string
  onClick?: () => void
}

export default function Pill(props: PillProps) {
  const {
    children,
    backgroundColor = '#ECF3FE',
    color = '#1B2D4F',
    hoverColor,
    onClick,
  } = props

  return (
    <PillWrapper
      $backgroundColor={backgroundColor}
      $color={color}
      $hoverColor={hoverColor}
      onClick={onClick}
    >
      {children}
    </PillWrapper>
  )
}
