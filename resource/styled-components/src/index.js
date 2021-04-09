import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

const theme = {
  colors: {
    primary: 'green',
    danger: 'red'
  }
};

const root = document.getElementById('root');

ReactDom.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, root);