import { NavLink } from "react-router";
import Marquee from "react-fast-marquee";

//import ContextProvider from "../Context/ContextProvider";
import { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Service from "../Components/Service";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerOne from "../assets/Json-mages/bannerOne.jpg";
import bannerTwo from "../assets/Json-mages/nutrition.jpg";
import bannerThree from "../assets/Json-mages/three.jpg";
import bannerFour from "../assets/Json-mages/rec-5.jpg";
import bannerFive from "../assets/Json-mages/cat-on-harness-1024x683.jpg";
import review from "../assets/Json-mages/review.webp";
import user1 from '../assets/Json-mages/user1.jpg'
import user2 from '../assets/Json-mages/user2.jpg'
import user3 from '../assets/Json-mages/user3.webp'



import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
  useEffect(() => {
 
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
  });

  
  AOS.refresh();
}, []); 

  const { data } = use(AuthContext);

  const trimData = data?.slice(0, 8);
  //console.log(data);

  return (
    <>
      <div className="bg-gray-200 horizontal-x-block  overflow-x-hidden">
        <div className="w-11/12 mx-auto ">

     
        <div className="w-full sm:w-11/12 mx-auto flex justify-center items-center py-3 sm:py-4 relative px-3 mb-2 " data-aos="zoom-in">
          <div className=" pt-4  px-3 ">
            <Marquee>
              |📰 : Welcome to Preety Kitty — Order by 11AM for next day
              delivery.Order before 11 AM and receive your goodies the very next
              day! (Sun-Wed) 🐾|
            </Marquee>
          </div>
        </div>
        <div className="bg-gray-300 py-4 px-6 md:p-5 rounded-full  w-11/12 mx-auto mb-3 hidden sm:block">
          <div className="flex justify-between items-center"  >
              
            <div>
              <a
                href="#WinterCare"
                className="sm:relative cursor-pointer group text-black font-semibold sm:font-bold"
             
              >
                Winter Care Tips
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full "  data-aos="zoom-in"></span>
              </a>
            </div>
            <div>
              <a href="#Vets"
                to="helpContact"
                className="sm:relative cursor-pointer group text-black font-semibold sm:font-bold "
              >
                Meet Our Vets
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
            <div className="hidden ">
              <NavLink
                to=""
                className=" sm:relative cursor-pointer group text-black font-semibold sm:font-bold "
              >
                HELP & CONTACT
                <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto my-10"  data-aos="zoom-in">
          <h2 className="text-center text-2xl text-gray-400 font-bold my-4">
            Keep Your Cat Cozy This Winter
          </h2>
          <p className="text-center font-semibold">
            Show our professional winter care, grooming, and pampering services.
          </p>
        </div>
        <div className="sm:w-11/12 mx-auto"></div>

        {/* Slider create with Swiper */}
        <div className="w-11/12 sm:w-10/12 mx-auto mt-10 ">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true} // makes it infinite
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center my-2 ">
                <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded-full p-3">
                  Nutrition
                </h2>
              </div>
              <img
                src={bannerOne}
                alt="Cat Banner 1"
                className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto rounded-2xl object-cover object-center h-[300px] sm:h-[400px] md:h-[450px] "
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center my-2">
                <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded-full p-3">
                  Health care
                </h2>
              </div>

              <img
                src={bannerTwo}
                alt="Cat Banner 2"
                className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto rounded-2xl object-cover object-center
 h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center my-2">
                <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded-full p-3">
                  Grooming
                </h2>
              </div>

              <img
                src={bannerThree}
                alt="Cat Banner 3"
                className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto rounded-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center my-2">
                <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded-full p-3">
                  Recreation
                </h2>
              </div>

              <img
                src={bannerFour}
                alt="Cat Banner 3"
                className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto rounded-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center items-center my-2">
                <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded-full p-3">
                  Training
                </h2>
              </div>

              <img
                src={bannerFive}
                alt="Cat Banner 3"
                className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto rounded-2xl object-cover h-[300px] sm:h-[400px] md:h-[500px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center items-center mt-10 relative group cursor-pointer">
          <h2 className="text-2xl font-semibold sm:mb-4 bg-gray-400 shadow rounded p-4">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2" data-aos="fade-up"
            // stagger animations
            data-aos-duration="800">
          {trimData && trimData.map((data) => <Service data={data}></Service>)}
        </div>
        <div className="flex justify-center mt-6 pb-5">
          <NavLink to="/servicesAll">
            <button className="btn btn-md  lg:btn-lg xl:btn-xl rounded-2xl bg-gray-400 text-white">
              Show All
            </button>
          </NavLink>
        </div>

        {/* Winter Care Tips */}
        <div id='WinterCare' className=" WinterCare w-10/12 mx-auto mt-5 border-t-2 border-dotted border-t-gray-500" data-aos="fade-up"
            // stagger animations
            data-aos-duration="800" >
          <div className="mt-10 md:mb-3 flex items-center gap-2">
            <i class="fa-solid fa-snowflake"></i>
            <p className="sm:relative cursor-pointer text-black font-semibold sm:font-bold">
              Winter Care Tips :
            </p>
          </div>
        </div>

        <div className="w-10/12 mx-auto py-6" data-aos="fade-left">
          <div
            tabIndex={0}
            className="collapse collapse-plus  border border-base-300 rounded-lg shadow-sm mb-3 bg-black text-white"
          >
            <div className="collapse-title font-semibold text-white">
              Keep Them Warm
            </div>
            <div className="collapse-content text-sm text-white">
              Make sure your cat has a cozy blanket or bed away from cold floors
              and drafts.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 rounded-lg shadow-sm mb-3 bg-black"
          >
            <div className="collapse-title font-semibold text-base text-white">
              Limit Outdoor Time
            </div>
            <div className="collapse-content text-sm text-white">
              Avoid letting your cat stay outside for long periods during cold
              weather.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-black border border-base-300 rounded-lg shadow-sm mb-3"
          >
            <div className="collapse-title font-semibold text-white">
              Provide Proper Nutrition
            </div>
            <div className="collapse-content text-sm text-white">
              Give them a balanced diet to maintain energy and body heat.
            </div>
          </div>

          <div
            tabIndex={0}
            className="collapse collapse-plus bg-black border border-base-300 rounded-lg shadow-sm mb-3"
          >
            <div className="collapse-title font-semibold text-white">
              How do I make sure my cat is safe around heaters?
            </div>
            <div className="collapse-content text-sm text-white">
              Keep heaters covered or out of reach, and ensure your cat doesn't
              sleep too close to them.
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-black border border-base-300 rounded-lg shadow-sm mb-3"
          >
            <div className="collapse-title font-semibold text-white">
              How important is grooming in winter?
            </div>
            <div className="collapse-content text-sm text-white">
              Very important — regular brushing prevents matting and helps their
              fur trap warmth effectively.
            </div>
          </div>
        </div>
        {/* Meet Vets */}

        <div id='Vets' className="pb-[20px]">
          <div className="w-10/12 mx-auto mt-5 border-t-2 border-dotted border-t-gray-500 ">
            <div className="mt-10 flex items-center gap-2">
              <i class="fa fa-stethoscope"></i>
              <p className="sm:relative cursor-pointer text-black font-semibold sm:font-bold">
                Meet With Our Vets
              </p>
            </div>
            {/* Vet Doctor Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-center gap-10 my-5 sm:my-7 md:my-10"  data-aos="fade-down"
  data-aos-duration="1000">
              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300  h-full">
                <div className="hero-content flex flex-col  items-center justify-around  ">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20 object-cover rounded-full  shadow-2xl"
                    src="https://i.ibb.co.com/GY15G6Z/Af.webp"
                  />
                  <div className="text-center text-wrap">
                    <h1 className="text-2xl font-bold">Prof.Kundu</h1>
                    <h2>Assistant Professor</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    Skilled in daily pet care, feeding routines, and assisting
                    senior vets in checkups. Maintains proper hygiene and health
                    records for all animals under care. Observes animal behavior
                    to identify early signs of illness. Supports vaccinations
                    and routine medical procedures efficiently. Communicates
                    effectively with pet owners to provide guidance on care and
                    nutrition.
                  </p>
                </div>
              </div>
              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="hero-content flex flex-col  items-center justify-start  ">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20  rounded-full  shadow-2xl"
                    src="https://i.ibb.co.com/JwGsNX9Q/vec2.jpg"
                  />
                  <div className="text-center">
                    <h1 className="md:text-2xl text-2xl sm:text-sm font-bold text-wrap gap-2">
                      Dr.Das{" "}
                    </h1>
                    <h2>Senior Veterinarian</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    {" "}
                    Dedicated to teaching veterinary science to undergraduate
                    and graduate students. Designs practical sessions for
                    hands-on animal care experience. Researches innovative
                    treatment methods for domestic animals. Guides students in
                    clinical procedures and lab work. Publishes findings to
                    improve veterinary education and practice.
                  </p>
                </div>
              </div>

              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="hero-content flex flex-col items-center justify-around  ">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20 object-cover rounded-full  shadow-2xl"
                    src="https://i.ibb.co.com/Kpmx8mJs/Ex.jpg"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Dr.Khan</h1>
                    <h2>Veterinary Assistant</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    Expert in surgical procedures for domestic and farm animals.
                    Ensures strict adherence to safety and hygiene standards in
                    operations. Prepares pre- and post-operative care plans for
                    recovery. Collaborates with other veterinarians for complex
                    cases. Provides emergency surgical support whenever
                    required.
                  </p>
                </div>
              </div>
              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="hero-content flex flex-col  items-center justify-around  ">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20 object-cover rounded-full  shadow-2xl"
                    src="https://i.ibb.co.com/gLdKdRnc/Ex-2.jpg"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Dr.Bose</h1>
                    <h2>Veterinary Surgeon</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    Provides specialized guidance on animal health and
                    nutrition. Evaluates and designs preventive health programs
                    for farms and clinics. Advises on treatment plans for
                    chronic or complex conditions. Conducts workshops and
                    training for pet owners and staff. Keeps updated with latest
                    veterinary research to ensure best practices.
                  </p>
                </div>
              </div>
              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="hero-content flex flex-col  items-center justify-around  ">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20 object-cover rounded-full   shadow-2xl"
                    src="https://i.ibb.co.com/0y5mD0qZ/Sc.jpg"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Dr.Karim</h1>
                    <h2>Veterinary Consultant</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    Purely positioned consequences provide a smooth flow. Great
                    pharetra (a type of support or structure) with elite veins.
                    Sit and suspend yourself. Sit with laughter; the morbid
                    pregnancy of the support of life. Every element dances in
                    harmony, creating an unbroken rhythm of existence.
                  </p>
                </div>
              </div>
              <div className="bg-base-200 rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="hero-content flex flex-col  items-center justify-around  gap-4">
                  <img
                    className="h-25 w-25 md:h-20 md:w-20 object-cover rounded-full  shadow-2xl"
                    src="https://i.ibb.co.com/JR2F0HRQ/Si.jpg"
                  />
                  <div className="text-center">
                    <h1 className="text-2xl font-bold">Dr.Khatul</h1>
                    <h2>Veterinary Assistant</h2>
                  </div>
                </div>
                <div className="mx-5 my-3 ">
                  <p>
                    Specializes in surgery and diagnostics for small and large
                    animals. Performs routine and emergency medical procedures
                    with precision. Mentors junior staff and assists in
                    developing treatment plans. Monitors recovery progress and
                    ensures effective post-surgery care. Offers expert advice to
                    pet owners on nutrition and preventive care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-[100px] w-10/12 mx-auto ">
          <div className="mt-5 border-t-2 border-dotted border-t-gray-500"></div>
          <div className="mt-5 md:mb-3 flex flex-col sm:flex-row items-center justify-between gap-2  ">
            <h2 className="mt-10 text-gray-700 text-4xl font bold flex-1 text-center sm:text-left">
              Feedback From Real Pet Owners
            </h2>
            <div className="flex-2 ">
              <div
                className="hero h-full sm:min-h-[70vh] md:min-h-[80vh] mt-10 bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg"
                style={{
                  backgroundImage: `url(${review})`,
                }}
              >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-2xl md:text-5xl  font-bold">
                      Caring For Your Pets Like Family
                    </h1>
                    <p className="mb-5">
                      Our team provides trusted veterinary care and professional
                      grooming to keep your pets happy and healthy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
            <div className="mt-10" data-aos="fade-up"
>
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-sm text-black tracking-wide">
                  Review on this week
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src={user1}
                    />
                  </div>
                  <div>
                    <div>Mrinal Sen</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Cat Owner Review
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "I brought my cat Luna in for a sudden limp — the team was calm, thorough, and kind. They explained the diagnosis clearly, provided a treatment plan I could follow at home, and checked in after the visit. Luna is doing much better — highly recommended."
                  </p>
               
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src={user2}
                    />
                  </div>
                  <div>
                    <div>Nirmol Chowdhury</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                     Cat Owner Feedback
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                   "My cat, Whiskers, had a recurring skin issue. The vets carefully examined her, explained the causes, and suggested a personalized care routine. Their follow-ups ensured Whiskers healed properly. The team's expertise and compassion made all the difference!"
                  </p>
                  
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src={user3}
                    />
                  </div>
                  <div>
                    <div>Sabrino Gardener</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                       Cat Owner Feedback
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "I brought my kitten, Simba, for his first vaccination. The staff were patient, gentle, and explained everything about his care. They even gave tips for feeding and playtime. Simba felt comfortable, and I left fully confident in their services."
                  </p>
                
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
           
          </div>
   </div>
      </div>
    </>
  );
};

export default Home;
