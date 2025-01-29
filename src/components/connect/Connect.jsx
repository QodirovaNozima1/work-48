import React from "react";
import "./Connect.css";
import line from "../../assets/Line.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Connect = () => {
    return (
        <div className="bg-[#EBF0F9] flex gap-5 pt-[40px] pb-3">
            <div className="container flex flex-col items-start">
                <div className="flex ">
                    <div className="flex gap-3 items-center text-2xl justify-center">
                        <img src={line} alt="" />
                        <p className="font-medium">Contact us</p>
                    </div>
                </div>
                <div className="flex connect items-center justify-center gap-[100px]">
                    <div className="connect__title w-[40%] flex  items-start justify-center flex-col gap-6">
                        <h2 className="text-black text-[48px] font-medium">
                            We'd love to hear from you
                        </h2>
                        <p className="text-[16px] font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.‍Duis cursus,
                            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                        </p>
                    </div>
                    <div className="connect__box flex flex-col  gap-[40px] w-[40%]">
                        <div className="flex flex-col gap-4 hover pb-[3px]">
                            <h2 className="text-[24px] font-medium">Let's talk!</h2>
                            <div className="flex  gap-3">
                                <p>+1 23 456 789</p>
                                <p>hello@finsweet.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col hover pb-[3px]">
                            <h2 className="text-[24px] font-medium">Headoffice</h2>
                            <p>8 Brewery Drive, Hudson, NH 03051 USA</p>
                        </div>
                        <div className="flex flex-col hover pb-[3px]">
                            <h2 className="text-[24px] font-medium">Branch Office</h2>
                            <p>178 Marconi St., Venice, 34293 Italy</p>
                        </div>
                        <div className="flex flex-row gap-4 ">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
