import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import HomeHero from "./HomeHer0";
import TechStack from "./TechStack";
import Projects from './Projects';
import GitHubCalender1 from "./GitHubCalender";
export default function Router() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomeHero />} />{" "}
        <Route path="#about" element={<About />} />
        <Route path="#techStack" element={<TechStack />} />
        <Route path="#projects" element={<Projects/>}/>
        <Route path="#statistics" element={<GitHubCalender1/>}/> */}
      </Routes>
    </div>
  );
}
