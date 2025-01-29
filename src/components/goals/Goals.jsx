import React from 'react'
import line from '../../assets/Line.png'
import card1 from '../../assets/Image (1).png'
import card2 from '../../assets/Image (2).png'
import card3 from '../../assets/Image (3).png'
import './Goals.css'

const Goals = () => {
  return (
    <div className='bg-[#EFF7F2]'>
    <div className='container'>
        <div className="flex pt-[96px]">
            <div className="flex gap-3 items-center text-2xl justify-center">
            <img src={line} alt="" /><p className='font-medium'>Top News</p>
            </div>
        </div>
        <div className="goals flex justify-between pb-[90px]">
            <div className="goals__title w-[50%] flex  items-start justify-center flex-col gap-6">
                <h2 className='text-black text-[48px] font-medium'>Our goal is to make water available for everyone</h2>
                <p className='text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam</p> 
                <button className='w-[148px] h-[51px] text-white bg-[#70C174] rounded-md font-medium'>Read more</button>
            </div>
            <div className="goals__wrapper flex flex-col w-[50%] bg-white p-4 gap-[20px]">
                <div className="goals__card flex gap-3 items-center gap-[10px]">
                    <img src={card1} alt="" />
                    <div className="flex flex-col">
                        <h2 className='text-[20px] font-medium'>Why saving wildlife is extremely important</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
                <div className="goals__card flex gap-3 items-center gap-[10px]">
                    <img src={card2} alt="" />
                    <div className="flex flex-col">
                        <h2 className='text-[20px] font-medium'>Caring for the present is caring for the future</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
                <div className="goals__card flex gap-3 items-center gap-[10px]">
                    <img src={card3} alt="" />
                    <div className="flex flex-col">
                        <h2 className='text-[20px] font-medium'>Don’t destroy greenery and don’t spoil scenery.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Goals