import React from "react";
import image from "../../assets/funds.png";
function Footer() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center flex-col">
      <div className="hidden md:block md:h-1/2 md:w-full bg-[#018fa6]"></div>
      <div className="hidden md:block h-1/2 md:w-full bg-slate-100"></div>
      <div className="absolute md:-mt-20 z-20 w-full md:h-[50%] md:w-[70%]">
        <div className="flex flex-col items-center justify-evenly md:hidden w-full h-screen bg-white">
          <h2 className="text-xl w-[20em] text-center font-light">
            LEVERAGE THE POWER OF YOUR COMMUNITY TO IGNITE YOUR POTENTIAL
          </h2>
          <img src={image} alt="" />
          <button className=" h-14 w-60 rounded-full bg-[#018fa6] text-white font-bold text-2xl">
            Start Fundraiser
          </button>
        </div>
        <h2 className="hidden font-twister md:block text-center absolute md:relative top-0 mt-0 md:text-start text text-white mb-8 ml-12 font-bold md:text-3xl w-[65%]">
          LEVERAGE THE POWER OF YOUR COMMUNITY TO IGNITE YOUR POTENTIAL
        </h2>

        <img src={image} alt="" className="hidden md:block w-full h-full" />
      </div>
      <button className="hidden md:block md:-mt-24 z-30 bottom-0 self-center h-14 w-60 rounded-full bg-[#018fa6] text-white font-bold text-2xl">
        <a href="https://edufunddash.kibuti.co.tz">Start Fundraiser</a>
      </button>
    </div>
  );
}

export default Footer;
