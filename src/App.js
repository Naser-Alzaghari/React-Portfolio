import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import SideBar from './components/SideBar';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Highlights from './components/Highlights';
import React, { useState } from "react";


function App() {
  const [isActive, setIsActive] = useState(false);

    
  return (
    <div class="main-container" id="home">
        <main>
        
          <Nav isActive={isActive} setIsActive={setIsActive}/>
          <SideBar isActive={isActive} setIsActive={setIsActive}/>
          <Hero/>
          <AboutMe/>
          <Experiences/>
          <Skills/>
          <Projects/>
          <Testimonials/>
          <Highlights/>
          <Footer/>
        </main>
    </div>
  );
}

export default App;
