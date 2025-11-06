import React from "react";
import bkash from "../assets/bkash-logo-free-vector.jpg";
import dbbl from "../assets/nexus-pay-mobile-banking-app-logo-premium-quality-vector-55496380.avif";
import nogod from "../assets/unnamed.jpg";
import rocket from "../assets/rocketpng.png";
// import gPay from '../assets/gPay(1).jpg'
import upay from "../assets/upay.webp";
import toast from "react-hot-toast";

const Footer = () => {
  const hanleEasyBtn=(e)=>{
    e.preventDefault();
    toast.success('Thank you for staying with us');
  }
  return (
    <div className="bg-black text-white pb-5">
      {/* Main 1st Parent */}
      <div className="my-5 px-10 grid grid-cols-1 sm:grid-cols-3 sm:gap-10 gap-5 items-center">
        {/* 1st Child */}
        <div className="col-span-1">
          <h2 className="mb-3 pt-2 text-center text-[25px]">Reviews</h2>
          <div className="bg-white text-black py-3 px-5 rounded-2xl ">
            <div className="text-center mb-2">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <h2 className="text-center">
              <span className="font-bold  text-[20px] ">4.84</span> out of 5
            </h2>
            <h2 className="text-center">
              <span className="font-bold text-[20px] text-center">6,500 </span>
              Reviews
            </h2>
          </div>
          <div>
            <div className="bg-black shadow rounded-2xl mt-[-8px] px-3">
              <div className="flex justify-center items-center  border-8 border-black">
                <i className="fa-solid fa-star  text-black bg-white rounded-full m-3"></i>
                <h2 className="text-[25px]">
                  TRUSTPILOT<span className="text-[14px]">.com</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Child */}
        <div className="col-span-1">
          <h2 className="mb-3 pt-2 text-center text-[25px]">Contact</h2>
          <h2 className="text-center my-2">Email: hello@warmhouse.com</h2>
          <h2 className="text-center my-2">Call us: 01392 881380</h2>

          <h2 className="my-4 text-center">Follow Us</h2>
          <p className="my-4 text-center">
            Share your creations and join the conversation.
          </p>

          <div className="flex justify-center items-center text-white gap-2 ">
            <h2 className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition duration-300">
              <i className="fa-brands fa-facebook"></i>
            </h2>
            <h2 className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center  hover:bg-white hover:text-black transition duration-300">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </h2>
            <h2 className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center  hover:bg-white hover:text-black transition duration-300">
              {" "}
              <i className="fa-brands fa-twitter"></i>
            </h2>
            <h2 className="bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center  hover:bg-white hover:text-black transition duration-300">
              {" "}
              <i className="fa-brands fa-youtube"></i>
            </h2>
          </div>
        </div>

        {/* 3rd Child */}
        <div className="col-span-1">
          <h2 className="mb-3 pt-2 text-center text-[25px]">Free Delivery</h2>
          <p className="text-center my-2">
            Join our flock for Free Delivery on your first order. Get exclusive
            offers, new product updates, and seasonal recipes.
          </p>

          <form onSubmit={hanleEasyBtn}>
            <div className="mt-5 flex justify-center items-center px-3">
              <div className="flex flex-col md:flex-row w-full gap-3">
                <input
                  type="email"
                  name="email"
                  className="w-full flex-1 h-12 px-4 font-semibold rounded p-3 border-2 border-gray-300"
                  placeholder="Email us"
                  required
                />

                <button
                  type="submit"
                  className="h-12 px-6 bg-gray-300 hover:text-white font-semibold rounded text-black hover:scale-105 transition cursor-pointer duration-300 hover:bg-gray-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Main 2nd Parent */}

      {/* Last Part */}

      <div className="flex flex-col sm:flex-row justify-between items-center p-10 w-10/12">
        <h2 className="px-3 flex justify-center items-center">
          Privacy Policy | Terms of use Terms & Conditions |
        </h2>
        <div>
          <h2 className="my-5 sm:mt-0">We accept,</h2>
          <div className="flex items-center mt-3 gap-3">
            <div className="h-6 w-8 bg-white">
              <img className=" " src={bkash} alt="" />
            </div>
            <div className="h-6 w-8 bg-white">
              <img className=" " src={dbbl} alt="" />
            </div>
            <div className="h-6 w-8 bg-white">
              <img className=" " src={nogod} alt="" />
            </div>
            <div className="h-6 w-8 bg-white">
              <img className=" " src={rocket} alt="" />
            </div>
            <div className="h-6 w-8 bg-white">
              <img className=" " src={upay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
