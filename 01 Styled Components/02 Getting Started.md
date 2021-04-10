## Getting Started

### Project Setup
---

Create a react app using CRA,

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

### First Styled Component

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

### Summary
---

The nice things about the styled components is, it provided a scripted names. when we look at the component, we can see this is a `Title` component. We do not dig down to the `div` and then a `h1` tag.


In a nutshell this is what a styled components brief overview. 