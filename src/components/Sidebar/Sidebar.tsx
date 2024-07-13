import {
  SidebarContainer,
  SidebarHeader,
  SidebarNav,
  SidebarTitle,
} from './Sidebar.styled'
import { SidebarItem } from './Sidebar.utils'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>City Remit</SidebarTitle>
      </SidebarHeader>

      <SidebarNav>
        <SidebarItem to={'/'}>Dashboard</SidebarItem>
        <SidebarItem to={'/transactions'}>Transactions</SidebarItem>
        <SidebarItem to={'/settings'}>Settings</SidebarItem>
      </SidebarNav>
    </SidebarContainer>
  )
}
