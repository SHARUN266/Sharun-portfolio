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
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import resume from "./Sharunresume.pdf";

import logo from "../Images/photostudio-3-designify.png";

import { NavHashLink as Link } from "react-router-hash-link";

import ButtonForNav from "./DownloadButton/buttonForNav";

const Links = [
  {
    link: "#homeHero",
    text: "HOME",
  },

  {
    link: "#about",
    text: "ABOUT",
  },
  {
    link: "#techstacks",
    text: "techstacks",
  },
  {
    link: "#projects",
    text: "PROJECTS",
  },

  ,
  {
    link: "#statistics",
    text: "STATISTICS",
  },
  {
    link: "#contact",
    text: "CONTACT",
  },
  {
    target: "_blank",
    download: "Sharun",
    link: resume,
    text: <ButtonForNav />,
  },
];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "white")}
        position={"sticky"}
        top={0}
        zIndex={100}
        shadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
        px={8}
      >
        <Popover>
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
                  <Avatar size={"md"} src={logo} />
                </MenuButton>
              </Menu>
            </Flex>

            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={12}
                display={{ base: "none", md: "none", lg: "flex" }}
              >
                {Links.map((link, i) => (
                  <Link
                    id="text"
                    target={link.target}
                    download={link.download}
                    smooth
                    to={link.link}
                    key={link + i}
                  >
                    {link.text}
                  </Link>
                ))}
              </HStack>
            </HStack>
            <PopoverTrigger>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ lg: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </PopoverTrigger>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ lg: "none" }}>
              <Stack as={"nav"} textTransform={"uppercase"} spacing={4}>
                {Links.map((link) => (
                  <PopoverBody
                    _hover={{ bg: "gray.100", fontWeight: "600" }}
                    p="10px"
                    transition={"500ms"}
                    onClick={isOpen ? onClose : onOpen}
                  >
                    <Link
                      key={link.id}
                      target={link.target}
                      download={link.download}
                      smooth
                      to={link.link}
                    >
                      {link.text}
                    </Link>
                  </PopoverBody>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Popover>
      </Box>
    </>
  );
}
