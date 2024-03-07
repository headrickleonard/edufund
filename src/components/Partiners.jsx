import birmingham from "../assets/partiners/birmingham-city.png";
import bradford from "../assets/partiners/uni-bradford.png";
import liverpool from "../assets/partiners/uni-liverpool.png";
import susses from "../assets/partiners/uni-sussex.png";
import uwe from "../assets/partiners/uwe.png";
import logo from "../assets/logo.png"

const Partners = () => {
  const universityPartners = [
    { imgSource: birmingham },
    { imgSource: bradford },
    { imgSource: liverpool },
    { imgSource: susses },
    { imgSource: uwe },
    { imgSource: birmingham },
  ];

  const institutionPartners = [{}];

  return (
    <div className="bg-white py-8 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* University Partners Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 font-garet">
          Our University Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 xl:gap-8 mb-12 mx-auto items-center justify-center">
          {/* Repeat your logo items here */}
          {/* Replace 'path-to-university-logo' with actual paths to logos */}
          {universityPartners.map((uniPartner, i) => (
            <div key={i} className="flex justify-center items-center">
              <img
                className="w-48"
                src={uniPartner.imgSource}
                alt="University of Sussex Logo"
              />
            </div>
          ))}
        </div>

        {/* Institution Partners Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Repeat your logo items here */}
          {/* Replace 'path-to-institution-logo' with actual paths to logos */}
          {/* {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-center items-center">
              <img
                className="max-h-12"
                src={logo}
                alt="Institution Logo"
              />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Partners;
