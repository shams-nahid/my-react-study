## Key Frames For Animations

To create animations, the `styled-components` provide a helper method [keyframes](https://styled-components.com/docs/api#keyframes).

Let's create a `fade-in` animations using the `keyframes`,

```jsx
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
```

Traditionally, we should put the `fadeIn` animation functionalities in a reusable directory.

We can use this `fadeIn` animation in a div as followings,

```jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const AnimatedDiv = styled.div`
  animation: 2s ${fadeIn} ease-in;
`;

const App = () => <AnimatedDiv>Welcome to Fade in Animation</AnimatedDiv>

export default App;
```

In browser, if we reload the page, we should notice the fade in animations.