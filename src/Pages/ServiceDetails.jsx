import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { data } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic" });
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    toast.success("Booking Confirmed! 🐾", {
      style: {
        borderRadius: "10px",
        background: "#1e1b4b",
        color: "#fff",
      },
    });
    e.target.reset();
  };

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="loading loading-dots loading-lg text-pink-500"></span>
      </div>
    );

  const service = data.find(
    (item) => Number(item.serviceId) === Number(serviceId)
  );

  if (!service)
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <p className="text-lg text-gray-600 font-medium">
          Service not found 😿
        </p>
      </div>
    );

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-purple-900 via-fuchsia-800 to-pink-700 py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
            data-aos="fade-up"
          >
            {service.category}
          </h1>
          <p
            className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Premium feline care and luxury comfort — because your cat deserves
            nothing less.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        {/* Service Card */}
        <div
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="grid md:grid-cols-2">
            {/* Left: Image */}
            <div className="relative overflow-hidden">
              <img
                src={service.image}
                alt={service.category}
                className="w-full h-80 md:h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent"></div>
            </div>

            {/* Right: Details */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {service.category}
              </h2>
              <div className="flex items-center justify-between mb-5 text-gray-700">
                <p>
                  ⭐{" "}
                  <span className="font-semibold text-gray-800">
                    {service.rating}
                  </span>
                </p>
                <p className="text-green-600 font-bold text-2xl">
                  ${service.price}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                {service.description}
              </p>

              <button
                onClick={() =>
                  toast("Booking started!", {
                    icon: "🐱",
                    style: {
                      background: "#4c1d95",
                      color: "#fff",
                      borderRadius: "10px",
                    },
                  })
                }
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-pink-500/40 transform hover:scale-105 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div
          className="mt-24 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-10 md:p-14"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Reserve Your Spot
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Fill in your details below — we’ll confirm your service booking
              right away.
            </p>
          </div>

          <form
            onSubmit={handleBook}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            <div className="col-span-1">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                placeholder="Enter first name"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                placeholder="Enter last name"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div className="col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>

        {/* Related Services */}
        <div
          className="mt-28 text-center"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Related Services
          </h3>
          <p className="text-gray-600 mb-10">
            You may also like these premium offerings for your feline friend:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data
              .filter((s) => s.serviceId !== service.serviceId)
              .slice(0, 3)
              .map((related, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                  <img
                    src={related.image}
                    alt={related.category}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-6 text-left">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {related.category}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {related.description}
                    </p>
                    <span className="text-pink-600 font-semibold">
                      ${related.price}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
