import useTheme from "../hooks/useTheme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <a onClick={toggleTheme} style={{backgroundColor:"transparent", border:0 , cursor: "pointer"}}>
      <FontAwesomeIcon icon={faMoon} size="lg"/>
    </a>
  );
}

export default ThemeToggle;