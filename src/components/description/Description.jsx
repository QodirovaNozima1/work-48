import React from 'react'
import { HiOutlineMinus } from "react-icons/hi";
import line from '../../assets/Line.png'
import video from '../../assets/Video.png'
import './Description.css'

const Description = () => {
  return (
    <div className='container'>
        <div className="flex mt-[96px]">
            <div className="flex gap-3 items-center text-2xl justify-center">
            <img src={line} alt="" /><p className='font-medium'>Know about us</p>
            </div>
        </div>
        <div className=" desc flex justify-between pb-[90px]">
            <div className="desc__title w-[50%] flex  items-start justify-center flex-col gap-6">
                <h2 className='text-black text-[48px] font-medium'>We help nature smile and survive everywhere</h2>
                <p className='text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam</p> <p className='text-[16px] font-light'>libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posue</p>
                <button className='w-[148px] h-[51px] text-white bg-[#70C174] rounded-md font-medium hover:drop-shadow-xl'>Learn more</button>
            </div>
            <div className="desc__img w-[30%]">
                <img src={video} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Description