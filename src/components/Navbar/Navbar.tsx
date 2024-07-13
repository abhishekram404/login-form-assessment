import Avatar from '@components/Avatar'
import { NavbarActions, NavbarContainer, NavbarTitle } from './Navbar.styled'

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle>Dashboard</NavbarTitle>

      <NavbarActions>
        <Avatar src="/images/avatar.png" />
      </NavbarActions>
    </NavbarContainer>
  )
}
