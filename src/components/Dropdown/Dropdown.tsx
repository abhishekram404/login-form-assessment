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
  onClick: () => void
}

export interface DropdownProps {
  children: ReactNode
  items: DropdownItemType[]
}

export default function Dropdown(props: DropdownProps) {
  const { children, items } = props
  const [isOpen, setIsOpen] = useState(true)
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
        <DropdownContent ref={ref}>
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
