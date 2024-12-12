import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import FamiliarWith from './components/FamiliarWith';
import Footer from './components/Footer';
import { Hero } from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import SideBar from './components/SideBar';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials';
import Highlights from './components/Highlights';

function App() {
  return (
    <div class="main-container" id="home">
        <main>
        
          <Nav/>
          <SideBar/>
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
