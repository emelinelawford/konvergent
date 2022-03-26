import { extendTheme } from '@chakra-ui/react';
import { buttonStyles as Button } from './components/buttonStyles';

export const MyNewTheme = extendTheme({
  colors: {
    primary: '#2F77E4',
    secondary: '#C46FD9',
    highlight: '#FF71B1',
    warning: '#FFC563',
    danger: '#FF9282',
  },
  components: {
    Button,
  },
});
