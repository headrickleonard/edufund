import React from "react";

function FloatingBox() {
  return (
    <div className="h-36 w-72 border-4 border-blue-500 mt-20 z-40 bg-white box-border p-4 flex items-center justify-center">
      <p className="font-bold text-xl">
        EduFund
        <span className="font-normal mx-1">
          ScholarShip management solutions
        </span>
      </p>
    </div>
  );
}

export default FloatingBox;
