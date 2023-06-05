import React from 'react'
import {
  NavbarContainer,
  NavLinkContainer,
  NavLink,
  LogoContainer
} from './Navbar.styled'
import Logo from '../../assets/brand.png'

export default function Navbar() {
  return (
    <NavbarContainer>
       <NavLink to='/'>
          <LogoContainer src={Logo} alt="brand" />   
       </NavLink>
      <NavLinkContainer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/projects'>Projetos</NavLink>
        <NavLink to='/contact'>Contato</NavLink>
      </NavLinkContainer>
    </NavbarContainer>
  )
}
