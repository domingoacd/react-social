import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors : {
    main: '#24253F'
  }
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}> { children } </ThemeProvider>
}

export default Theme;