import Button from '@components/Button'
import useOutsideClick from '@hooks/useOutsideClick'
import { ReactNode, useRef, useState } from 'react'
import {
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from './Dropdown.styled'

export interface DropdownItemType {
  label: string
  icon: ReactNode
  onClick?: () => void
}

type Position = {
  top?: string
  left?: string
  right?: string
  bottom?: string
}

export interface DropdownProps {
  children: ReactNode
  items: DropdownItemType[]
  position?: Position
}

export default function Dropdown(props: DropdownProps) {
  const { children, items, position } = props
  const { top, right, bottom, left } = position || {}
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLUListElement>(null)

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  useOutsideClick(ref, () => {
    setIsOpen(false)
  })

  return (
    <DropdownContainer>
      <Button
        unstyled
        onClick={handleToggle}
        onMouseDown={e => e.stopPropagation()}
      >
        {children}
      </Button>

      {isOpen && (
        <DropdownContent
          ref={ref}
          $top={top}
          $right={right}
          $bottom={bottom}
          $left={left}
        >
          {items?.map(item => (
            <DropdownItem key={item.label} onClick={item.onClick}>
              {item.icon}
              {item.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  )
}
