import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import humburger from "../assets/humburger.svg";
import { navLinks } from "../utils";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
  };

  return (
    <header className=" h-20 z-50 top-0 left-0 right-0 py-2 md:py-6 bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59]  z-3">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="edufund" className="h-12 w-24 ml-2" />
        </a>
        <ul className="hidden md:flex md:justify-center md:items-center gap-4 md:gap-16 md:text-gray-950 ">
          {navLinks.map((navlink) => (
            <li key={navlink.id}>
              <NavLink
                to={navlink.to}
                className="no-underline font-semibold leading-normal text-lg text-white md:text-white hover:no-underline md:rounded-full md:p-2"
              >
                {navlink.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <img
            src={humburger}
            alt="Menu"
            className="h-10 w-10"
            onClick={toggleNav}
          />
        </div>
      </nav>
      {navState && (
        <div className="fixed sm:ml-2 mx-[2%] h-fit top-16 rounded-xl bottom-0 flex flex-col items-center justify-center z-50 w-[94%] bg-blue-50"
        role="alertdialog"
        
        >
          <button
            aria-label="close menu"
            className="absolute top-0 right-0 p-4 text-red-600"
            onClick={toggleNav}
          >
            {/* <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg> */}
          </button>
          <ul className="animate-slide-in-left flex flex-col h-fit items-center gap-12 py-8 uppercase">
            {navLinks.map((singleLink) => (
              <NavLink
                className="text-md leading-7"
                key={singleLink.id}
                to={singleLink.to}
                onClick={toggleNav}
              >
                {singleLink.name}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
