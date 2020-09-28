import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav.jsx';

const MainContainer = styled.div`
  width: 95vw;
  max-width: 50rem;
  min-height: calc(100vh + ${props => props.theme.layout.navHeight} + 1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const MainContainerComponent = ({children}) => {
  return(
    <MainContainer>
      {children}
      {/* <Nav /> */}
    </MainContainer>
  );
}
export default MainContainerComponent;