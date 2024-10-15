import React from 'react'
import Footer from '../ui/home/footer'
import Dashboard from '../ui/components/dashBoardCom'
import ThemeSwitcher from '../ui/components/themeSwitcher'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
     <nav className=" fixed z-10 navbar bg-gradient-to-r from-[#9fafca] to-[#EEEEEE] text-base-300  dark:bg-base-100 mr-auto justify-between">      
     <Link href="/" className="btn btn-ghost normal-case md:text-xl text-lg">ShortClicks APP</Link>
     <ThemeSwitcher/>
     </nav> 
  
     <Dashboard/>
     <div className=''>
     <Footer/>
     </div>
    </div>
  )
}

export default Page
