import React from "react";
import "./button.css";
import resume from "../Sharunresume.pdf"
import { Button } from "@chakra-ui/react";

function ButtonForNav() {
  return (
    <div class="btn">
      <a  href={resume} target="_blank"   download="Sharun">
         
        <Button    class="mybtn" >Resume</Button>
      </a>
    </div>
  );
}

export default ButtonForNav;
