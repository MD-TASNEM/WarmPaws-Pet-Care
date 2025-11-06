import React from 'react';
import { Link } from 'react-router';
//import { data } from 'react-router';

const ServicesDetailsData = ({data}) => {
    //console.log(data);
    return (
      <>
     
         <div className="max-w-6xl mx-auto px-3 sm:px-3 md:px-6 py-6 mt-10">
      <div className="w-full bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between h-[380px] sm:h-[400px] md:h-[420px]">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 px-4 pt-4 truncate text-center ">
          {data.category}
        </h2>

        <figure className="px-4 pt-2 flex justify-center ">
          <img
            src={data.image}
            alt={data.category}
            className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-xl"
          />
        </figure>

        <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
          <h3 className="font-medium flex items-center gap-1">
            <i className="fa-regular fa-star "></i> {data.rating}
          </h3>
          <h3 className="text-green-600 font-semibold text-sm sm:text-base">
            ${data.price}
          </h3>
        </div>

        <div className="flex justify-center px-4 pb-4">
          <Link
            to={`/serviceDetails/${data.serviceId}`}
            className="btn btn-outline btn-xs sm:btn-sm md:btn-md w-full rounded-lg flex justify-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
    </>
    
    );
};

export default ServicesDetailsData;