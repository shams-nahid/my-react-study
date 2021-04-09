## Passing Props

Lets consider a scenario, when we can have a re-useable button component. It could be

* Default type with black color text
* Primary type with green color text

In this case we have to pass the props to the styled component and determine the text color according to the props.

First, create a re-usable button component,

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ primary }) => (primary ? 'green' : 'black')};
`;

const Button = ({ primary, children }) => <StyledButton primary={primary}>
  {children}
</StyledButton>
```

Here, in the `StyledButton`, we receive the props primary and rendering the color accordingly.

We can test the button component from parent component by,

```jsx
import React from 'react';
// import Button if it is in different file or folder

const App = () => <>
  <Button primary>Primary Button</Button>
  <Button>Default Button</Button>
</>;
```

In the browser, there should be two button, one primary with green color and another button with default black color.

A complete code should look like the followings,

```jsx
import React from 'react';
import styled from 'styled-components'


const StyledButton = styled.button`
  color: ${({ primary }) => (primary ? 'green' : 'black')};
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