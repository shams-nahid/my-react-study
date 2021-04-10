## Passing Attributes

Using `styled-components` we can override attributes to the styled component using the [attrs](https://styled-components.com/docs/basics#overriding-attrs) method.

By default then anchor tag does not open a URL in a new tab. With an attribute `target` with value `_blank`, it open the URL in a new tab. Let's create a styled component withe the `_blank` as a `target` value,

```jsx
const styled from 'styled-components';

const StyledLink = styled.a.attrs(() => ({ target: '_blank' }))`
  color: green;
`;
```

We can use this `StyledLink` as the followings,

```jsx
import React from 'react';
const styled from 'styled-components';

const StyledLink = styled.a.attrs(() => ({ target: '_blank' }))`
  color: green;
`;

const App = () => <StyledLink href='https://www.google.com'>Google</StyledLink>

export default App;
```

In browser, if we click the link, it should open in the new tab.