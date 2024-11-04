"use client"

import React, { useEffect } from "react";
import Footer from "../ui/home/footer";
import Dashboard from "../ui/components/dashBoardCom";
import ThemeSwitcher from "../ui/components/themeSwitcher";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
 const router = useRouter()
 const searchParams = useSearchParams();
 const user = searchParams.get('username') ? JSON.parse(decodeURIComponent(searchParams.get('username') as string)) : null;
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      router.replace('/auth/signin')
    }

    const timeoutId = setTimeout(() => {
    handleLogout()
    }, 60 * 60 * 1000);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);

  })

  
const handleLogout = async () => {
  localStorage.removeItem("token");
  router.replace("/auth/signin");
}

  return (
    <div className="relative">
      <nav className=" z-10 fixed navbar bg-gradient-to-r from-[#9fafca] to-[#EEEEEE] text-base-300  dark:bg-base-100 mr-auto justify-between">
        <Link href="/" className="btn btn-ghost normal-case md:text-xl text-lg">
          ShortClicks APP
        </Link>
        <div>
        <button onClick={handleLogout} className="btn  bg-[#EEEEEE] hover:text-[#EEEEEE] outline-none border-0 text-base-100 ">Log Out</button>
        <ThemeSwitcher />
        </div>
      </nav>
      <div className=" pt-14">
      <Dashboard user= {user} />
      <Footer />
      </div>
    </div>
  );
};

export default Page;
