import React from 'react'
import './Info.css'
import line from '../../assets/Line.png'
import video2 from '../../assets/Video (1).png'

const Info = () => {
  return (
    <div>
        <div className="container">
            <div className="flex mt-[80px]">
                        <div className="flex gap-3 items-center text-2xl justify-center mb-[40px]">
                        <img src={line} alt="" /><p className='font-medium'>Know about us</p>
                        </div>
                    </div>
                <div className=" flex flex-col gap-[100px]">
                        <div className=" info__title flex  items-start justify-center gap-[100px]">
                            <h2 className='text-black w-[40%] text-[40px] font-medium'>We help nature smile and survive everywhere</h2>
                            <div className="flex flex-col w-[40%] info__desc">
                            <p className='text-[18px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.‍Duis cursus, mi quis viverra ornare</p><p>eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posue</p>
                            </div>
                        </div>
                    <div className=" w-[100%]">
                            <img src={video2} alt="" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Info