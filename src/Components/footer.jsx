import {
  Avatar,
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { GrContact, GrGithub, GrMail } from "react-icons/gr";
import { PhoneIcon } from "@chakra-ui/icons";

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
        <Stack textTransform={"uppercase"} direction={"row"} spacing={6}>
          Links
          {Links.map((elem) => (
            <Link smooth to={elem.link}>
              {elem.text}
            </Link>
          ))}
        </Stack>
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
            <GrGithub />
            <FaLinkedin />

            <PhoneIcon />
            <GrMail />

            <FaInstagram />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
