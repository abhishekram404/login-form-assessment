import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  height: 100%;
  padding: 1.5rem;
  border-right: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SidebarHeader = styled.div`
  padding-left: 0.7rem;
`

export const SidebarTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
`

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SidebarNavItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #9d9d9d;

  &:hover {
    background-color: #f3f3f3;
  }
  &.active {
    background-color: #007bff;
    color: #ffffff;

    &:hover {
      background-color: #0056b3;
    }
  }
`
