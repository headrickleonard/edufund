import React from "react";

function CustomHeader({ sideImage, desc }) {
  return (
    <div className="w-full h-screen flex md:flex-row md:items-center md:justify-center">
      <div className="hidden p-8 bg-gradient-to-b from-teal-600 to-current  md:relative md:flex md:flex-col md:items-center md:justify-center backdrop-blur-md md:bg-gradient-to-br md:from-cyan-400 md:to-teal-800 md:w-2/3 h-full">
        <h2 className="z-10 left-0 mb-40 text-slate-200 absolute md:relative md:mb-0  md:z-0 md:text-neutral-100 text-3xl md:text-5xl font-bold text-wrap w-[12em]">
          {/* Start your fundraiser and bring your dreams to life */}
          {desc}
        </h2>
        <button className=" w-60 h-16 rounded-full font-bold text-xl bg-neutral-100 text-slate-800 mb-8 mt-16">
          <a href="https://admin.nollaafrica.com" className="no-underline">Start Fundraiser</a>
        </button>
        <div className="invisible lg:visible w-72 h-72 -z-10 bg-gradient-to-br from-cyan to-current rounded-full absolute md:right-24"></div>
      </div>
      <div className="md:flex md:flex-col w-full md:w-1/3 h-full relative">
        <img src={sideImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:hidden flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-[#0097b2] to-current absolute">
        <p className="font-bold text-4xl m-4 text-white text-center w-[10em] z-20">
          {desc}
        </p>
        <div className="h-72 w-72 rounded-full bg-gradient-to-br from-inherit via-current to-inherit absolute right-0 bottom-0"></div>
        <button className="z-20 h-14 mb-4 mt-8 w-72 rounded-full bg-white text-xl font-bold">
          <a href="https://admin.nollaafrica.com" className="no-un">Start Fundraiser</a>
        </button>
      </div>
    </div>
  );
}

export default CustomHeader;
