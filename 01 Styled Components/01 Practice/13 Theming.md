## Theming

We can use theme with styled components. When we inject a theme using [theme provider](https://styled-components.com/docs/api#themeprovider) to a styled component, it will be available to all our styled components.

Let's define a theme,

```js
const theme = {
  colors: {
    primary: 'green',
    danger: 'red'
  }
};
```

Using theme provider, now we will inject the theme in the `index.js` as,

```jsx
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
```

Now we can make use of the themes in the `App` component as followings,

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.primary}
`;

const App = () => <StyledDiv>Color From Theme</StyledDiv>;

export default App;
```

In browser, we should see text of green color, that is coming from the theme.

