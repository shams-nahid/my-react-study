## Nested CSS Implementation

There is a helper method in styled components named [css](https://styled-components.com/docs/api#css). This can be used to render nested css in the styled component.

Let's consider a scenario where we have a re-usable button component. If the button is primary, the background color will be green and text color will be white.

In this case, we can take two approaches,

**First Approach (Not Ideal)**

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ primary }) => (primary && 'white')};
  background-color: ${({ primary }) => (primary && 'green')};
`;

const Button = ({ primary, children }) => <StyledButton primary={primary}>
  {children}
</StyledButton>
```

You might notice, we have to use two method in the template literals for the same condition. We can make use of the `css` helper method in this case.

**Second Approach (Ideal One)**

```jsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  ${({ primary }) => (primary && css`
    color: white;
    background-color: green;
  `)};
`;

const Button = ({ primary, children }) => <StyledButton primary={primary}>
  {children}
</StyledButton>
```

Our final code should be followings,

```jsx
import React from 'react';
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  ${({ primary }) => (primary && css`
    color: white;
    background-color: green;
  `)};
`;

const Button = ({ primary, children }) => <StyledButton primary={primary}>
  {children}
</StyledButton>

const App = () => <>
  <Button primary>Primary Button</Button>
  <Button>Default Button</Button>
</>;

export default App;
```

In browser, we should see two buttons, one primary button, white text with green background and another should be the default button.