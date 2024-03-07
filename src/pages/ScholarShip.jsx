import React from "react";
import Hero from "../components/scholarship/Hero";
import Sponsors from "../components/scholarship/Sponsors";
import { scholarShipData } from "../utils";
import human from "../assets/human.png";
import bg from "../assets/bgImage.jpg";
import NavBar from "../components/NavBar";
import twirl1 from "../assets/twirl1.png";
import twirl2 from "../assets/twirl2.png";

import i1 from "../assets/1.png";
import i2 from "../assets/2.png";
import i3 from "../assets/3.png";
import i4 from "../assets/4.png";

const data = [
  {
    id: crypto.randomUUID(),
    icon: i1,
    title: "End-to-end Scholarship Management Automation",
    description:
      "EduFund offers digital platform to manage scholarship processes, such as student vetting,  scholarship confirmation and student allocation to universities.",
  },
  {
    id: crypto.randomUUID(),
    icon: i2,
    title: "Data Collection and Reporting for Sponsors",
    description:
      "EduFund enables sponsors to access realtime student academic performance  indicators from the university. Sponsors receive standard report with relevant students data through EduFund platform ",
  },
  {
    id: crypto.randomUUID(),
    icon: i3,
    title: "Student Experience Management",
    description:
      "With our curated student support services, EduFund provides visa support, pre-departure and onboarding support to students to soften their integration in their new community",
  },
  {
    id: crypto.randomUUID(),
    icon: i4,
    title: "Opportunity Marketplace for Students",
    description:
      "Through Student Gigs platform and EduFund Marketplace, students are connected to other part time jobs and other relevant opportunites to support their welfare while studying.",
  },
];

export const HeroSection = () => {  
  return (
    <div className="h-fit w-full flex flex-col relative sm:h-screen sm:flex-row box-border">
      <div className="w-full h-screen box-border sm:h-full flex items-center sm:flex-col sm:items-start sm:justify-between bg-[#00c4cc] sm:w-1/4">
        <div className="h-[10em]  sm:h-44 w-full sm:w-[24em] flex flex-col items-center justify-center bg-white sm:border-4 border-cyan-500 sm:ml-32 sm:top-12 absolute">
          <h2 className="font-normal text-xl sm:text-5xl">
            How <span className="font-bold">EduFund</span> is{" "}
            <span className="font-bold">closing</span> the gap
          </h2>
        </div>
        <img src={twirl1} alt="" className="w-60 h-fit pointer-events-none" />
        <img src={twirl2} alt="" className="w-60 h-fit pointer-events-none" />
      </div>
      <div className="w-full h-screen sm:relative box-border flex items-center justify-center sm:w-3/4">
        <div className="h-72 w-full flex flex-row items-center justify-center">
          <div className=" w-full sm:w-[80%] sm:ml-[14%] h-1 bg-[#00c4cc] absolute top-32 hidden sm:block"></div>
          <div className="w-36 h-24 hidden sm:block absolute top-[36px] right-0 bg-[#00c4cc]"></div>
          <div className="sm:h-[60%] h-full w-full bg-white sm:-ml-60 sm:bottom-0 sm:absolute">
            <div className="bg-[#00c4cc] w-full h-full flex flex-row items-center justify-evenly flex-wrap sm:mx-16 px-4">
              {data.map((item) => (
                <div className="sm:w-1/2  h-fit sm:h-40 bg-[#00c4cc] my-2 flex w-full md:flex-row md:items-center md:justify-between">
                  <div className="bg-white h-fit w-fit">
                    <img src={item.icon} alt="" className="h-24 w-24" />
                  </div>
                  <div className="flex flex-col w-3/4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <h3 className="text-white text-sm">{item.description}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


function ScholarShip() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div>
        <h2 className="text-center text-4xl md:text-5xl ml-12 my-16 p-2 font-normal">
          How we work with{" "}
          <span className="text-4xl md:text-5xl m-2 p-2 font-bold">
            Scholarship Sponsors
          </span>
        </h2>
        <div className=" w-full h-fit my-2 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
          {scholarShipData.map((scholarship) => (
            <Sponsors
              desc={scholarship.description}
              index={scholarship.index}
              title={scholarship.title}
              key={scholarship.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-20 my-4 mx-2 p-2 flex items-center justify-center">
        <button className="h-16 w-[15em] bg-[#0097b2] rounded-3xl text-3xl box-border font-bold text-white mb-12">
          <a href="https://admin.nollaafrica.com/register">SignUp Here</a>
        </button>
      </div>
    </>
  );
}

export default ScholarShip;
