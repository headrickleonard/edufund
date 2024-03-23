import { Link } from "react-router-dom";
import happy from "../assets/happy-students.jpg";
import twirl from "../assets/twirl.png";
import NavBar from "./NavBar";


const Header = () => {
  return (
    <>
      <NavBar />
      <div className="-mt-16 bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59] min-h-screen overflow-hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-center relative lg:pt-20">
          <div className="sm:text-center lg:text-left font-garet">
            <h2
              className="text-3xl tracking-tight text-black sm:text-4xl -mt-8 font-normal"
              style={{ fontFamily: "monospace" }}
            >
              <span className="pr-2 block xl:inline">
                EduFund is making Quality Education
              </span>
              more accessible for Africa’s most promising and underserved
              talents.
            </h2>
            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 l:text-xl lg:mx-0">
              We are democratizing access to education for all by matching
              Africa’s most promising young talents to well curated education
              funds and top-level universities globally.
            </p>
            <div className="mt-5 w-full sm:mt-8 flex flex-row items-center justify-center sm:justify-start">
              <div>
                <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-700 font-garet text-lg uppercase font-bold border-2 mx-2 border-white">
                  {/* <a href="https://edufunddash.kibuti.co.tz">
                    Donate now
                  </a> */}
                  <Link to={"/donate"}>Donate</Link>
                </button>
              </div>
              <div className="mx-2 sm:mt-0 sm:ml-3">
                <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-gray-700 font-garet text-lg mx-auto uppercase font-bold border-2 border-white">
                  <Link to={"/fundraiser"}>Raise Funds</Link>
                </button>
              </div>
            </div>
          </div>
          <img
            src={twirl}
            alt=""
            className=" absolute overflow-hidden w-full -right-96"
          />
          <img
            src={happy}
            alt=""
            className="w-full lg:max-w-[25rem] xl:max-w-[30rem] lg:h-[25rem] xl:h-[30rem] rounded-xl lg:rounded-full object-cover mt-8 lg:-mt-12 shadow-xl z-[1] overflow-hidden"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
