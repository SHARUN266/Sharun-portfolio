import { Box, Heading, Flex, Image } from "@chakra-ui/react";
import React from "react";

import Typewriter from "typewriter-effect";
import ClickMe from "./Button";
import logo from "../Images/gif2.gif";

export default function HomeHero() {
  return (
    <Box
    
      data-aos="zoom-in"
      id="homeHero"
      p="2rem"
      h={["auto", "auto","auto", "95vh"]}
      display={"flex"}
      alignItems="center"
    >
      <Flex
        className="headingPrimary"
        fontSize={["2rem", "4rem"]}
        w="90%"
        m="auto"
        align={"center"}
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        <Box   data-aos="fade-right"
          data-aos-duration="3000" p="2rem" textAlign={"justify"}  >
          <Box
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            mt="1"
            fontWeight="700"
            as="h1"
            fontSize={["2xl", "4xl","4xl", "6xl"]}
            letterSpacing={2}
            
          >
            Hi,My name is
          </Box>

          <Heading
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            textShadow={"-2px -2px 11px rgba(163, 156, 150, 0.83);"}
            fontWeight="extrabold"
            fontFamily={" Roboto Mono,monospace;"}
            fontSize={["4xl", "6xl","6xl", "8xl"]}
          >
            sharun
          </Heading>

          <Box fontSize={["sm","sm","xl","2xl"]} letterSpacing={3}>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "MERN stack developer"],
                autoStart: true,
                smooth:true,
                loop: true,
              }}
            />
          </Box>
         <ClickMe/>
        </Box>
        <Box
          data-aos="fade-right"
          data-aos-duration="3000"
          mt="5%"
         
          w={["90%", "90%", "40%"]}
        >
          <Image
            borderRadius={"lg"}
            h="100%"
            w="100%"
            src={logo}
            alt="my-hero"
          />
        </Box>
      </Flex>
    </Box>
  );
}
