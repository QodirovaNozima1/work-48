import React from 'react'
import './Environment.css'
import icon from '../../assets/Icon.png'
import icon1 from '../../assets/Icon (1).png'
import icon2 from '../../assets/Icon (2).png'
import icon3 from '../../assets/Icon (3).png'
import icon4 from '../../assets/Icon (4).png'
import icon5 from '../../assets/Icon (5).png'

const Environment = () => {
  return (
    <div className='bg-[#EFF7F2]  pt-[96px]'>
        <div className="grid grid-col container"> 
            <h2 className='text-[48px] font-medium'>What we do for the environment</h2>
            <div className=" mt-[30px] environment__box  gap-[50px] mb-[100px]">
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px] ">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Build healthy cities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px]">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon1} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Protect land and water</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px]">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon2} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Tree plantation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px]">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon3} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Water sustainability</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px]">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon4} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Animal safety</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[20px] w-[360px] h-[102px]">
                    <div className="environment__img items-center w-[90px] h-[40px] mb-[50px]">
                        <img className=" w-full  h-full" src={icon5} alt="" />
                    </div>
                    <div className="environment__title flex gap-[5px] flex-col ">
                        <h2 className='text-[24px] font-medium'>Build healthy cities</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Environment