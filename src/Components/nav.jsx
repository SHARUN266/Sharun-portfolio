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

const Links = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "white")} shadow={'md'} px={8}>
        <Flex h="5rem" alignItems={"center"} justifyContent={"space-between"}>
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
                    "/public/photostudio-3-designify.png"
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
              {Links.map((link) => (
                <Box id="text" key={link}>{link}</Box>
              ))}
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
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box key={link}>{link}</Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}
