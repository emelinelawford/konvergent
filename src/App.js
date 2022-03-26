import React from 'react';
import { ChakraProvider, Box, Grid, Button, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Product from './components/product/product';
import { MyNewTheme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={MyNewTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Product variant="primary" />
          <Button variant="primary">hi</Button>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
