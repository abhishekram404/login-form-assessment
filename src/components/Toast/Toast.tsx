import { Icon } from '@iconify/react/dist/iconify.js'
import { ToastStyled } from './Toast.styled'

export type ToastProps = {
  message: string
  type: 'success' | 'error' | 'info'
}

export default function Toast(props: ToastProps) {
  const { message, type } = props
  return (
    <ToastStyled $type={type}>
      <Icon icon={'material-symbols:info'} fontSize={24} />
      {message}
    </ToastStyled>
  )
}
