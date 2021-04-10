# Styled Components

`Styled Components` is another cool library, we can use to style any HTML elements and reuse anywhere in our react application. There is a whole [motivation](https://styled-components.com/docs/basics#motivation) section, why this library is a really good approach to use CSS in the JSX.

## Comparing With Other CSS-in-JS Library
---

The purpose of `styled-component` is not meant to avoid using any other `UI Framework` like material-ui or semantic-ui. `UI Frameworks` are there to resolve the modular problem like creating a modal or expansion panel. With only CSS we can not crete a modal, we need to make use of the JavaScript. On the other hand, the `styled-components` are there to write CSS in modern Javascript.

A closer competitor of the `styled-component` can be [emotion.js](https://github.com/emotion-js/emotion) or [aphrodite](https://github.com/Khan/aphrodite). 

Both the `styled-component` and the `emotion` has pretty much similar syntax but `styled-component` got a better performance.

On the other hand, the `aphrodite` got faster performance but in this case, we have to write CSS in the JSS format. This could be a trade-off of using the `styled-component` over the `aphrodite`.

## Couple of Advantages
---

* By default, the styled components css styles is scoped to the local css class. Although we can override the limitations by using the [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle).
* Increase code readability by providing scripted names. Instead of using `HTML DOM`, in JSX we can explicitly named the component.
* It reduce the amount of code loaded in each page. If we use a button with styled component and that button is not loaded in a page, these CSS related to the button will not be loaded.
* Since the `styled-components` provide the unique names for each class, it ensures, the class name does not conflict with the global CSS or other library.
* My most favorite feature is, we can use our JavaScript skills to dynamically do the property binding in the CSS.
* Like other library, it also provide the theming support.

## Implementations
---

Let's actually implement these and seeing the advantages in firsthand instead of reading some words.

### Project Setup
---

Create a react app using [cra](https://reactjs.org/docs/create-a-new-react-app.html),

```bash
npx create-react-app styled-components
```

A react project will be created with named `styled-components`.

Now delete every files and folders in the `src` directory and create two files, named `index.js` and `App.js`;

We will do our experiments in the `App.js` file. Our initial `App.js` file and `index.js` file will be following,

**index.js**

```js
import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

const root = document.getElementById('root');

ReactDom.render(<App />, root);
```

**App.js**

```js
import React from 'react';

const App = () => <div>Yo!!</div>
export default App;
```

### Module Installation

---

Now install the `styled-components` from [npm](https://www.npmjs.com/package/styled-components) registry,

```js
yarn add styled-components
```

### Your First Styled Component

--- 

Since we already installed the `styled-components` module in the project, lets import it in the `App.js`.

After importing, the `App.js` file will be,

```js
import React from 'react';
import styled from 'styled-components';

const App = () => <div>Yo!!</div>
export default App;
```

First we crete a styled title component,

```js
const Title = styled.h1`
  color: red;
  font-size: 5rem;
`;
```

We can use this `Title` styled component in the `App.js` like,

```jsx
const App = () => <Title>Yo!!<Title/>;
```

We can notice the style changes in the browser.

Let's create another section styled component and use it as wrapper of `Title` component.

Our `Section` component can be,

```jsx
const Section = styled.section`
  border: 2rem solid green;
`;
```

We can use this `Section` styled component as following,

```jsx
const App = () => <Section><Title>YO!!</Title></Section>;
```

Our final code with `Title` and `Section` styled component should look like the following,

```jsx
import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 5rem;
`;

const Section = styled.section`
  border: 2rem solid green;
`;

const App = () => <Section><Title>YO!!</Title></Section>;

export default App;
```

### Passing Props
---
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

### Nested CSS Implementation
---
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

### Extending Styles
---
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


### Reuseable Styled Components
---
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

### Hover Effects
---
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

### Using Class
---
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

### Key Frames For Animations
---
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

### Animations Effect
---
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

### Passing Attributes
---
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

### Global Styles
---
To provide global styles we can make use of [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle).

Here, we first create a global styles and inject the styles to the `index.js` file in the react app.

Let's create a global styles,

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    border: 1rem solid red;
  }
`;
```

Although we can inject the styles any place, `index.js` is the ideal place to inject the global styles. We should also consider placing the global styles file in the theming directory.

Now we should inject the `GlobalStyle` in the `index.js`,

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
  html {
    border: 1rem solid red;
  }
`;

const root = document.getElementById('root');

ReactDom.render(<>
  <GlobalStyle />
  <App />
</>, root);
```

With this setup, if we go to browser and reload the application, we should see the red border.

### Theming
---
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

### Some Best Practices

---

- For nested css styles, should use `css` helper, provided by `styled-components` library
- End of the day, these are styled component, we should use define them outside of the component and name should start with Upper case letter.
- Theming and global CSS should go to a directory that provides the theming support.

## Conclusion

Hope this will give a brief idea how the styled component can install and use in the react application.