import React from 'react';


import { Container, TextDirect } from './styles';

const Direct: React.FC = () => {
  return (
      <Container>
          <TextDirect style={{ marginTop: 60 }}>Direct</TextDirect>
          <TextDirect>Direct</TextDirect>
          <TextDirect>Direct</TextDirect>
      </Container>
  ); 
}

export default Direct;