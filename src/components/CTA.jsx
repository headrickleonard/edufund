import { Link } from "react-router-dom";

const CTA = ({ heading, description, action, svg,linkTo }) => {
  return (
    <>
      <div className="text-white max-w-[80rem] mx-auto relative">
        {/* Logo Placeholder - Replace with actual logo */}

        <div className="w-10 h-10 absolute -top-8 ml-4">{svg}</div>
        <div className="bg-[#263237] max-w-7xl mx-auto flex flex-col items-center md:justify-between px-10 py-20 rounded-2xl">
          {/* Text Section */}
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-garet text-[#5CE1E6] font-bold">
              {heading}
            </h2>
            <p className="mt-2 text-base sm:text-lg md:text-2xl font-garet">
              {description}
            </p>
          </div>

          {/* Donate Button */}
        </div>
        <button className="bg-white text-[#018FA6] hover:bg-gray-200 font-bold py-4 px-10 mt-4 flex justify-center mx-auto">
          <Link to={linkTo}>{action}</Link>
        </button>
      </div>
    </>
  );
};

export default CTA;
