import { Box, SimpleGrid, Image, Text, Tab, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { all, Backend, FrontEnd } from "./SkillLogos";

export default function Skills() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    setData(all)
  },[])
  const handleClick = (e) => {
    var value = e.target.value;
    if (value === "all") {
      setData(all);
    } else if (value === "frontend") {
      setData(FrontEnd);
    } else if (value === "backend") {
      setData(Backend);
    }
  };

  return (
    <>
      <Box
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        
      >
        <Tabs display={"flex"}
        gap={["0rem","2rem"]}
        alignItems={"center"}
        justifyContent="center" variant='enclosed' fontWeight={700}>
            <Tab  onClick={handleClick} value={'all'} _selected={{ color: 'white', bg: '#3c85fa' }}>
     
          {" "}
     
          ALL
         
          {" "}
      
        </Tab>
        <Tab onClick={handleClick} value={'frontend'} _selected={{ color: 'white', bg: '#3c85fa' }}>
       
          {" "}
          FRONTEND{" "}
        
        </Tab>
        <Tab onClick={handleClick} value={'backend'} _selected={{ color: 'white', bg: '#3c85fa' }}>
        
          {" "}
          BACKEND{" "}
        
        </Tab>
        </Tabs>
      </Box>

      <SimpleGrid
        alignItems={"center"}
        justifyContent="center"
        mt="5%"
        id="all"
        gap="3rem"
        columns={[2, 3, 3, 5]}
      >
        {data.map((e) => (
          <Box
          key={e.id}
            data-aos="zoom-in"
            h="120%"
            borderRadius={"lg"}
            w={["100%","100%","45%"]}
            m="auto"
            p="1rem"
          >
            <Image h="50%" w="100%" src={e.logo} />
            <Text>{e.text}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
