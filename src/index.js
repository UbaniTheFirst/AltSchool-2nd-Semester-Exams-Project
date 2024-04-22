import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
