import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: Roboto ;
    src: url(../../fonts/roboto/Roboto-Regular.ttf);
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
    background-color: ${props => props.theme.colors.main};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;