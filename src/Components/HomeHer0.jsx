import { Box, Heading, Flex, Button,Image } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import ClickMe from "./Button";
import logo from "./gif2.gif"

export default function HomeHero() {
  return (
    <Box id="homeHero" display={"flex"} alignItems="center">
      <Flex
        className="headingPrimary"
        fontSize={["2rem", "4rem"]}
        w="90%"
        m="auto"
        justifyContent={'space-between'}
        direction={["row", "columns"]}
      >
        <Box p="2rem" textAlign={"justify"}>
          <Box data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" mt="1" fontWeight="700" as="h1">
            Hi, My name is
          </Box>

          <Heading
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
           textShadow={"-2px -2px 11px rgba(163, 156, 150, 0.83);"}
            fontWeight="extrabold"
            fontFamily={" Roboto Mono,monospace;"}
            fontSize={["4xl", "6xl", "8xl"]}
          >
            sharun
          </Heading>

          <Box fontSize={["1rem", "2rem"]} >
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "MERN stack developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <ClickMe/>
        </Box>
        <Box mt="5%" w="40%">
        <Image h="80%" w="100%" src={logo} alt="my-hero"/>
      </Box>
      </Flex>
    </Box>
  );
}
