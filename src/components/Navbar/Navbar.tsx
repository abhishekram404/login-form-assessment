import Avatar from '@components/Avatar'
import Dropdown from '@components/Dropdown/Dropdown'
import useAuth from '@hooks/useAuth'
import { useMatches } from 'react-router-dom'
import {
  NavbarActions,
  NavbarContainer,
  NavbarTitle,
  NavbarUserName,
  NavbarUserProfile,
} from './Navbar.styled'
import { getNavbarUserDropdownItems } from './Navbar.utils'

type PageNameObject = {
  pageName: string
}

export default function Navbar() {
  const { fullName, logout } = useAuth()

  const matches = useMatches()
  const currentRoute = matches[matches.length - 1]
  const pageName = (currentRoute?.data as PageNameObject)?.pageName

  const options = getNavbarUserDropdownItems({
    onLogoutClick: logout,
  })
  return (
    <NavbarContainer>
      <NavbarTitle>{pageName}</NavbarTitle>

      <NavbarActions>
        <Dropdown items={options} position={{ top: '140%', right: '0px' }}>
          <NavbarUserProfile>
            <Avatar src="/images/avatar.png" />
            <NavbarUserName>{fullName}</NavbarUserName>
          </NavbarUserProfile>
        </Dropdown>
      </NavbarActions>
    </NavbarContainer>
  )
}
