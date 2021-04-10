## Extending Styles

In our project, almost always we use 3rd party UI library, like material-ui, semantic-ui, bootstrap etc. These library already have styled component. We often use theses stock design and sometimes have to tweak a little bit.

For example, let's consider we already have a button that is properly styled. This button can come from some 3rd party library or our custom designed library. Now we will extend this already styled button component.


First assume, we already have a styled button,

```jsx
import styled from 'styled-components';

const ExistingStyledButton = styled.button`
  color: white;
  background-color: green;
`;
```

This `ExistingStyledButton` can be a button comes from the semantic ui or the material ui. In this button, we want to add the border in the button and we will call it `MyButton`.

```jsx
import styled from 'styled-components';

const ExistingStyledButton = styled.button`
  color: white;
  background-color: green;
`;

const MyButton = styled(ExistingStyledButton)`
  border: 1rem solid red;
`;
```

Here, the we pass the existing button to the styled component and add the additional css.

Our final code can be as followings,

```jsx
import React from 'react';
import styled from 'styled-components';

const ExistingStyledButton = styled.button`
  color: white;
  background-color: green;
`;

const MyButton = styled(ExistingStyledButton)`
  border: 1rem solid red;
`;

const Button = ({ children }) => <MyButton>{children}</MyButton>

const App = () => <Button>My Over Ride Styled Button</Button>

export default App;
```

In browser, we should see a button with red border.
