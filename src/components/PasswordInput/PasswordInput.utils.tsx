import Button from '@components/Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { RightIconContainer } from './PasswordInput.styled'

export interface PasswordEyeButtonProps {
  isPasswordVisible: boolean
  handleTogglePasswordVisibility: () => void
}

export const PasswordEyeButton = (props: PasswordEyeButtonProps) => {
  const { isPasswordVisible, handleTogglePasswordVisibility } = props

  return (
    <RightIconContainer>
      <Button onClick={handleTogglePasswordVisibility} unstyled>
        <Icon icon={isPasswordVisible ? 'lucide:eye-off' : 'lucide:eye'} />
      </Button>
    </RightIconContainer>
  )
}
