import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
 
  Link
} from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import laptop from "../Images/laptop-png.png";
import project from "../Images/project.png";
import AirGarage from "../Images/AirGarageGif.gif";
import Netflix from "../Images/Netflix.gif"
export default function CallToActionWithVideo() {
  var projectData=[
      {
        img:project,
        title:"Crickbuzz-clone",
        discription:`Cricbuzz is one of the most popular mobile apps for cricket news and
        scores in India. The site was the seventh most searched for site
        in India in 2014.The mobile app has over 100 million downloads
        as of February 2022 and the website is used by more than 50 million
        users worldwide, generating 2.6 billion page views in Jan 2015. `,
        strong:` I
        done this project indivisually during Masai Construck week in unit 4.`,
        techUsed:"React | Chakra UI | Crickbuzz API",
        liveLink:"https://cricbuzzclonebysharun.netlify.app/",
        gitHubLink:"https://github.com/SHARUN266/deserted-spring-5213"
      },
      {
         img:AirGarage,
         title:"Air Garage-clone",
         discription:`AirGarage was founded in 2017 when Chelsea, Scott, and Jonathon stumbled upon the inefficiencies in the parking industry while searching for cheaper university parking.`,
         strong:` I
         done this project indivisually during Masai Construck week`,
         techUsed:"Reach | Chakra UI | Data-aos",
         liveLink:"https://the-great-sharun266-site.netlify.app",
         gitHubLink:"https://github.com/SHARUN266/judicious-loss-7894"
      },
      {
        img:Netflix,
        title:"Netflix-clone",
        discription:`I have done this project individually and build the clone of a very popular Netflix online platfor where user can entertain them self by watching various kind of videos. Have fun after the subscription . I hope you will enjoy the reading….`,
        strong:"I done this project when one-month of web-development journey is completed.",
        techUsed:"HTML | CSS | JavaScript",
        liveLink:"https://sprightly-bombolone-3e7ed9.netlify.app/",
        gitHubLink:"https://github.com/SHARUN266/NetflixClone"
      }


  ]
  return (
    <Container id="projects" maxW={"7xl"} >
       <Heading className="heading-sec__main" mt="15%">
        PROJECTS
      </Heading>
      {
        projectData.map((elem)=>(

   
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        borderBottom="1px solid #dce1e8"
      >
        <Stack textAlign={"justify"}  flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
           data-aos="fade-right"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "30%",
                height: "20%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#78b9ff",
                zIndex: -1,
              }}
             
    
            >
              {elem.title}
            </Text>
            <br />
            {/* <Text as={'span'} color={'red.400'}>
                use everywhere!
              </Text> */}
          </Heading>
          <Text color={"gray.500"}  data-aos="zoom-in">{elem.discription}
            <strong>{elem.strong} </strong>
          </Text>
          <Text>  <Box fontWeight={700}  >  Tech Stacks:-</Box><Box   fontWeight={500} >{elem.techUsed}  </Box>  </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            data-aos="fade-right"
          >
            <Link href={elem.liveLink} target="_blank" rel="noreferrer noopener" >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"#0062b9"}
                bg={"#0062b9"}
                shadow={"lg"}
                _hover={{ bg: "#78b9ff" }}
              >
                Live Demo
              </Button>
            </Link>
            <Link href={elem.gitHubLink} target="_blank" rel="noreferrer noopener">
              <Button
                shadow={"lg"}
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                leftIcon={<GrGithub h={4} w={4} color={"black"} />}
              >
                GitHub
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
           
            zIndex={-1}
            color={"#e8f1ff"}
          />
          <Box data-aos="fade-left">
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              bgImage={elem.img}
              bgRepeat="no-repeat"
              bgSize={"75% 85%"}
              bgPosition={"center "}
              src={laptop}
              zIndex={-10}
            />
          </Box>
        </Flex>
      </Stack>
           ))
          }
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
