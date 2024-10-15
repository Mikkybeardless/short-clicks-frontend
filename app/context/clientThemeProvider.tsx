
"use client"; // Ensures client-side rendering

import { ThemeProvider } from '../context/themeContext';

import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ClientThemeProvider: React.FC<Props> = ({ children }) => {
  const[isMounted, setIsMounted] = useState(false);
useEffect(() => {
 setIsMounted(true);

},[]);

 if(!isMounted) return null;
  

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ClientThemeProvider;
