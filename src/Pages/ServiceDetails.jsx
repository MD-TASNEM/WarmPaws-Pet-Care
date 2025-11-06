import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  //console.log(serviceId)
  const { data } = React.use(AuthContext);
  //console.log( typeof data)
  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Successfully Registered");
    e.target.reset();
  };

  if (!data) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  const service = data.find(
    (item) => Number(item.serviceId) === Number(serviceId)
  );

  if (!service) return <p>Service not found!</p>;

  return (
    <>
      <div className="bg-[#e5e7eb] min-h-screen pb-10">
        <h2
          className="text-center font-bold text-gray-800 
               text-xl sm:text-2xl md:text-3xl lg:text-4xl 
               py-4 sm:py-5 md:py-6"
        >
          Explore Our Offerings
        </h2>
        <p
          className="text-center text-gray-600 
              text-sm sm:text-base md:text-lg 
              max-w-2xl mx-auto w-10/12"
        >
          From Health to Fashion, Training to Recreation — Everything Your Cat
          Needs!
        </p>

        <div className="w-11/12 md:w-11/12 mx-auto flex flex-col justify-between items-center gap-5 py-10 ">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden   transition-all duration-300 p-3 sm:p-5 md:p-7">
            <img
              src={service.image}
              alt={service.category}
              className="w-10/12 mx-auto rounded-2xl h-56 sm:h-72 md:h-80 object-cover "
            />

            <div className="p-3 sm:p-5 w-10/12 mx-auto">
              <h1 className="font-bold text-gray-800 mb-2 text-center sm:text-left">
                {service.category}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <p className="text-gray-600 text-sm sm:text-base">
                  Rating:{" "}
                  <span className="font-semibold">{service.rating}</span>
                </p>
                <p className="text-green-600 text-lg sm:text-xl font-semibold mt-1 sm:mt-0">
                  ${service.price}
                </p>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                {service.description}
              </p>

              <div className="flex justify-center sm:justify-end mt-6">
                <button className="btn btn-neutral px-6 py-2 rounded-md transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center mt-10 pb-5 ">
              <div className="text-center">
                <h1 className="text-4xl my-2">Book Service</h1>
                <h1>Please enter your Details:</h1>
              </div>
            </div>
            <div className="w-11/12">
              <form onSubmit={handleBook}>
                <fieldset className="fieldset">
                  <label className="label ">First Name:</label>
                  <input
                    type="text"
                    name="text"
                    required
                    className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                    placeholder="Enter first name"
                  />
                  <label className="label ">Last Name:</label>
                  <input
                    type="text"
                    name="text"
                    required
                    className="input sm:w-[400px] sm:h-[50px] border-2  border-gray-400 focus:outline-none"
                    placeholder="Enter last name"
                  />

                  <label className="label">Email:</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input sm:w-[400px] sm:h-[50px] border-2 border-gray-400 focus:outline-none"
                    placeholder="Enter email"
                  />

                  <button className="btn btn-neutral mt-3 sm:w-[400px] border-none relative group">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                      Book Now
                    </span>
                    <span className="absolute bg-white w-0 h-full right-0 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
