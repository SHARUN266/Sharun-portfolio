import { Box, Button, ButtonProps, Flex, useColorModeValue,Image } from '@chakra-ui/react';
import { useState } from 'react';

import {GrDocumentDownload} from "react-icons/gr"

export default function ClickMe() {


  return (
    <Flex
     mt={["3%","4%"]}
     
      >
      <Button
      
        px={8}
        p={["0rem 2rem","0rem 3rem"]}
        bg={'#fff'}
        color={'black'}
      fontWeight={600}
        rounded={'md'}
        id="button"
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'lg',
        }}
        
       >
        <a href="./Sharunresume.pdf" download>Resume  </a><GrDocumentDownload   style={{marginLeft:"5px"}}  />  
        
      </Button>
     
    </Flex>
  );
}