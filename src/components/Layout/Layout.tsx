import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { GridSection, LayoutContainer } from './Layout.styled'

export default function Layout() {
  return (
    <LayoutContainer>
      <GridSection $area="header" className="header">
        <Navbar />
      </GridSection>
      <GridSection $area="sidebar" className="sidebar">
        <Sidebar />
      </GridSection>
      <GridSection $area="main" className="main">
        <Outlet />
      </GridSection>
    </LayoutContainer>
  )
}
