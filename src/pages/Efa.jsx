import React from "react";
import girl from "../assets/studying.jpg";
import { selections } from "../utils";
import happyStudents from "../assets/happy-students.jpg";
import Chart from "../components/Chart";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import ChartComponent from "../components/Chart";
import PieChart from "../components/PieChart";
import Footer from "../components/Footer";
function CustomHeader({ sideImage, desc, btnLabel }) {
  return (
    <div className="w-full h-screen flex md:flex-row md:items-center md:justify-center">
      <div className="hidden p-8 bg-gradient-to-b from-teal-600 to-current  md:relative md:flex md:flex-col md:items-center md:justify-center backdrop-blur-md md:bg-gradient-to-br md:from-cyan-400 md:to-teal-800 md:w-2/3 h-full">
        <h2 className="z-10 left-0 mb-40 text-slate-200 absolute md:relative md:mb-0  md:z-0 md:text-neutral-100 text-3xl md:text-5xl font-bold text-wrap w-[12em]">
          {/* Start your fundraiser and bring your dreams to life */}
          {desc}
        </h2>
        <button className=" w-60 h-16 rounded-full font-bold text-xl bg-neutral-100 text-slate-800 mb-8 mt-16">
          <Link to={"/donate"}>{btnLabel}</Link>
        </button>
        <div className="invisible lg:visible w-72 h-72 -z-10 bg-gradient-to-br from-cyan to-current rounded-full absolute md:right-24"></div>
      </div>
      <div className="md:flex md:flex-col w-full md:w-1/3 h-full relative">
        <img src={sideImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:hidden flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-[#0097b2] to-current absolute">
        <p className="font-bold text-4xl m-4 text-white text-center w-[10em] z-20">
          {desc}
        </p>
        <div className="h-72 w-72 rounded-full bg-gradient-to-br from-[#018FA6] via-current to-inherit absolute right-0 bottom-0"></div>
        <button className="z-20 h-14 mb-4 mt-8 w-72 rounded-full bg-white text-xl font-bold">
          Donate now
        </button>
      </div>
    </div>
  );
}

const Timeline = () => {
  let indeces = [1, 2, 3];
  return (
    <div className="hidden md:flex md:flex-row md:items-center md:justify-center relative md:h-32 md:w-full">
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
const Card = () => {
  return (
    <div className="flex flex-col m-2 w-[15em] p-2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        beatae. Iusto, natus ullam ducimus dolorum repudiandae, voluptatem
        doloremque consequatur, perspiciatis cupiditate modi provident.
        Consequuntur molestiae voluptas laudantium nam voluptatum reiciendis.
      </p>
    </div>
  );
};

function Efa() {
  const text =
    "EduFund for Africa is investing in Africa's most promising and underserved students";

  const Card = ({ title, desc, index }) => {
    return (
      <div
        className={`items-center justify-between px-2 py-8 mx-4 my-8 rounded-xl h-[24em] w-[30] box-border `}
        // style={{ backgroundColor: color }}
      >
        <div className="absolute flex items-center justify-center h-20 box-border w-20 rounded-full border-4 bg-[#0097b2] border-white -mt-16 place-self-start">
          <small className="font-bold text-3xl text-white">{index}</small>
        </div>
        <h2 className="font-semibold text-lg p-2 text-center my-4 text-slate-50">
          {title}
        </h2>
        <p className="text-white font-normal  p-2 text-justify ">{desc}</p>
      </div>
    );
  };

  const DonateCard = () => {
    return (
      <div className="w-full md:w-[70%] h-1/2 bg-white p-4 flex flex-col items-center justify-evenly">
        <img
          src={happyStudents}
          alt=""
          className="h-36 w-full object-cover object-top sm:h-[15.5em]"
        />
        <h2 className="text-center text-3xl font-bold">
          We are raising <span className="text-cyan-600">$100,000</span> to
          create an equitable education oppotuntiy for all Africans
        </h2>
        <h4 className="text-xl">
          EduFund in Partnership with GreenEarth Academy is sending 1000
          vulnerable students to university by 2024. Every $1,000 will transform
          a generation forever
        </h4>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <CustomHeader sideImage={girl} desc={text} btnLabel={"Donate now"} />

      <div className="h-screen w-full flex flex-col md:flex-row">
        <div className="bg-[#018FA6] rounded-none h-full w-full md:w-1/2 flex items-center justify-center">
          <p className="md:leading-loose leading-7 text-xl text-white md:text-2xl font-light m-4">
            We are providing full scholarship to vetted students. The fund is
            made possible through the generosity of passionate individuals
            globally that are donating to EduFund With our well curated pool of
            African students on our platform, we review and select students
            based on their background stories, academic performance and
            alignment to our fund. The fund also implements a gender-lens and
            inclusion approach, to foster our deliberate commitment towards
            offering unique opportunities for women and vulnerable population.
          </p>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col items-center justify-center">
          <p className="text-5xl m-4 text-[#018FA6] font-bold">
            How our Model is Shaping the Future for Africa ’ s Talents
          </p>
        </div>
      </div>

      <div className="h-fit py-8 w-full bg-[#018FA6]">
        {/* <Timeline /> */}
        <div className="h-32 w-full -mt-8 bg-transparent  flex items-center justify-center shadow-inner">
          <h2 className="text-3xl font-bold ml-12 text-white text-center">
            Selection Criteria
          </h2>
        </div>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {selections.map((selection) => (
            <Card
              // color={'red'}
              desc={selection.description}
              index={selection.index}
              title={selection.title}
              key={selection.id}
            />
          ))}
        </div>
      </div>

      <div className="items-center justify-center flex flex-col h-screen w-full">
        <div className="h-1/2 w-full bg-cyan-600 flex flex-row items-center justify-center">
          <h1 className="text-white font-bold text-xl mb-36 md:text-3xl w-2/3 md:mb-12">
            JOIN US TO MAKE EDUCATION ACCESSIBLE FOR ALL
          </h1>
        </div>
        <div className="h-1/2 w-full bg-slate-200 flex flex-row items-center justify-center">
          <button className="h-12 w-60 bg-cyan-600 text-white font-semibold rounded-full mt-24 md:mt-24 z-20 sm:mt-40">
            <Link to={"/donate"}>Donate now</Link>
          </button>
        </div>
        <div className="flex absolute items-center justify-center">
          <DonateCard />
        </div>
      </div>
      <ChartComponent />
      <Footer />
    </>
  );
}

export default Efa;
