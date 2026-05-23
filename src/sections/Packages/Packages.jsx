import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import dubaiImg from "../../assets/destinations/dubai.webp";
import parisImg from "../../assets/destinations/paris.webp";
import maldivesImg from "../../assets/destinations/maldives.webp";
import londonImg from "../../assets/destinations/london.webp";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Packages() {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Dubai Luxury Package",
      image: dubaiImg,
      duration: "5D / 4N",
      price: "₹79,999",
      includes: "Flight + 5★ Hotel + Desert Safari",
      tag: "Luxury",
    },
    {
      name: "Paris Honeymoon Package",
      image: parisImg,
      duration: "6D / 5N",
      price: "₹99,999",
      includes: "Eiffel View Hotel + Cruise Dinner",
      tag: "Honeymoon",
    },
    {
      name: "Maldives Beach Package",
      image: maldivesImg,
      duration: "4D / 3N",
      price: "₹69,999",
      includes: "Water Villa + Private Beach",
      tag: "Beach",
    },
     {
      name: "Londons Luxury Package",
      image: londonImg,
      duration: "4D / 3N",
      price: "₹82,999",
      includes: "Water Villa + Private Beach",
      tag: "Beach",
    },
  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white flex flex-col gap-6">
       

      {/* HERO */}
      <section className="pt-28 pb-8 text-center px-4 flex flex-col gap-3">

        <p className="text-white/40 text-sm mt-2">
          Luxury travel, simplified for you.
        </p>
      </section>

      {/* SWIPER */}
      <section className="pb-24 flex justify-center">

        <div className="w-full max-w-5xl px-4">

        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}
  loop={true}
  navigation
  pagination={{ clickable: true }}

  autoplay={{
    delay: 900,              // 🔥 fast switching
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}

  speed={700}                // 🔥 smooth but quick transition

  grabCursor={true}
  watchSlidesProgress={true}
  resistanceRatio={0.85}

  className="w-full"
>

            {packages.map((item, i) => (
              <SwiperSlide key={i}>

                <div className="flex justify-center px-3">

                  <div className="
                    w-full max-w-2xl

                    bg-white/5
                    border border-white/10
                    rounded-2xl

                    overflow-hidden

                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  ">

                    {/* IMAGE */}
                    <div className="relative h-[200px] sm:h-[200px]">

                      <img
                        src={item.image}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        alt={item.name}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute top-2 right-2 text-xs px-2 bg-sky-500/80 text-sky-300 rounded-full">
                        {item.tag}
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <h2 className="text-xl sm:text-2xl font-semibold">
                          {item.name}
                        </h2>
                        <p className="text-white/60 text-sm">
                          {item.duration}
                        </p>
                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col items-center text-center space-y-3">

                      <p className="text-white/50 text-sm max-w-md">
                        {item.includes}
                      </p>

                      <div className="flex gap-10 text-sm">

                        <div>
                          <p className="text-white/40 text-xs">Duration</p>
                          <p>{item.duration}</p>
                        </div>

                        <div>
                          <p className="text-white/40 text-xs">Price</p>
                          <p className="text-sky-400 font-semibold">
                            {item.price}
                          </p>
                        </div>

                      </div>

                      <button
                        onClick={() => navigate("/booking")}
                        className="
                          w-full max-w-xs
                          py-3 text-sm font-medium

                          bg-gradient-to-r from-sky-500 to-blue-600
                          text-black

                          rounded-xl

                          hover:from-sky-400 hover:to-sky-500

                          transition
                        "
                      >
                        Book Package ✈️
                      </button>

                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

       

<section className="pb-10 px-4 sm:px-6 lg:px-8 flex justify-center">

  <div className="w-full max-w-6xl0">

    {/* HEADER */}
    <div className="text-center space-y-2">
      <p className="text-lg sm:text-2xl font-bold mt-8">
        🔥 Limited Time Offers
      </p>
      <p className="text-white/50 text-sm sm:text-base">
        Exclusive deals crafted for luxury travelers
      </p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">

      {/* CARD 1 */}
      <div className="
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5 backdrop-blur-xl

        p-6 sm:p-8

        flex flex-col items-center text-center

        hover:scale-[1.02]
        transition-all duration-300

        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      ">

        <div className="absolute -top-20 -right-20 w-60 h-60 bg-sky-500/20 blur-[100px]" />

        <div className="absolute top-5 right-5 text-xs px-3 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/20">
          -20% LIMITED
        </div>

        <h3 className="text-lg sm:text-xl font-semibold">
          Dubai Luxury Escape ✈️
        </h3>

        <p className="text-white/50 text-sm mt-2">
          5★ Hotel • Desert Safari • Flight Included
        </p>

        <div className="h-[1px] bg-white/10 w-full my-5" />

        <p className="text-white/40 text-xs">Starting From</p>
        <p className="text-sky-400 text-xl sm:text-2xl font-semibold mt-1">
          ₹59,999
        </p>

        <button className="
          mt-5 px-5 py-2.5 text-sm

          bg-gradient-to-r from-sky-500 to-blue-600
          text-black font-medium

          rounded-xl

          hover:from-sky-400 hover:to-sky-500

          transition
        ">
          Book Now
        </button>

      </div>

      {/* CARD 2 */}
      <div className="
        relative overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5 backdrop-blur-xl

        p-6 sm:p-8

        flex flex-col items-center text-center

        hover:scale-[1.02]
        transition-all duration-300

        shadow-[0_10px_40px_rgba(0,0,0,0.5)]
      ">

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 blur-[100px]" />

        <div className="absolute top-5 right-5 text-xs px-3 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-500/20">
          -30% LIMITED
        </div>

        <h3 className="text-lg sm:text-xl font-semibold">
          Maldives Paradise 🌴
        </h3>

        <p className="text-white/50 text-sm mt-2">
          Water Villa • Private Beach • Candle Dinner
        </p>

        <div className="h-[1px] bg-white/10 w-full my-5" />

        <p className="text-white/40 text-xs">Starting From</p>
        <p className="text-purple-400 text-xl sm:text-2xl font-semibold mt-1">
          ₹49,999
        </p>

        <button className="
          mt-5 px-5 py-2.5 text-sm

          bg-gradient-to-r from-purple-500 to-pink-600
          text-black font-medium

          rounded-xl

          hover:from-purple-400 hover:to-pink-500

          transition
        ">
          Book Now
        </button>

      </div>

    </div>

  </div>

</section>

        </div>

      </section>


    </div>
  );
}