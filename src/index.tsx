import React from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './app/App';
import { client } from './client';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

import './i18n';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);
