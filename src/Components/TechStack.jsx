import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

import Skills from "./Skills";

export default function TechStack() {
  return (
    <Box id="techstacks" p="2rem" h={["auto", "auto", "100vh"]}>
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
        <Box w="100%" m="auto">
          <Skills />
        </Box>
      </Flex>
    </Box>
  );
}
