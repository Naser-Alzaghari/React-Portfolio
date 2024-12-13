import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Themed_logo from './Themed_logo'


import ThemeToggle from './ThemeToggle';

function Nav({isActive, setIsActive}){

    
    
    const toggleSidebar = () => {
        setIsActive(!isActive);
      };
    return (<header>
        <nav>
            
        
            <a href="#"><Themed_logo/></a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Experiance">Experiance</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#Testimonials">Testimonials</a></li>
                <li><a href="#Highlights">Highlights</a></li>
                <li><ThemeToggle/></li>
            </ul>
            <button className="menu" onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
         </nav>
    </header>);
}

export default Nav;