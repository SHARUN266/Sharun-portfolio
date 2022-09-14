import { Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { MySkills } from "./logos";

import Logo from "./Logo2";

export default function TechStack() {
  return (
    <Box id="bg2"  p="2rem 0rem" h={["auto","auto","100vh"]}  >
      <Heading className="heading-sec__main" mt="5%">
        {" "}
        tech stacks{" "}
      </Heading>
      <Flex
        w={["100%", "100%", "90%"]}
        m="auto"
        mt="7%"
        alignItems="center"
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        <Box  data-aos="fade-right" fontSize={"2xl"} textAlign={"justify"} w={["90%","90%","45%"]}>
          {MySkills.details.map((elem) => (
            <Text mt="5%" fontWeight={400}>
              ⚡{elem}
            </Text>
          ))}
        </Box>
        <Box w="50%">
          <Heading data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">{MySkills.title}</Heading>
          <SimpleGrid
            alignItems={"center"}
            mt="10%"
           
            columns={[2, 2, 3, 4]}
            gap="3rem"
          >
            {MySkills.logos.map((elem) => (
              <Box data-aos="fade-left" cursor="pointer" fontSize={['2xl','5xl']}>
               <Logo
               key={elem.id}
               name={elem.name}
               className={elem.iconifyClassName}
               />
             
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
