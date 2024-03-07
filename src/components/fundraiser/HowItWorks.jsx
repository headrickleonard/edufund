import React from "react";
import { fundRaisingData } from "../../utils";

const Timeline = ({ index }) => {
  let indeces = [1, 2, 3];
  return (
    <div className="flex flex-row items-center justify-center relative h-32 w-full">
      <div className="bg-neutral-200 w-full h-2 rounded-xl absolute -z-10"></div>
      <div className="w-full flex flex-row items-center justify-evenly">
        {indeces.map((i) => (
          <div
            className="h-12 w-12 rounded-full bg-cyan-700 flex items-center justify-center text-xl font-bold text-white"
            key={i}
          >
            0{i}
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, desc, color,index }) => {
  return (
    <div
      className={` items-center justify-between p-2 mx-4 my-8 rounded-xl h-72 w-[30] box-border `}
      style={{backgroundColor:color}}
    >
      <div className="absolute flex items-center justify-center h-20 box-border w-20 rounded-full border-4 bg-[#0097b2] border-white -mt-16 place-self-start">
        <small className="font-bold text-3xl text-white">{index+1}</small>
      </div>
      <h2 className="font-semibold text-lg p-2 text-center my-4 text-slate-50">{title}</h2>
      <p className="text-white font-normal  p-2 text-justify ">{desc}</p>
    </div>
  );
};

function HowItWorks() {
  return (
    <div className="h-fit w-full flex items-center justify-center flex-col -my-4 overflow-hidden box-border">
      {/* <div className="bg-[#0097b2] md:flex md:items-center md:justify-center w-full md:h-32"> */}
      <h2 className="font-light text-3xl mx-2 my-4 text-white">How it works</h2>
      {/* </div> */}
      <h2 className="font-normal text-3xl mx-2 -mt-2 my-4 text-black">
        How it works
      </h2>
      {/* <Timeline /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-[5%]"> */}
      <div className=" p-4 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-2">
        {fundRaisingData.map((item,i) => (
          <Card
            desc={item.description}
            title={item.title}
            key={item.id}
            color={item.color}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
