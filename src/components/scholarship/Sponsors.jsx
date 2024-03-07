import React from "react";

function Sponsors({ title, desc, index }) {
  return (
    <div className="box-border w-full md:w-full md:h-[100] lg:w-[100] h-fit flex flex-col items-center justify-evenly p-2 my-8 mx-2">
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

export default Sponsors;
