import Avatar from '@components/Avatar'
import Dropdown from '@components/Dropdown/Dropdown'
import useAuth from '@hooks/useAuth'
import { NavbarActions, NavbarContainer, NavbarTitle } from './Navbar.styled'
import { getNavbarUserDropdownItems } from './Navbar.utils'

export default function Navbar() {
  const { logout } = useAuth()

  const options = getNavbarUserDropdownItems({
    onLogoutClick: logout,
  })
  return (
    <NavbarContainer>
      <NavbarTitle>Dashboard</NavbarTitle>

      <NavbarActions>
        <Dropdown items={options} position={{ top: '110%', right: '0px' }}>
          <Avatar src="/images/avatar.png" />
        </Dropdown>
      </NavbarActions>
    </NavbarContainer>
  )
}
