import { LoaderStyled } from './Loader.styled'

export type LoaderProps = {
  size?: number
}

export default function Loader(props: LoaderProps) {
  const { size = 25 } = props
  return <LoaderStyled $size={size} />
}
