import React from "react";
import person from "../../assets/person.png";

function IgniteCard() {
  return (
    <div className="flex flex-col py-2">
      <h1 className="font-bold text-3xl">our story ignites Change</h1>
      <div className="flex flex-row">
        <img src={person} alt="person" className="h-30 w-20 object-contain" />
        <img src={person} alt="person" className="h-30 w-20 object-contain" />
        <img src={person} alt="person" className="h-30 w-20 object-contain" />
        <img src={person} alt="person" className="h-30 w-20 object-contain" />
        <img src={person} alt="person" className="h-30 w-20 object-contain" />
      </div>
    </div>
  );
}

export default IgniteCard;
