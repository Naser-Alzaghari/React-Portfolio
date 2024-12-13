import { useState, useEffect } from "react";

function useTheme(defaultTheme = "dark") {

    

  const [theme, setTheme] = useState(() => {
    // Check for a saved theme in localStorage, or fall back to the default theme
    return localStorage.getItem("theme") || defaultTheme;
  });

  useEffect(() => {
    // Apply the current theme to the `data-theme` attribute
    document.documentElement.setAttribute("data-theme", theme);

    // Save the selected theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
}

export default useTheme;
