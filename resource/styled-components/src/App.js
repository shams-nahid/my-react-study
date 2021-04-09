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