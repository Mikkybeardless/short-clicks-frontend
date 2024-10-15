"use client"
import Link from 'next/link';
import Footer from './ui/home/footer';
import ThemeSwitcher from './ui/components/themeSwitcher';
import {  useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function NotFound() {
  const router = useRouter();

  useEffect(() => { 

    document.title = '404 - Page Not Found';
    const timeoutId = setTimeout(() => {
      document.title = 'ShortClicks APP';
      router.push('/');
    }, 5000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <nav className="navbar bg-gradient-to-r from-[#9fafca] to-[#EEEEEE] text-base-300  dark:bg-base-100 mr-auto justify-between">      
      <Link href="/" className="btn btn-ghost normal-case md:text-xl text-lg">ShortClicks APP</Link>
     <ThemeSwitcher/>
     </nav>
      <div className='dark:text-base-content text-base-200 font-bold '>
      <h1 className='text-3xl mb-2'>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className='btn ' href="/">
        Go back home
      </Link>
      </div>
     
      <Footer />  
    </div>
  );
}