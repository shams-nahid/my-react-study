## Reuseable Styled Components

We might want to use re-useable styled component. For example, we want to have a certain margin in couple of components. Since after all, `styled-components` are component, we can create a wrapper component and use it where necessary.

Let's create a reusable wrapper component,

```jsx
import styled from 'styled-components';

const Wrapper = styled.span`
  border: 1rem solid red;
`;
```

Now we can use this `Wrapper` in multiple component,

```jsx
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  border: 1rem solid red;
`;

const App = () => <>
  <Wrapper>
    Hello
  </Wrapper>
  <Wrapper>
    <button>Click Me</button>
  </Wrapper>
</>

export default App;
```

In browser, we should see a text and a button with red border, that is coming from the wrapper component.
