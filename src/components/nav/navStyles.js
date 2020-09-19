import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: ${props => props.theme.layout.navHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem; 
  background-color: ${props => props.theme.colors.main};
  border-top: 0.5px solid ${props => props.theme.colors.gray};
`;

export const NavImage = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
