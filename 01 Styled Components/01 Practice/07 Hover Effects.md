## Hover Effects

We can adjust css for hover effect. Let's consider a button, on hover, it turns green.

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  &:hover: {
    background-color: green;
  }
`;
```

If we use the `StyledButton` as followings, 

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  &:hover {
    background-color: green;
  }
`;

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

const App = () => <Button>Get Hover Effect</Button>;

export default App;
```

In browser, we should see a button with hover effect.