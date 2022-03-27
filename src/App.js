import React, { useState } from 'react';
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Switch,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Product from './components/product/product';

import Outlook from './images/icons/outlook.svg';
import OneDrive from './images/icons/onedrive.svg';
import SharePoint from './images/icons/sharepoint.svg';
import { MyNewTheme } from './styles/theme';

const data = [
  {
    name: 'Outlook',
    desc: 'Email & Calendar',
    productValue: { current: '20', target: '30' },
    logo: Outlook,
    color1: '#fed243',
    color2: '#e7b008',
  },
  {
    name: 'OneDrive',
    desc: 'File Storage',
    productValue: { current: '10', target: '35' },
    logo: OneDrive,
    color1: '#c0f03c',
    color2: '#a2d718',
  },
  {
    name: 'SharePoint',
    desc: 'Enterprise Search',
    productValue: { current: '8', target: '15' },
    logo: SharePoint,
    color1: '#fed243',
    color2: '#e7b008',
  },
];

function App() {
  const [value, setValue] = useState('current');

  const handleChange = () =>
    setValue(value === 'target' ? 'current' : 'target');

  return (
    <ChakraProvider theme={MyNewTheme}>
      <VStack height="100vh" justifyContent="center" spacing="75px">
        <HStack>
          {data.map(({ name, desc, productValue, logo, color1, color2 }) => (
            <Product
              value={productValue[value]}
              name={name}
              desc={desc}
              logo={logo}
              color1={color1}
              color2={color2}
            ></Product>
          ))}
        </HStack>

        <FormControl display="flex" alignItems="center" justifyContent="center">
          <FormLabel mx="12px" my="0" textAlign="right" width="200px">
            Current
          </FormLabel>
          <Switch
            colorScheme="cyan"
            size="lg"
            id="email-alerts"
            onChange={handleChange}
            isChecked={value === 'target'}
          />
          <FormLabel mx="12px" my="0" textAlign="left" width="200px">
            Target
          </FormLabel>
        </FormControl>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
