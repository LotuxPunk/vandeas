import { Container, Show } from '@chakra-ui/react';
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
