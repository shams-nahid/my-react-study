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

// -------------------------------------------------------------------------------
// 03 PASSING PROPS
// const StyledButton = styled.button`
//   color: ${({ primary }) => (primary ? 'green' : 'black')};
// `;

// const Button = ({ primary, children }) => <StyledButton primary={primary}>
//   {children}
// </StyledButton>

// const App = () => <>
//   <Button primary>Primary Button</Button>
//   <Button>Default Button</Button>
// </>;

// -------------------------------------------------------------------------------
// 02 GETTING STARTED
// const Title = styled.h1`
//   color: red;
//   font-size: 5rem;
// `;

// const Section = styled.section`
//   border: 2rem solid green;
// `;

// const App = () => <Section><Title>YO!!</Title></Section>;

export default App;