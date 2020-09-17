import React from 'react';
import MainContainer from './containers/MainContainer';
import Theme from './theme/Theme';
import GlobalStyles from './theme/GlobalStyles';
import Home from './home/Home';
import styled from 'styled-components';

const App = () => {
  return(
    <Theme>
      <GlobalStyles />
        <MainContainer>
          <Home />
        </MainContainer>
    </Theme>
  );
}

export default App;