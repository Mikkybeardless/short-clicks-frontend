
import type { Metadata } from "next";
import "./globals.css";
import ClientThemeProvider from "./context/clientThemeProvider";



export const metadata: Metadata = {
  title: "Short Clicks",
  description: "A simple URL shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">

      <body
        className={
          `bg-gradient-to-r from-[#088395] via-[#9fafca] to-[#EEEEEE] dark:bg-gradient-to-r dark:from-blue-100 dark:to-purple-100 text-foreground text-base`
        }
      >
      <ClientThemeProvider>{children}</ClientThemeProvider>  
      </body>
    
    </html>
  );
}
