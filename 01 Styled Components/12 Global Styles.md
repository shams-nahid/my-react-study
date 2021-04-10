## Global Styles

To provide global styles we can make use of [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle).

Here, we first create a global styles and inject the styles to the `index.js` file in the react app.

Let's create a global styles,

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    border: 1rem solid red;
  }
`;
```

Although we can inject the styles any place, `index.js` is the ideal place to inject the global styles. We should also consider placing the global styles file in the theming directory.

Now we should inject the `GlobalStyle` in the `index.js`,

```jsx
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
```

With this setup, if we go to browser and reload the application, we should see the red border.