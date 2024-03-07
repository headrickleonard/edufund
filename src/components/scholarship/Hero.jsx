import React from "react";
import lines from "../../assets/lines.png";
import person from "../../assets/person.png";
import IgniteCard from "./IgniteCard";
import FloatingBox from "./FloatingBox";
import BlueBox from "./BlueBox";
import { PieChart } from "react-minimal-pie-chart";

function Hero() {
  return (
    <div className="w-full border-b border-red-400 h-screen bg-slate-50 flex flex-row items-center justify-center relative">
      <section className="hidden md:w-1/4 md:h-full bg-blue-500 md:flex overflow-hidden relative">
        <img
          src={lines}
          alt=""
          className="w-full h-full object-fill rotate-90 "
        />
        {/* <FloatingBox /> */}
      </section>

      <section className="w-3/4 h-full flex flex-col">
        <div className="flex flex-row items-center justify-between z-30 top-0 left-20 -ml-12">
          <FloatingBox />
          <IgniteCard />
          <BlueBox />
        </div>
        <div className="p-4">
          <p className="font-semibold text-xl text-blue-400 py-4">
            Are you currently designing or launching your scholarship programme?
            EduFund’ s Scholarship Solutions will help you create and manage
            your scholarship scheme seamlessly.
          </p>
          <p className="text-xl font-normal py-4">
            EduFund Scholarship Management Solution streamlines scholarship
            implementation value chain and delivers end-to-end admission
            management process for institutions and corporates. EduFund platform
            offers transparent, secured, seamless student recruitment &
            onboarding process, scholarship data management, and matches
            students to best universities globally within minutes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
