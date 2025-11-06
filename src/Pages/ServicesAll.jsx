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
  const handleSubscribe=()=>{
    toast.success('Succefully Added You')
  }
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
            <ServicesDetailsData data={data}></ServicesDetailsData>
          ))}
        {/* Form part */}
      </div>

      {/* <div className="flex flex-col justify-center items-center mt-2 sm:mt-4 mb-10 ">
          <div className="text-center">
            <h1 className="text-4xl my-2">Book Service</h1>
            <h1>Please enter your Details:</h1>
          </div>

         
        </div> */}

         <div className="w-10/12 mx-auto mt-10 border-b-2 border-dotted border-gray-400 ">

        </div>
      
      <div className="w-10/12 mx-auto flex flex-col sm:flex-row items-center gap-5 my-5">
       

           <h2 className="mt-10 text-gray-700 flex-1 text-4xl font bold text-center sm:text-left">
                Choose subscription packages and provide your pet with personalized care.
            </h2>
      
        <div className="flex justify-center items-center mt-10 flex-2">
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Year-round expert cat care.</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Priority vet appointments.</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Member-only service discounts.</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>No unnecessary sedative.</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                  No unhygienic practices.
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={handleSubscribe} className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAll;
