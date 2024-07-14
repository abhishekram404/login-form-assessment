import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #ccc;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`

export const NavbarActions = styled.div`
  display: flex;
  gap: 1rem;
`

export const NavbarUserProfile = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const NavbarUserName = styled.span`
  font-weight: 500;
  color: #333;
`
