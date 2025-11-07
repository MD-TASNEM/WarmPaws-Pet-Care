import { NavLink } from "react-router";
import Marquee from "react-fast-marquee";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Service from "../Components/Service";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

// Images
import bannerOne from "../assets/Json-mages/bannerOne.jpg";
import bannerTwo from "../assets/Json-mages/nutrition.jpg";
import bannerThree from "../assets/Json-mages/three.jpg";
import bannerFour from "../assets/Json-mages/rec-5.jpg";
import bannerFive from "../assets/Json-mages/cat-on-harness-1024x683.jpg";
import reviewBg from "../assets/Json-mages/review.webp";
import user1 from "../assets/Json-mages/user1.jpg";
import user2 from "../assets/Json-mages/user2.jpg";
import user3 from "../assets/Json-mages/user3.webp";

const Home = () => {
  const { data } = useContext(AuthContext);
  const trimData = data?.slice(0, 8);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* Hero Marquee */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-4" data-aos="fade-down">
            <Marquee gradient={false} speed={50}>
              <span className="text-sm md:text-base font-medium text-purple-800">
                📰 Welcome to Pretty Kitty — Order by 11AM for next-day delivery
                (Sun-Wed) 🐾
              </span>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center" data-aos="zoom-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Keep Your Cat Cozy This Winter
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional winter care, premium grooming, and personalized
            pampering services tailored for your feline companion.
          </p>
        </div>
      </section>

      {/* Swiper Banner Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            loop
            className="rounded-3xl shadow-2xl overflow-hidden"
          >
            {[
              { img: bannerOne, title: "Nutrition", color: "bg-pink-100" },
              { img: bannerTwo, title: "Health Care", color: "bg-purple-100" },
              { img: bannerThree, title: "Grooming", color: "bg-indigo-100" },
              { img: bannerFour, title: "Recreation", color: "bg-rose-100" },
              { img: bannerFive, title: "Training", color: "bg-violet-100" },
            ].map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                  <img
                    src={slide.img}
                    alt={`${slide.title} for cats`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                    <span
                      className={`${slide.color} text-white px-8 py-4 rounded-full text-2xl md:text-4xl font-bold shadow-lg`}
                    >
                      {slide.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Premium Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Tailored care for every stage of your cat's life
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {trimData?.map((service, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Service data={service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink to="/servicesAll">
              <button className="btn btn-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 hover:from-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                Explore All Services
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Winter Care Tips */}
      <section
        id="WinterCare"
        className="py-20 bg-gradient-to-br from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 text-white">
              ⛄
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Winter Care Tips
              </h2>
              <p className="text-gray-600 mt-2">
                Keep your feline friend warm and cozy this season
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Keep Them Warm",
                content:
                  "Provide heated beds and cozy blankets away from cold drafts and floors.",
                icon: "🔥",
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Limit Outdoor Time",
                content:
                  "Reduce exposure to cold, wet conditions during winter months.",
                icon: "🏠",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Boost Nutrition",
                content:
                  "Increase calorie intake to maintain body heat and energy levels.",
                icon: "🍲",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Safe Heating",
                content:
                  "Never let cats sleep directly on heaters to prevent burns.",
                icon: "⚠️",
                color: "from-yellow-500 to-amber-500",
              },
              {
                title: "Regular Grooming",
                content:
                  "Brushing helps maintain insulating fur coat and prevents matting.",
                icon: "✨",
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Hydration Check",
                content:
                  "Ensure fresh water is always available, as indoor heating can cause dehydration.",
                icon: "💧",
                color: "from-purple-500 to-violet-500",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tip.color}`}
                ></div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`text-2xl bg-gradient-to-r ${tip.color} rounded-lg p-2 text-white`}
                    >
                      {tip.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Vets */}
      <section id="Vets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12" data-aos="fade-left">
            <div className="text-4xl text-purple-600">🩺</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet Our Expert Vets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Prof. Kundu",
                title: "Assistant Professor",
                img: "https://i.ibb.co.com/GY15G6Z/Af.webp",
              },
              {
                name: "Dr. Das",
                title: "Senior Veterinarian",
                img: "https://i.ibb.co.com/JwGsNX9Q/vec2.jpg",
              },
              {
                name: "Dr. Khan",
                title: "Veterinary Surgeon",
                img: "https://i.ibb.co.com/Kpmx8mJs/Ex.jpg",
              },
              {
                name: "Dr. Bose",
                title: "Lead Surgeon",
                img: "https://i.ibb.co.com/gLdKdRnc/Ex-2.jpg",
              },
              {
                name: "Dr. Karim",
                title: "Consultant",
                img: "https://i.ibb.co.com/0y5mD0qZ/Sc.jpg",
              },
              {
                name: "Dr. Khatul",
                title: "Surgical Specialist",
                img: "https://i.ibb.co.com/JR2F0HRQ/Si.jpg",
              },
            ].map((vet, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-200 group-hover:border-purple-400 transition-all">
                    <img
                      src={vet.img}
                      alt={vet.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {vet.name}
                  </h3>
                  <p className="text-purple-600 font-medium">{vet.title}</p>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {i === 0
                      ? "Specialized in preventive care and nutrition planning."
                      : i === 1
                      ? "20+ years in feline medicine and emergency care."
                      : "Expert in advanced surgical procedures and recovery."}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Loved by Pet Parents Everywhere
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: `url(${reviewBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "500px",
              }}
              data-aos="fade-right"
            >
              <div className="bg-black/50 h-full flex items-center justify-center p-10">
                <div className="text-center">
                  <h3 className="text-3xl md:text-5xl font-bold mb-6">
                    Caring For Your Pets Like Family
                  </h3>
                  <p className="text-xl opacity-90">
                    Trusted veterinary care and professional grooming since
                    2018.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8" data-aos="fade-left">
              {[
                {
                  name: "Mrinal Sen",
                  role: "Luna's Mom",
                  img: user1,
                  text: "They saved my cat's life during an emergency. Compassionate and highly skilled!",
                },
                {
                  name: "Nirmol Chowdhury",
                  role: "Whiskers' Dad",
                  img: user2,
                  text: "Best grooming service in town. My Persian looks like a show cat every time!",
                },
                {
                  name: "Sabrina Gardener",
                  role: "Simba's Human",
                  img: user3,
                  text: "From kitten vaccines to senior care — they've been with us every step.",
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">{review.name}</h4>
                          <p className="text-sm opacity-80">{review.role}</p>
                        </div>
                        <div className="text-3xl">⭐⭐⭐⭐⭐</div>
                      </div>
                      <p className="mt-3 text-gray-100 italic">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl4xl font-bold mb-6">
            Ready to Pamper Your Kitty?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Book an appointment or shop premium products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NavLink to="/">
              <button className="btn btn-lg bg-white text-purple-700 hover:bg-gray-100 font-bold">
                Book Appointment
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-purple-700 font-bold">
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
