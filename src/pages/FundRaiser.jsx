import React from "react";
import girl from "../assets/girl_.png";
import HowItWorks from "../components/fundraiser/HowItWorks";
import Footer from "../components/fundraiser/Footer";
import CustomHeader from "../components/CustomHeader";

const Fundheader = () => {
  return (
    <div className="w-full h-screen flex md:flex-row md:items-center md:justify-center">
      <div className="p-8 bg-gradient-to-b from-teal-600 to-current flex flex-col items-center justify-end md:relative md:flex md:flex-col md:items-center md:justify-center backdrop-blur-md md:bg-gradient-to-br md:from-cyan-400 md:to-teal-800 md:w-3/4 h-full">
        <h2 className="z-10 left-0 mb-40 text-slate-200 absolute md:relative md:mb-0  md:z-0 md:text-neutral-100 text-3xl md:text-5xl font-bold text-wrap w-[12em]">
          Start your fundraiser and bring your dreams to life
        </h2>
        <button className=" w-60 h-16 rounded-full font-semibold text-lg bg-neutral-100 text-slate-800 my-8">
          Start Fundraiser
        </button>
        <div className="invisible lg:visible w-72 h-72 -z-10 bg-gradient-to-br from-cyan to-current rounded-full absolute md:right-24"></div>
      </div>
      <div className=" md:flex md:flex-col bg-blue-200 w-full md:w-1/4 h-full">
        <img src={girl} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
function FundRaiser() {
  return (
    <>
      <CustomHeader
        desc={" Start your fundraiser and bring your dreams to life"}
        sideImage={girl}
      />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default FundRaiser;
