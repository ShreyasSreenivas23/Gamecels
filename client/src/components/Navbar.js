// client/src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${props => props.theme.colors.surface};
  box-shadow: ${props => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.surface};
    flex-direction: column;
    padding: 1rem;
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.background};
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          🎮 Gamecels
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/catalog">Games</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/login">Login</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
