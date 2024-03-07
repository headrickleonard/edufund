import { services } from "../utils/index";
// import Service from "./components/Service";
import guy from "../assets/guy-exams.jpg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ServiceCard from "../components/Service";
import { eduFundData } from "../utils/index";
const Banner = ({ title }) => {
  return (
    <div className="sm:my-4 flex flex-row items-center justify-center relative h-[5em] w-full md:w-[36em] md:ml-12 my-2 sm:w-[24em] rounded-full bg-white">
      <div className=" h-20 w-20 rounded-full bg-cyan-500 z-10 absolute -left-4"></div>
      <h3 className="font-semibold text-xl md:text-3xl md:font-normal ml-12 sm:ml-16">{title}</h3>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
    <NavBar/>
      <div className="bg-gradient-to-r from-[#0CC0DF] to-[#FFDE59] pt-28">
        <section className="max-w-7xl mx-auto px-8 md:flex md:flex-row md:items-center md:justify-between gap-8 ">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-white z-10">
            <h1 className="text-3xl lg:text-4xl md:lg:text-5xl font-bold text-slate-900 mb-4 font-neue">
              EduFund seeks to make quality education accessible for all
              Africans
            </h1>
            <p className="text-sm lg:text-base font-neue text-justify">
              EduFund is democratizing access to quality education for
              underserved young talents, with the aim of catalyzing Africa’s
              economy by enabling Africa’s young workforce to acquire relevant
              skills for future of work. Over{" "}
              <span className="font-bold">79%</span> of Africa’s population are
              living below $6 per day, which puts higher education as a luxury
              concept to these communities. Our goal is to bring quality
              education to every deserving African talent, irrespective of
              social status, and create a generation of productive youths that
              becomes a driving force of the continent’s economy
            </p>
          </div>
          {/* Image */}
          <div className="w-full lg:w-1/2 mt-4 md:mt-0">
            <img
              src={guy}
              alt="Happy student with documents"
              className="rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg"
            />
          </div>
        </section>
        <div className="max-w-7xl my-20 mx-auto px-4 md:px-8">
          <h4 className="font-neue max-w-4xl text-xl md:text-3xl font-bold text-white">
            We are on a mission to creating a productive workforce for Africa,
            by enabling every young person access decent level of education
            through our community financing solutions.
          </h4>
        </div>

        <section>
          <div className="mx-auto flex flex-col md:flex-row">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard
                  serviceName={service.serviceName}
                  serviceDescription={service.serviceDescription}
                  serviceAction={service.serviceAction}
                  serviceBg={service.serviceBg}
                  linkTo={service.to}
                />
              </div>
            ))}
          </div>
        </section>

        {/* <section className="h-1/2 w-full lg:h-screen lg:w-full"> */}
          {/* <img src={edufund} alt="" className="h-full w-full" /> */}
          {/* <HeroSection/> */}
        {/* </section> */}
        {/* <h2 className="bg-[#0cc0df] text-xl sm:text-3xl text-white font-bold py-4 pl-32 sm:pl-20">
          EduFund services
        </h2> */}
         <section className="h-screen w-full mt-4 sm:h-fit py-16 bg-[#0097b2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4">
          {eduFundData.map((data) => (
            <Banner key={data.id} title={data.title} />
          ))}
        </section> 
        {/* <Footer /> */}
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;


