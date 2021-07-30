import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import GlobalStyle from './theme/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/mainTheme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
