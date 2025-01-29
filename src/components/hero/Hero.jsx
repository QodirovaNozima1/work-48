import React from 'react'
import './Hero.css'
import forest from '../../assets/BG Image.png'
import { FaRegCirclePlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='hero flex flex-col justify-center items-start' style={{
        width:"100%",
        height:"735px",
        paddingTop: "100px",
        backgroundImage:`url(${forest})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"center"
    }}>
       <div className=' gap-8 container'>
        <h2 className='text-white  font-semibold text-[64px] @md:text-[20px]'>Save the environment today for a better tomorrow</h2>
        <div className="btns flex gap-5   @md:gap-2">
            <button className='w-[148px] h-[51px] text-[#1D2130] bg-white rounded-md font-medium'>What we do</button>
            <button className='w-[148px] h-[51px]  rounded-md font-medium text-white flex items-center gap-2'><FaRegCirclePlay /> Play Video</button>
        </div>
        </div>
    </div>
  )
}

export default Hero