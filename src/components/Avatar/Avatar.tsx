import { AvatarStyled } from './Avatar.styled'

export type AvatarProps = {
  size?: string
  src: string
  alt?: string
}
export default function Avatar(props: AvatarProps) {
  const { size = '32px', src, alt } = props
  return <AvatarStyled src={src} alt={alt} $size={size} />
}
