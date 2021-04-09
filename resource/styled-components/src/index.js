import React from 'react';
import ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html {
    border: 1rem solid red;
  }
`;

const root = document.getElementById('root');

ReactDom.render(<>
  <GlobalStyle />
  <App />
</>, root);