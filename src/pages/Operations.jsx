import React from "react";
import twirl1 from "../assets/twirl1.png";
import twirl2 from "../assets/twirl2.png";
import kids from "../assets/kids.png";
import { scholarShipData } from "../utils";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const HeroSection = () => {
  return (
    <div className="h-full w-full flex flex-col relative sm:h-screen sm:flex-row box-border">
      <div className="w-full relative h-fit box-border sm:h-full flex items-center sm:flex-col sm:items-start sm:justify-between  sm:bg-[#00c4cc] sm:w-1/4">
        <div className="h-[10em] overflow-hidden border-4 mx-2 sm:h-44 w-[98%] sm:w-[24em] flex flex-col items-center justify-center bg-white sm:border-4 sm:invisible lg:visible border-cyan-500 sm:ml-32 sm:top-12 absolute">
          <h2 className="font-normal text-xl sm:text-5xl">
            How <span className="font-bold">EduFund</span> is{" "}
            <span className="font-bold">closing</span> the gap
          </h2>
        </div>
        <img
          src={twirl1}
          alt=""
          className="sm:w-60 w-40 h-fit pointer-events-none"
        />
        <img
          src={twirl2}
          alt=""
          className="sm:w-60 w-40 h-fit pointer-events-none"
        />
      </div>
      <div className="w-full h-screen sm:relative box-border flex flex-col items-center justify-center sm:w-3/4 relative">
        <div className="flex flex-col items-center justify-evenly w-full h-fit p-1 absolute top-2 sm:top-10 md:invisible lg:visible">
          <h1 className="font-semibold text-3xl md:text-3xl">
            Our Story Ignites Change
          </h1>
          <img src={kids} alt="" className="sm:w-1/2 w-3/4" />
        </div>
        <h2 className="text-xl mx-4 font-semibold text-cyan-500 leading-9 mt-8 md:text-3xl md:mt-36">
          Are you currently designing or launching your scholarship programme?
          EduFund’s Scholarship Solutions will help you create and manage your
          scholarship scheme seamlessly.
        </h2>
        <p className="text-xl mx-4 font-normal md:my-4 my-12 md:text-3xl">
          EduFund Scholarship Management Solution streamlines scholarship
          implementation value chain and delivers end-to-end admission
          management process for institutions and corporates. EduFund platform
          offers transparent, secured, seamless student recruitment & onboarding
          process, scholarship data management, and matches students to best
          universities globally within minutes.
        </p>
      </div>
    </div>
  );
};

function Sponsors({ title, desc, index }) {
  return (
    //   <div className="box-border md:w-1/2 w-full md:h-[100]  h-fit flex flex-col items-center justify-evenly p-2 my-8 mx-2">
    <div className="box-border w-full sm:w-1/3 lg:w-1/3 xl:w-1/3 p-4 my-8">
      <div className="h-20 flex flex-row items-center justify-start bg-[#0097b2] rounded-xl w-[92%] p-4x">
        <div className="absolute flex items-center justify-center h-20 w-20 rounded-full border-4 bg-[#0097b2] border-white -mt-16 place-self-start">
          <small className="font-bold text-3xl text-white">{index}</small>
        </div>
        <span className="text-xl font-semibold text-slate-50 text-center m-8">
          {title}
        </span>
      </div>
      <div className="bg-[#0097b2] rounded-xl mt-4 p-4 h-[22em] box-border">
        <p className="text-white font-normal font-sans text-justify text-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}
function Sponsors2({ title, desc, index }) {
  return (
    //   <div className="box-border md:w-1/2 w-full md:h-[100]  h-fit flex flex-col items-center justify-evenly p-2 my-8 mx-2">
    <div className="box-border w-full p-4 my-8">
      <div className="h-20 flex flex-row items-center justify-start bg-[#0097b2] rounded-xl w-[92%] p-4x">
        <div className="absolute flex items-center justify-center h-20 w-20 rounded-full border-4 bg-[#0097b2] border-white -mt-16 place-self-start">
          <small className="font-bold text-3xl text-white">{index}</small>
        </div>
        <span className="text-xl font-semibold text-slate-50 text-center m-8">
          {title}
        </span>
      </div>
      <div className="bg-[#0097b2] rounded-xl mt-4 p-4 h-[22em] box-border">
        <p className="text-white font-normal font-sans text-justify text-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}

const HowWeWork = () => {
  return (
    // <div className=" w-full h-fit my-2 p-4 flex flex-wrap items-center justify-center">
    <div className="flex flex-wrap md:items-center justify-center my-12">
      {scholarShipData.slice(0, 3).map((scholarship) => (
        <Sponsors
          desc={scholarship.description}
          index={scholarship.index}
          title={scholarship.title}
          key={scholarship.id}
        />
      ))}
     <div className="flex flex-col md:flex-row">
     {scholarShipData.slice(3, 5).map((scholarship) => (
        <Sponsors2
          desc={scholarship.description}
          index={scholarship.index}
          title={scholarship.title}
          key={scholarship.id}
        />
      ))}
     </div>
    </div>
  );
};

function Operations() {
  return (
    <>
      <NavBar />
      <section className="h-fit w-full box-border overflow-hidden">
        <HeroSection />
      </section>
      <section className="max-h-fit w-full box-border">
        <HowWeWork />
      </section>
      <section className="max-h-fit w-full box-border p-2"></section>
      <Footer />
    </>
  );
}

export default Operations;
