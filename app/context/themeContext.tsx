import { createContext, useState, useContext, useEffect } from 'react';
import { Theme, ThemeContextType, ThemeProviderProps } from '../types';
import Cookies from "js-cookie"



// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | null>(null);

// Hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = Cookies.get("theme") as Theme | undefined;
    const initialTheme = storedTheme || 'light';
    
      // Extend the expiration every time the user visits
      Cookies.set("theme", initialTheme, { expires: 365 });
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    Cookies.set("theme", newTheme, { expires: 365 });
  };

   // Render nothing until the theme is set to avoid flashing on SSR
   if (theme === null) {
    return null; 
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
