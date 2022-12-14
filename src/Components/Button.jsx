import { Button, Flex } from "@chakra-ui/react";

import { GrDocumentPdf } from "react-icons/gr";
import Resume from "./Config/Sharunresume.pdf";
export default function ClickMe() {
  return (
    <Flex mt={["3%", "4%"]}>
      <a href={Resume} target="_blank" download="Sharun-Resume">
        <Button
          shadow={"lg"}
          rounded={"full"}
          size={"lg"}
          fontWeight={"normal"}
          px={6}
          color={"black"}
          leftIcon={<GrDocumentPdf h={4} w={4} color={"black"} />}
        >
          Resume
        </Button>
      </a>
    </Flex>
  );
}
