import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
  
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub,   BsLinkedin } from 'react-icons/bs';

  
  export default function contact() {
    return (
      <Container  bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden"  id='contact' >
          <Heading color={'white'} className="heading-sec__main" mt="5%">
        Contact 
      </Heading>
        <Flex align={'center'} justifyContent={'center'}>
          <Box
          data-aos="zoom-in"
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box m="auto">
                    <Heading></Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Get in touch with me!
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="400px"
                          
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-8279934295
                        </Button>
                        <a href="mailto:sharunattari266@gmail.com">
                        <Button
                          size="md"
                          height="48px"
                          width="400px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          Sharunattari266@gmail.com
                        </Button>
                        </a>
                        <Button
                          size="md"
                          height="48px"
                          width="400px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Agra,Uttar pradesh
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      justifyContent={'center'}
                      alignItems="center">
                        <a href="https://www.linkedin.com/in/sharun-3918581b2" target="_blank" rel="noreferrer noopener"> <IconButton
                        aria-label="linkedIn"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      /></a>
                     

                     <a href="https://github.com/SHARUN266" target="_blank" rel="noreferrer noopener">
                     <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                     </a>
                      <a href="mailto:sharunattari266@gmail.com" target="_blank" rel="noreferrer noopener">
                      <IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdOutlineEmail size="28px" />}
                      />
                      </a>
                      
                    </HStack>
                  </Box>
                </WrapItem>
               
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }