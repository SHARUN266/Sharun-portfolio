import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import HomeHero from './HomeHer0'
import TechStack from './TechStack'
export default function Router() {
  return (
    <div>
        <HomeHero/>
      <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path='/techStack' element={<TechStack/>}/>

      </Routes>

    </div>
  )
}
