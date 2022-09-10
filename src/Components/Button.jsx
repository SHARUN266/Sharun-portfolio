import {
  Box,
  Button,
  ButtonProps,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

import { GrDocumentDownload } from "react-icons/gr";

export default function ClickMe() {
  return (
    <Flex mt={["3%", "4%"]}>
      <a download={'https://drive.google.com/file/d/1tCBIetBLyCm-PLppRuPq0HEGAcOazhda/view?usp=sharing'} href="https://drive.google.com/file/d/1tCBIetBLyCm-PLppRuPq0HEGAcOazhda/view?usp=sharing">
      <Button
        px={8}
        p={["0rem 2rem", "0rem 3rem"]}
        bg={"#fff"}
        color={"black"}
        fontWeight={600}
        rounded={"md"}
        id="button"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "lg",
        }}
      >
        
          Resume{" "}
        
        <GrDocumentDownload style={{ marginLeft: "5px" }} />
      </Button></a>
    </Flex>
  );
}
