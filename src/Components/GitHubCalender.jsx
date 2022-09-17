import {  Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";


export default function GitHubCalender1() {
 

  return (
    <Box id="statistics" p="2rem 0rem" h="auto">
      <Heading className="heading-sec__main" mt="5%">
        {" "}
        Statistics{" "}
      </Heading>
      <Flex
        w={["100%", "100%", "90%"]}
        m="auto"
        mt="7%"
        alignItems="center"
        justifyContent={"space-between"}
        direction={["column", "column", "row"]}
      >
        <Box w={["100%", "100%", "90%"]} m="auto">
         
         
          <Image
            w="100%"
            
            borderRadius={"xl"}
            alt="${SHARUN266} Activity Graph"
            src="https://activity-graph.herokuapp.com/graph?username=SHARUN266&bg_color=0D1117&color=5BCDEC&line=0062B9&point=FFFFFF&hide_border=false"
          ></Image>
         
        </Box>
      </Flex>
    </Box>
  );
}
