import { ReactNode } from "react";
// theme type
export type Theme = "light" | "dark" ;
export type Message = {message: string}
export type CardProp = {
  text:string;
  href: string
}
  // ThemeProvider props
export interface ThemeProviderProps {
  children: ReactNode;
}

// Define the shape of the theme context
export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void;
}

export interface SignupFormData {
  email: string
  password: string
  username: string
  error: string
}

export  interface SigninFormData {    
  email: string
  password: string
  error: string}

  export interface UrlFormData{
      origUrl: string,
      shortenedUrl: string[],
      isRes: boolean,
      error: string;
      
  }

  export interface QRcodeFormData{
    origUrl: string,
    qrCode: string[],
    isRes: boolean,
    error: string;
    
}

  export interface CustomUrlFormData{
    origUrl: string,
    customDomain?: string,
    customSlug?: string,
    shortenedUrl: string[],
    isRes: boolean,
    error: string;
    
}

  export type InputProps = {
    name: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    type?: string
    className?: string
    label: string
   }