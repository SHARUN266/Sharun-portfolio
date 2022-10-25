import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import resume from "./Sharunresume.pdf"
// import  {logo1}  from "./elements";
import logo from '../Images/photostudio-3-designify.png';

import { NavHashLink as Link } from "react-router-hash-link";
import ClickMe from "./Button";
import ButtonForNav from "./DownloadButton/buttonForNav";

const Links = [
  {
    link:"#homeHero",
    text:"HOME"
  }
  
  , {
    link:"#about",
    text:"ABOUT"
  },
  {
    link:"#techstacks",
    text:"techstacks"
  }, {
    link:"#projects",
    text:"PROJECTS"
  },
  
  , {
    link:"#statistics",
    text:"STATISTICS"
  },
  {
    link:"#contact",
    text:"CONTACT"
  }
  
  
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} position={'sticky'} top={0} zIndex={100} shadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} px={8}>
        <Flex 
        
        h="5rem" 
        
        alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    logo
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>

          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={12}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link,i) => (
                <Link id="text" 
                 
                smooth to={link.link} key={link+i}>{link.text}</Link>
              ))}
             <ButtonForNav/>
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} textTransform={'uppercase'} spacing={4}>
              {Links.map((link) => (
                <Link  
                key={link.id}
                 smooth to={link.link}   >{link.text}</Link>
              ))}
           
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}
