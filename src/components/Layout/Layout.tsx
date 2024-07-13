import { Outlet } from 'react-router-dom'
import { GridSection, LayoutContainer } from './Layout.styled'

export default function Layout() {
  return (
    <LayoutContainer>
      <GridSection $area="header">Navbar</GridSection>
      <GridSection $area="sidebar">Sidebar</GridSection>
      <GridSection $area="main">
        <Outlet />
      </GridSection>
    </LayoutContainer>
  )
}
