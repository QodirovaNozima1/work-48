import React from 'react'
import "./Footer.css"
import logo from "../../assets/Logo (1).png"
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    const footer = ["About us","Team", "What we Do", "Contact"]
    const footer1 = ["Projects", "Events","Donate","Blog"]
    const footer2 = ["Facebook", "Instagram","Twitter","Linkdin "]
    return (
        <div className='footer bg-[black] pt-16 pb-10'>
        <div className='container flex  gap-4 justify-center  footer__box'>
            <div className="flex flex-col md:flex-row gap-5  text-white footer__wrapper">
                <ul className="footer__collection w-[full] md:w-1/4 flex  footer__p">
                    <img className='h-[24px]' src={logo} alt="" />
                </ul>
                <ul className="footer__collection w-[full] md:w-1/4 leading-normal flex flex-col gap-7 footer__p">
                    <p className='text-xl font-semibold'>Our team</p>
                    {
                        footer1?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
                    }
                </ul>
                <ul className="footer__collection w-[full] md:w-1/4 leading-normal flex flex-col gap-7 text-3">
                    <p className='text-xl font-semibold'>More</p>
                    {
                        footer?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
                    }
                </ul>
                <ul className="footer__collection w-[full] md:w-1/4 flex-end leading-normal flex flex-col gap-7 text-3">
                    <p className='text-xl font-semibold'>Connect</p>
                    {
                        footer2?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
                    }
                </ul>
            </div>
            <div className=" flex flex-col gap-3">
                <p className='footer__title text-[38px] font-medium text-white'>Subscribe to get latest updates</p>
                <div className=' ml-4 w-[400px] h-[64px]  text-white border-2 pl-2 border-indigo-100/50 rounded-md footer__input'> 
                <input className='outline-none'type="text" placeholder='Email...'/>
                <button className='ml-[88px] w-[120px] h-[64px] text-[16px] font-medium rounded-md text-[black] bg-[#FFFFFF] hover:bg-[#EFF7F4] hover:text-blonde'>Send it</button>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Footer