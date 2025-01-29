import { HiOutlineMinus } from "react-icons/hi";
import React from 'react'
import line from '../../assets/Line.png'
import video from '../../assets/Image.png'
import './Voluntary.css'

const Voluntary = () => {
  return (
    <div className='container'>
        <div className="flex mt-[96px]">
            <div className="flex gap-3 items-center text-2xl justify-center">
            <img src={line} alt="" /><p className='font-medium'>What We do</p>
            </div>
        </div>
        <div className="voluntary flex justify-between pb-[90px]">
            <div className="voluntary__title w-[50%] flex  items-start justify-center flex-col gap-6">
                <h2 className='text-black text-[48px] font-medium'>We are working worldwide</h2>
                <p className='text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diamlibero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posue</p>
            </div>
            <div className="voluntary__img w-[40%]">
                <img src={video} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Voluntary