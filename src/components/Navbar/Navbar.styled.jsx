import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`
export const LogoContainer = styled.img`
  display: flex;
  padding: 10px;
  margin: 5px;
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0;
  }
`
export const NavLinkContainer = styled.div`
  display: flex;
  list-style: none;
 
`
export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 25px;
  @media (max-width: 768px) {
    margin-top:0;
  }

  &:hover {
    font-weight: 600;
    color:#0396ff;
    }
`
;