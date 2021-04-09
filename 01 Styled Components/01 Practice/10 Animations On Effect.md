## Animations Effect

There could be a requirement to show animations on some css effect. Here we will show the fade  animations in the hover effect.

The `FadeIn` effect,

```jsx
import { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
```

A styled component, and it's wrapper;

```jsx
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: green;
`;

const WrapperComponent = styled.div`
  &:hover ${StyledDiv} {
    background-color: red;
    animation: 2s ${FadeIn} ease-in;
  }
`;
```

Our final codebase should look like the followings,

```jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledDiv = styled.div`
  background-color: green;
`;

const WrapperComponent = styled.div`
  &:hover ${StyledDiv} {
    background-color: red;
    animation: 2s ${FadeIn} ease-in;
  }
`;

const App = () => <WrapperComponent>
  <StyledDiv>Hello</StyledDiv>
</WrapperComponent>

export default App;
```

In browser, we should see the hover effect with animation.