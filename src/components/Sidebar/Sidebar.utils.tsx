import { NavLinkProps } from 'react-router-dom'
import { SidebarNavItem } from './Sidebar.styled'

export const SidebarItem = (props: NavLinkProps) => {
  return (
    <SidebarNavItem
      {...props}
      className={({ isActive }) => (isActive ? 'active' : '')}
    />
  )
}
