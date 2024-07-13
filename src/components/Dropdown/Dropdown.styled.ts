import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownTarget = styled.button`
  cursor: pointer;
`

export const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-width: 160px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const DropdownItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #f9f9f9;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }
`
