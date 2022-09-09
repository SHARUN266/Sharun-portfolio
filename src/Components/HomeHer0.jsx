import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import React from "react";
import Typewriter from "typewriter-effect";
export default function HomeHero() {
  return (
    <Box id="homeHero" display={"flex"} alignItems="center">
      <Flex
        className="headingPrimary"
        fontSize={["2rem", "4rem"]}
        w="90%"
        m="auto"
        direction={["row", "column"]}
      >
        <Box p="2rem" textAlign={"justify"}>
          <Box data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" mt="1" fontWeight="700" as="h1">
            Hi, My name is
          </Box>

          <Heading
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
           textShadow={"-2px -2px 11px rgba(163, 156, 150, 0.83);"}
            fontWeight="extrabold"
            fontFamily={" Roboto Mono,monospace;"}
            fontSize={["4xl", "6xl", "8xl"]}
          >
            sharun
          </Heading>

          <Box fontSize={["1rem", "2rem"]}>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "MERN stack developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
