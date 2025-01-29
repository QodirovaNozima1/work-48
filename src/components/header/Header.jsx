
import React, { useState }  from 'react' 
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Header.css"
import navlogo from "../../assets/Logo.png"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const {pathname} = useLocation()
    const bg = pathname === "/media" ? "bg-slate-300 backdrop-blur-sm text-black" : "bg-[#ffffffdd]"
    const links = ["Каталог", "Доставка", " Условия", "Контакты"]
    const number = ["+ 375 736 463"]
    return (
      <header id= 'header' className={`header h-[70px] backdrop-blur-sm flex gap-5 p-5 items-center mt-[12px] ${bg}`}>
        <div className='container  justify-between items-center'>
          <nav className="navbar py-5 flex items-center justify-between">
          <div className="navbar__logo">
            <Link to={"/"}>
            <img src={navlogo}  alt=""/>
                </Link>
            </div>
            <div className={`nav__collect items-center flex justify-center gap-6 ${isMenuOpen ? "show" : ""}`} >
              <ul className="navbar__collection flex gap-7">
              <Link className='hover:text-slate-300 ease-in-out' to={"/"}>
                  Home
                </Link>
                <Link className='hover:text-slate-300 ease-in-out' to={"/about"}>
                  About us
                </Link>
                <Link className='hover:text-slate-300 ease-in-out' to={"/do"}>
                  What we do
                </Link>
                <Link className='hover:text-slate-300 ease-in-out'  to={"/media"}>
                Media
                </Link>
                <Link className='hover:text-slate-300 ease-in-out' to={"/contact"}>
                  Contact
                </Link>
              </ul>
                 <div className=' flex gap-6 text-[16px] items-center'>
                  <button className='w-[116px] h-[43px] text-white bg-[#1D2130] rounded-md'>Donate</button>
                  </div>
            </div>
            
            <div onClick={toggleMenu} className="navbar__menu text-2xl">
            <AiOutlineMenuUnfold />
            </div>
          </nav>
        </div>
      </header>
    )
  }
  
  export default Header

