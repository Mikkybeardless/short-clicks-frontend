import Link from "next/link"
import ThemeSwitcher from "../components/themeSwitcher"
import DropDownMenu from "../components/dropDownMenu"
import Menu from "../components/menu"

const Header = () => {
  return (
    <header >
    <nav className="navbar fixed z-10 bg-gradient-to-r from-[#9fafca] to-[#EEEEEE] text-base-300  dark:bg-base-100 ">
    <div className="navbar-start">
      <DropDownMenu/>
      <Link href="/" className="btn btn-ghost normal-case md:text-xl text-lg">ShortLink API</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <Menu/>
    </div>
    <div className="navbar-end ">
      <Link href="/auth/signup" className="md:btn hidden md:bg-[#EEEEEE] md:hover:text-[#EEEEEE] md:outline-none md:border-0 md:text-base-100 ">Get Started</Link>
      <ThemeSwitcher/>
    </div>
    </nav>
  </header>
  )
}

export default Header
