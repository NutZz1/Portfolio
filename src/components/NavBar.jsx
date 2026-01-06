import React from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom'; 
import resumePdf from './resume.pdf'; 

const theme = {
  bg: "#FAFAFA",           
  primary: "#171717",      
  secondary: "#737373",    
  textMain: "#171717",     
  textSub: "#525252",      
  glass: "rgba(255, 255, 255, 0.9)", 
  glassBorder: "#E5E5E5", 
} 

const Container = styled.nav`
  height: 70px;
  width: 95vw;
  max-width: 1400px;
  margin-top: 20px;
  
  background: ${theme.glass};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${theme.glassBorder};
  
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  
  position: sticky;
  top: 20px;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 60px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  cursor: pointer;
  text-decoration: none;
  
  background: linear-gradient(135deg, ${theme.textMain} 0%, ${theme.primary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.$isActive ? theme.primary : theme.textSub};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.primary};
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${theme.primary};
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  background: ${theme.textMain};
  color: white;
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(79, 70, 229, 0.3);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.8rem;
    
    span {
      display: none; 
    }
    
    svg {
      display: block; 
    }
  }
`;


const NavBar = () => {
  const location = useLocation(); 

  return (
    <Container>
      <Logo to="/">Sreepathy Joshy</Logo>
      
      <NavLinks>
        <LinkItem to="/" $isActive={location.pathname === "/"}>
          Home
        </LinkItem>
        <LinkItem to="/about" $isActive={location.pathname === "/about"}>
          About
        </LinkItem>
        <LinkItem to="/projects" $isActive={location.pathname === "/projects"}>
          Projects
        </LinkItem>
        <LinkItem to="/contact" $isActive={location.pathname === "/contact"}>
          Contact
        </LinkItem>
      </NavLinks>

      <ResumeButton href={resumePdf} download="Sreepathy_Joshy_Resume.pdf">
        <span>Download Resume</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </ResumeButton>
    </Container>
  );
};

export default NavBar;