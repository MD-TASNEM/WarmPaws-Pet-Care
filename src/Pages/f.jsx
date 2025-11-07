import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router";
import ServicesDetailsData from "./ServicesDetailsData";
import toast from "react-hot-toast";

const ServicesAll = () => {
  const { user, data } = use(AuthContext);

  if (!user) {
    <NavLink to="/user"></NavLink>;
  }

  const handleSubscribe = () => {
    toast.success('Successfully Added You');
  };

  const handleViewDetails = (id) => {
    // Handle view details functionality
    console.log("View details for service:", id);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 py-20 mb-16 rounded-3xl mx-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10 text-center">
          <h2 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 drop-shadow-2xl leading-tight">
            Explore Our <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Offerings</span>
          </h2>
          <p className="text-white/95 text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-medium leading-relaxed">
            From Health to Fashion, Training to Recreation — Everything Your Cat Deserves!
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 mb-20">
        {data &&
          data.map((service) => (
            <div key={service.id} className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>

              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/20 rounded-2xl shadow-2xl border border-cyan-100/50 group-hover:border-cyan-200/70 group-hover:shadow-3xl transform group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/api/placeholder/400/300"}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features?.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Buttons */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        ${service.price}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">/session</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => handleViewDetails(service.id)}
                    className="w-full bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 border border-gray-200 py-3 px-4 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-gray-300 focus:outline-none relative overflow-hidden group flex items-center justify-center"
                  >
                    <span className="relative z-10 flex items-center">
                      View Details
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
      </div>

      {/* Pricing Cards Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Select the perfect subscription package for your feline friend's needs
          </p>
        </div>
 

        {/* Trust Badges */}
        <div className="text-center mt-16">
          <div className="flex flex-wrap justify-center gap-8 items-center text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>30-day money back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>No hidden fees</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAll;