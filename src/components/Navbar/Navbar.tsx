import Avatar from '@components/Avatar'
import Dropdown from '@components/Dropdown/Dropdown'
import { NavbarActions, NavbarContainer, NavbarTitle } from './Navbar.styled'
import { navbarUserDropdownItems } from './Navbar.utils'

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle>Dashboard</NavbarTitle>

      <NavbarActions>
        <Dropdown
          items={navbarUserDropdownItems}
          position={{ top: '110%', right: '0px' }}
        >
          <Avatar src="/images/avatar.png" />
        </Dropdown>
      </NavbarActions>
    </NavbarContainer>
  )
}
