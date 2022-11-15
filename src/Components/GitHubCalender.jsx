import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHub from "../Images/imgGitHub.webp";
import GitHubCalendar from 'react-github-calendar';
  const data=[{count:"1200++",text:"hours of coding"},{count:"1000++",text:"hours of DSA"},{count:"10+",text:"Projects"}]

export default function GitHubCalender1() {
  return (
    <Box id="statistics" p="2rem 0rem" h="auto">
      <Heading className="heading-sec__main" mt="5%">
        {" "}
        Statistics{" "}
      </Heading>

      <Flex
        Flex
        w={["100%", "100%", "80%"]}
        m="auto"
        mt="7%"
        gap={'2rem'}
        alignItems="center"
        justifyContent={"space-between"}
        direction={["column", "column","column", "row"]}
      >
        {
          data.map((elem)=>(
            <Box key={elem.id} className="donut instalment1" data-aos="zoom-in-down">
          <div class="donut-default"></div>
          <div class="donut-line"></div>
          <div class="donut-text">
            <span> <strong>{elem.count}</strong>{elem.text}</span>
          </div>
          <div class="donut-case"></div>
        </Box>

          ))
        }
        
      </Flex>

      <Flex
        w={["100%", "100%", "90%"]}
        m="auto"
        mt="7%"
        alignItems="center"
        justifyContent={"space-between"}
        direction={"column"}
      >
        <Flex
          w={["100%", "100%", "90%"]}
          h="30vh"
         
          m="auto"
          mt="7%"
          alignItems="center"
          justifyContent={"space-between"}
          direction={["column", "column", "row"]}
        >
          <a style={{height:"100%"}} href="https://github.com/SHARUN266">
            {" "}
            <Image data-aos="zoom-in" h="100%" src="http://github-readme-streak-stats.herokuapp.com?user=sharun266&theme=neon-dark" />{" "}
          </a>
          

       
          <a style={{height:"100%"}} href="https://github.com/SHARUN266">
            {" "}
            <Image
              data-aos="zoom-in"
              h="100%"
              src="https://github-readme-stats.vercel.app/api?username=SHARUN266&theme=radical&show_icons=true&hide=&count_private=true&hide_border=true&show_icons=true"
            />{" "}
          </a>
        </Flex>

        {/* https://github-readme-stats.vercel.app/api/top-langs/?username=sharun266&theme=radical */}
        {/* <Box data-aos="zoom-in" w={["100%", "100%", "90%"]} m="auto" display={"flex"} alignItems="center"  justifyContent="space-between" mt="5%">
          <a href="https://github.com/SHARUN266">
            <Image  h="10rem" src={GitHub} alt="sharun266's GitHub stats" />
          </a>
        <p align="center">
            <a  href="https://github.com/SHARUN266">
              <img
               data-aos="zoom-in"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sharun266&theme=radical"
                alt="sharun266's GitHub stats"
              />
            </a>
          </p>
        </Box> */}
        <Heading className="heading-sec__main" mt="5%">
        {" "}
        GitHub Contributions{" "}
      </Heading>
       
        <Box data-aos="zoom-in" display={'flex'}  alignItems='center' justifyContent={'center'} w={["100%", "100%", "100%"]} m="auto" mt="2%">
        <GitHubCalendar  blockSize={18} blockMargin={5}   style={{width:"100%"}} 
     username="sharun266"  />
        </Box>
      </Flex>
    </Box>
  );
}
