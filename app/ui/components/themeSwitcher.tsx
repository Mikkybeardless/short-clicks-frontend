"use client"
import { useTheme } from "@/app/context/themeContext"

const ThemeSwitcher = () => {
  const themeContext = useTheme();
  if (!themeContext) {
    return null; // or handle the null case appropriately
  }
  const { theme, toggleTheme } = themeContext;
  
  console.log(theme)
 
  return (
    <label onClick={toggleTheme} className="grid cursor-pointer place-items-center mx-1 md:mx-4">
    <input
      type="checkbox"
      value="synthwave"    
      className={`toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 
        ${theme === 'dark' ? 'translate-x-3' : 'translate-x-0'} `} />

    { theme === 'light' && <svg
      className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>}
    {theme === 'dark' && <svg
      className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>}
  </label>
  )
}

export default ThemeSwitcher
