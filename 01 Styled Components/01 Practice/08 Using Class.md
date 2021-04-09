## Using Class

We can use classes inside the styled component styled component. This class will be scoped inside the styled component.

Let's crate a styled component with a class,

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  & .greenText {
    color: green;
  }
`;
```

We can use this `StyledButton` as followings,

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  & .greenText {
    color: green;
  }
`;

const Button = ({ children }) => <StyledButton>
  {children}
  <p className="greenText">Green Text Class Implementation</p>
</StyledButton>;

const App = () => <Button>Hello</Button>;

export default App;
```

We should see a green color text inside the button.