import React from "react";
import { Link } from "react-router-dom";
function ServiceCard({
  serviceName,
  serviceDescription,
  serviceAction,
  serviceBg,
  linkTo,
}) {
  return (
    <>
      <div
        className={`text-white px-6 py-20 h-full shadow-sm relative flex flex-col items-center justify-evenly mx-8 my-4 sm:my-0`}
        style={{ backgroundColor: serviceBg }}
      >
        <h3 className="text-lg text-ellipsis md:text-center overflow-clip font-bold mb-4 absolute -top-4 rounded-sm h-10 w-fit p-2 bg-white text-black">
          {serviceName}
        </h3>
        <p className="text-justify">{serviceDescription}</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 mt-4">
          <Link to={linkTo}>{serviceAction}</Link>
        </button>
      </div>
    </>
  );
}

export default ServiceCard;
