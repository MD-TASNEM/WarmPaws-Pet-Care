// import React, { use } from "react";
// import { AuthContext } from "../Context/AuthContext";
// import { NavLink } from "react-router";
// import ServicesDetailsData from "./ServicesDetailsData";
// import toast from "react-hot-toast";

// const ServicesAll = () => {
//   const { user, data } = use(AuthContext);
//   //console.log(data);

//   if (!user) {
//     <NavLink to="/user"></NavLink>;
//   }
//   const handleSubscribe=()=>{
//     toast.success('Succefully Added You')
//   }
//   return (
//     <>
//       <h2
//         className="text-center font-bold text-gray-800
//                text-xl sm:text-2xl md:text-3xl lg:text-4xl
//                my-4 sm:my-5 md:my-6"
//       >
//         Explore Our Offerings
//       </h2>
//       <p
//         className="text-center text-gray-600
//               text-sm sm:text-base md:text-lg
//               max-w-2xl w-10/12 mx-auto"
//       >
//         From Health to Fashion, Training to Recreation — Everything Your Cat
//         Needs!
//       </p>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
//         {data &&
//           data.map((data) => (
//             <ServicesDetailsData data={data}></ServicesDetailsData>
//           ))}
//         {/* Form part */}
//       </div>

//       {/* <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 mb-10 ">
//           <div className="text-center">
//             <h1 className="text-4xl my-2">Book Service</h1>
//             <h1>Please enter your Details:</h1>
//           </div>

//         </div> */}

//          <div className="w-10/12 mx-auto mt-10 border-b-2 border-dotted border-gray-400 ">

//         </div>

//       <div className="w-10/12 mx-auto flex flex-col sm:flex-row items-center gap-5 my-5">

//            <h2 className="mt-10 text-gray-700 flex-1 text-4xl font bold text-center sm:text-left">
//                 Choose subscription packages and provide your pet with personalized care.
//             </h2>

//         <div className="flex justify-center items-center mt-10 flex-2">
//           <div className="card w-96 bg-base-100 shadow-sm">
//             <div className="card-body">
//               <span className="badge badge-xs badge-warning">Most Popular</span>
//               <div className="flex justify-between">
//                 <h2 className="text-3xl font-bold">Premium</h2>
//                 <span className="text-xl">$29/mo</span>
//               </div>
//               <ul className="mt-6 flex flex-col gap-2 text-xs">
//                 <li>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-success"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span>Year-round expert cat care.</span>
//                 </li>
//                 <li>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-success"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span>Priority vet appointments.</span>
//                 </li>
//                 <li>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-success"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span>Member-only service discounts.</span>
//                 </li>
//                 <li>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-success"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span>No unnecessary sedative.</span>
//                 </li>
//                 <li className="opacity-50">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-base-content/50"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span className="line-through">
//                   No unhygienic practices.
//                   </span>
//                 </li>
//                 <li className="opacity-50">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-4 me-2 inline-block text-base-content/50"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 13l4 4L19 7"
//                     />
//                   </svg>
//                   <span className="line-through">
//                     Real-time collaboration tools
//                   </span>
//                 </li>
//               </ul>
//               <div className="mt-6">
//                 <button onClick={handleSubscribe} className="btn btn-primary btn-block">Subscribe</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesAll;

import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router";
import ServicesDetailsData from "./ServicesDetailsData";
import toast from "react-hot-toast";

const ServicesAll = () => {
  const { user, data } = use(AuthContext);
  //console.log(data);

  if (!user) {
    <NavLink to="/user"></NavLink>;
  }

  const handleSubscribe = () => {
    toast.success("Successfully Added You");
  };

  const handleViewDetails = (serviceData) => {
    console.log("View details for service:", serviceData);
    toast.success(`Viewing details for ${serviceData.serviceName}`);
  };

  return (
    <>
      <h2
        className="text-center font-bold text-gray-800
               text-xl sm:text-2xl md:text-3xl lg:text-4xl
               my-4 sm:my-5 md:my-6"
      >
        Explore Our Offerings
      </h2>
      <p
        className="text-center text-gray-600
              text-sm sm:text-base md:text-lg
              max-w-2xl w-10/12 mx-auto"
      >
        From Health to Fashion, Training to Recreation — Everything Your Cat
        Needs!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {data &&
          data.map((data) => (
            <ServicesDetailsData
              key={data.serviceId}
              data={data}
              onViewDetails={() => handleViewDetails(data)}
            />
          ))}
        {/* Form part */}
      </div>

      {/* <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 mb-10 ">
          <div className="text-center">
            <h1 className="text-4xl my-2">Book Service</h1>
            <h1>Please enter your Details:</h1>
          </div>


        </div> */}

      <div className="w-10/12 mx-auto mt-10 border-b-2 border-dotted border-gray-400 "></div>

      <div className="px-4 my-4">
        <div className="w-10/12 mx-auto flex flex-col sm:flex-row items-center gap-5 my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan Card */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 to-gray-300"></div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">
                    Basic Care
                  </h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-5xl font-bold text-gray-800">
                      $15
                    </span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Essential care for your beloved cat
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Basic health checkups",
                    "Standard grooming",
                    "Essential vaccinations",
                    "24/7 Customer support",
                    "Monthly health reports",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-cyan-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:ring-cyan-300 focus:outline-none group relative overflow-hidden"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl shadow-2xl border border-cyan-100 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden scale-105">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="absolute -top-4 -right-4">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg rotate-12 block">
                  Most Popular
                </span>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Premium Care
                  </h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      $29
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Complete care for your precious companion
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "Priority vet appointments",
                    "Advanced grooming sessions",
                    "Comprehensive health coverage",
                    "Dedicated care manager",
                    "Emergency service access",
                    "Behavioral training sessions",
                    "Premium dietary consultation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-600 focus:ring-4 focus:ring-blue-300 focus:outline-none group relative overflow-hidden"
                >
                  <span className="relative z-10">Subscribe Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Ultimate Plan Card */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl border border-purple-100 hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Ultimate Care
                  </h3>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-5xl font-bold text-gray-900">
                      $49
                    </span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Elite care for the most cherished cats
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    "24/7 VIP veterinary access",
                    "Luxury spa treatments",
                    "Full medical coverage",
                    "Personal cat butler",
                    "Instant emergency response",
                    "Advanced training programs",
                    "Gourmet meal planning",
                    "Travel companion services",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:ring-purple-300 focus:outline-none group relative overflow-hidden"
                >
                  <span className="relative z-10">Go Ultimate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAll;
