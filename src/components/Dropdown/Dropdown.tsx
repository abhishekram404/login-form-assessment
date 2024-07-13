import Button from '@components/Button'
import useOutsideClick from '@hooks/useOutsideClick'
import { ReactNode, useRef, useState } from 'react'
import {
  DropdownContainer,
  DropdownContent,
  DropdownItem,
} from './Dropdown.styled'

export interface DropdownProps {
  children: ReactNode
}

export default function Dropdown(props: DropdownProps) {
  const { children } = props
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
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      )}
    </DropdownContainer>
  )
}
