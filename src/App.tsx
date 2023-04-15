import React from 'react';
import logo from './logo.svg';
import { Box, Container, Divider, Heading, Show, VStack } from '@chakra-ui/react';
import Desktop from './Desktop';
import Mobile from './Mobile';

function App() {
  return (
    <Container minW={'full'}>
      <Show above='sm'>
        <Desktop />
      </Show>
      <Show below='sm'>
        <Mobile />
      </Show>
    </Container>
  );
}

export default App;
