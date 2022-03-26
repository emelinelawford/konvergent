import React from 'react';
import { Circle, VStack, Image, Tag } from '@chakra-ui/react';
import Outlook from '../../images/icons/outlook.svg';

function Product() {
  return (
    <Circle
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="lightgrey"
      h="250px"
      w="250px"
      spacing="30px"
    >
      <VStack spacing="10px">
        <Image w="80px" src={Outlook} alt="Outlook" marginLeft="-12px"></Image>
        <Tag size="lg" variant="solid" colorScheme="blackAlpha">
          Outlook
        </Tag>
        <Tag size="sm" variant="solid">
          Email & Calendar
        </Tag>
      </VStack>
    </Circle>
  );
}

export default Product;
