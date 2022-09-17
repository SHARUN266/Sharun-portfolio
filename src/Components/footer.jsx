import {
  Avatar,
  Box,

  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, } from "react-icons/fa";

import {  GrGithub, GrMail } from "react-icons/gr";


import sharunAvatar from "../Images/RoundeImage.png";
import { HashLink as Link } from "react-router-hash-link";

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
    link:"#contact",
    text:"CONTACT"
  }
];
export default function SharunFooter() {
  return (
    <Box bg={"#111"} color={"whitesmoke"} p="2rem">
      <Avatar size={"sm"} src={sharunAvatar} />
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <SimpleGrid columns={[1,2,3,7]} textTransform={"uppercase"} direction={"row"} spacing={6}>
          Links
          {Links.map((elem) => (
            <Link smooth to={elem.link}>
              {elem.text}
            </Link>
          ))}
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © Copyright 2022. Made by <strong>Sharun</strong>{" "}
          </Text>
          <Stack direction={"row"} spacing={6} fontSize={"2xl"}>
            <a href="https://github.com/SHARUN266">
              <GrGithub />
            </a>
            <a href="https://www.linkedin.com/in/sharun-3918581b2">
              <FaLinkedin />
            </a>
           
            <a href="mailto:sharunattari266@gmail.com">
              <GrMail />
            </a>
             <a href="https://www.instagram.com/sharun_alvi"> <FaInstagram /></a>
           
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
