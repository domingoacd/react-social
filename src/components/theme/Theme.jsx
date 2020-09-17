import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors : {
    main: '#24253F',
    gray: '#C4C4C4',
    textPrimary: '#fff',
    textSecondary: '#929292'
  }
};
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}> { children } </ThemeProvider>
}

export default Theme;