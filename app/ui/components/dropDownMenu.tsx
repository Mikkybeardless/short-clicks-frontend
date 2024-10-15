import React from "react"
import Link from "next/link"

const DropDownMenu = () => {
  return (
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="bg-[#9fafca] text-base-300 shadow-md menu menu-sm dropdown-content mt-3 z-[1] p-2 dark:shadow dark:bg-base-100 dark:text-base-content rounded-box w-52">
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#documentation">Documentation</a></li>
      <li><a href="#contact">Contact</a></li>
      <Link href="/auth/signup">Get Started</Link>
    </ul>
  </div>
  )
}

export default DropDownMenu
