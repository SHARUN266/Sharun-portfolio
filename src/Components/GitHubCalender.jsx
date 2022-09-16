import { background, Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "github-calendar/";
import DonutChart from "react-donut-chart";
var data=[
  {
    number:"1200++",
    title:"Hours",
    subTitle:"of Coding",
    percent:Math.random()*1200
  }
]
export default function GitHubCalender1() {
  GitHubCalendar(".calendar", "SHARUN266");

  // or enable responsive functionality:
  GitHubCalendar(".calendar", "SHARUN266", { responsive: true });

  // Use a proxy
  GitHubCalendar(".calendar", "SHARUN266", {
    proxy(SHARUN266) {
      return fetch(`https://your-proxy.com/github?user=${SHARUN266}`);
    },
  }).then((r) => r.text());

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
          {/* <Box color={'white'} p="1rem"  bgImage={'https://images.unsplash.com/photo-1633976976526-4e3584e91a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} bgRepeat={'no-repeat'} bgSize={'cover'} overflowX={'scroll'} fontWeight={400} fontSize="2rem" className='calendar' id="scroll_bar"></Box> */}
         
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
