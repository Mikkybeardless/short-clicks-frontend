"use client"

import React, { useEffect } from "react";
import Footer from "../ui/home/footer";
import Dashboard from "../ui/components/dashBoardCom";
import ThemeSwitcher from "../ui/components/themeSwitcher";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
 const router = useRouter()
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      router.push('/auth/signin')
    }

  })
  return (
    <>
      <nav className="navbar bg-gradient-to-r from-[#9fafca] to-[#EEEEEE] text-base-300  dark:bg-base-100 mr-auto justify-between">
        <Link href="/" className="btn btn-ghost normal-case md:text-xl text-lg">
          ShortClicks APP
        </Link>
        <ThemeSwitcher />
      </nav>
      <Dashboard />
      <Footer />
    </>
  );
};

export default Page;
