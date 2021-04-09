import React from 'react';
import styled from 'styled-components';
// import { css } from 'styled-components';
// import { keyframes } from 'styled-components';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.primary}
`;

const App = () => <StyledDiv>Color From Theme</StyledDiv>;

// -------------------------------------------------------------------------------
// 11 OVERRIDING ATTRIBUTES
// const StyledLink = styled.a.attrs(() => ({ target: '_blank' }))`
//   color: green;
// `;

// const App = () => <StyledLink href='https://www.google.com'>Google</StyledLink>

// -------------------------------------------------------------------------------
// 10 ANIMATIONS ON EFFECT
// const FadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// `;

// const StyledDiv = styled.div`
//   background-color: green;
// `;

// const WrapperComponent = styled.div`
//   &:hover ${StyledDiv} {
//     background-color: red;
//     animation: 2s ${FadeIn} ease-in;
//   }
// `;

// const App = () => <WrapperComponent>
//   <StyledDiv>Hello</StyledDiv>
// </WrapperComponent>

// -------------------------------------------------------------------------------
// 09 KEYFRAMES FOR ANIMATIONS
// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// `;

// const AnimatedDiv = styled.div`
//   animation: 2s ${fadeIn} ease-in;
// `;

// const App = () => <AnimatedDiv>Welcome to Fade in Animation</AnimatedDiv>

// -------------------------------------------------------------------------------
// 08 USING CLASS
// const StyledButton = styled.button`
//   & .greenText {
//     color: green;
//   }
// `;

// const Button = ({children}) => <StyledButton>
//   {children}
//   <p className="greenText">Green Text Class Implementation</p>
// </StyledButton>;

// const App = () => <Button>Hello</Button>;

// -------------------------------------------------------------------------------
// 07 HOVER EFFECTS
// const StyledButton = styled.button`
//   &:hover {
//     background-color: green;
//   }
// `;

// const Button = ({children}) => <StyledButton>{children}</StyledButton>

// const App = () => <Button>Get Hover Effect</Button>;

// -------------------------------------------------------------------------------
// 06 REUSABLE STYLED COMPONENTS
// const Wrapper = styled.span`
//   border: 1rem solid red;
// `;

// const App = () => <>
//   <Wrapper>
//     Hello
//   </Wrapper>
//   <Wrapper>
//     <button>Click Me</button>
//   </Wrapper>
// </>

// -------------------------------------------------------------------------------
// 05 EXTENDING STYLES
// const ExistingStyledButton = styled.button`
//   color: white;
//   background-color: green;
// `;

// const MyButton = styled(ExistingStyledButton)`
//   border: 1rem solid red;
// `;

// const Button = ({children}) => <MyButton>{children}</MyButton>

// const App = () => <Button>My Over Ride Styled Button</Button>

// -------------------------------------------------------------------------------
// 04 NESTED CSS IMPLEMENTATION
// const StyledButton = styled.button`
//   ${({ primary }) => (primary && css`
//     color: white;
//     background-color: green;
//   `)};
// `;

// const Button = ({primary, children}) => <StyledButton primary={primary}>
//   {children}
// </StyledButton>

// const App = () => <>
//   <Button primary>Primary Button</Button>
//   <Button>Default Button</Button>
// </>;

// -------------------------------------------------------------------------------
// 03 PASSING PROPS
// const StyledButton = styled.button`
//   color: ${({ primary }) => (primary ? 'green' : 'black')};
// `;

// const Button = ({primary, children}) => <StyledButton primary={primary}>
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