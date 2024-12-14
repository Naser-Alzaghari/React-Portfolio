import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle'

function SideBar({isActive, setIsActive}){

    const toggleSidebar = () => {
        setIsActive(!isActive);
      };

    return(<div className={`off-screen ${isActive ? "active" : ""}`}>
        <a className='close' onClick={toggleSidebar} style={{textAlign: 'left'}}><FontAwesomeIcon icon={faX} /></a>
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#About" onClick={toggleSidebar}>About</a>
        <a href="#Experiance" onClick={toggleSidebar}>Experiance</a>
        <a href="#skills" onClick={toggleSidebar}>Skills</a>
        <a href="#projects" onClick={toggleSidebar}>Projects</a>
        <a href="#Testimonials" onClick={toggleSidebar}>Testimonials</a>
        <a href="#Highlights" onClick={toggleSidebar}>Highlights</a>
        <ThemeToggle/>
    </div>);
}


export default SideBar;