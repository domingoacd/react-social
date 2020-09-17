import React from 'react';
import MainContainer from './containers/MainContainer';
import Theme from './theme/Theme';
import GlobalStyles from './theme/GlobalStyles';
import styled from 'styled-components';

const App = () => {
  return(
    <Theme>
      <GlobalStyles>
        <MainContainer>

        </MainContainer>
      </GlobalStyles>
    </Theme>
  );
}

export default App;