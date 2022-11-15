import React from "react";

import resume from "../Sharunresume.pdf";
import { Button, useToast } from "@chakra-ui/react";

function ButtonForNav() {

  return (
    <div>
       <a  href={resume} target="_blank"   download="Sharun-Resume">
        <Button
         
          
          variant={"outline"}
          id="text1"
          _hover={{ bg: "#0606efce", color: "#fff" }}
        >
          Resume
        </Button>
      </a>
    </div>
  );
}

export default ButtonForNav;
