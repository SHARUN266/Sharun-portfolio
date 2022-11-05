import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
import logo from "../Images/RoundeImage.png";
export default function About() {
  return (
    <Box 
    id="about" 
    h={["auto", "auto","auto", "80vh"]} 
    p="1rem" 
    
    alignItems={"center"}
    
    >
      <Heading className="heading-sec__main" mt="5%">
        ABOUT ME
      </Heading>
      <Flex
        w="80%"
        h="60%"
        alignItems={"center"}
        justifyContent={"space-between"}
        m="auto"
        direction={["column", "column", "column", "row"]}
        gap={["4rem", "3rem", "0rem", "0rem"]}
      >
        <Box
          data-aos={"fade-right"}
          mt={["7%", "3%", "3%", "2%"]}
          display={"flex"}
          w="50%"
          h="100%"
        >
          <Image
            w={["100%", "100%", "67%", "67%"]}
            borderRadius={"rounded"}
            src={logo}
            alt="sharun"
          />
        </Box>

        <Box w={["100%", "100%", "100%", "50%"]} textAlign={"justify"}>
          <Box className="about__content-main">
            <Box
              data-aos="fade-down"
              fontWeight={"bold"}
              fontSize={["md", "xl", "2xl"]}
            >
              <Typewriter
                options={{
                  strings: ["Get to know me!"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </Box>
            <Box mt="2%">
              <Box fontSize={["md", "xl", "2xl"]} >
                Hey! It's
              <p className="about__content-details-para" data-aos="zoom-in">
                  A physics graduate and a full-stack web developer with a
                  passion for developing scalable web applications and tools
                  that will drastically improve efficiency and performance.
                  Looking forward to an esteemed organization to contribute and
                  to sharpen my skills as a <strong>MERN developer</strong> .
                </p>
              </Box>
            </Box>
            {/* <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a
            > */}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
