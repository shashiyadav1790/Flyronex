import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import dubaiImg from "../../assets/destinations/dubai.webp";
import parisImg from "../../assets/destinations/paris.webp";
import maldivesImg from "../../assets/destinations/maldives.webp";
import londonImg from "../../assets/destinations/london.webp";

import "swiper/css";
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
      name: "London Luxury Package",
      image: londonImg,
      duration: "4D / 3N",
      price: "₹82,999",
      includes: "Luxury Hotel + City Tour",
      tag: "Premium",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="pt-28 sm:pt-32 pb-14 px-4 text-center">

        <div className="max-w-4xl mx-auto space-y-5">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-300 text-xs tracking-[2px] uppercase">
            Premium Travel Experience
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Luxury Packages
            <span className="block text-sky-400">
              Crafted For You
            </span>
          </h1>

          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover premium destinations with luxury stays, curated experiences,
            and unforgettable journeys across the world.
          </p>

        </div>

      </section>

      {/* SWIPER */}
      <section className="pb-24 flex justify-center px-4">

        <div className="w-full max-w-6xl">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            grabCursor={true}
            className="w-full"
          >

            {packages.map((item, i) => (

              <SwiperSlide key={i}>

                <div className="flex justify-center">

                  <div
                    className="
                      relative overflow-hidden
                      w-full max-w-5xl
                      rounded-[32px]
                      border border-white/10
                      bg-white/5 backdrop-blur-2xl

                      shadow-[0_20px_80px_rgba(0,0,0,0.5)]

                      grid lg:grid-cols-2
                    "
                  >

                    {/* IMAGE */}
                    <div className="relative h-[200px] sm:h-[300px] lg:h-full overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="
                          w-full h-full object-cover
                          scale-100 hover:scale-110
                          transition duration-700
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* TAG */}
                      <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-xs uppercase tracking-[2px] text-sky-300">
                        {item.tag}
                      </div>

                      {/* PRICE */}
                      <div className="absolute bottom-5 left-5">

                        <p className="text-white/60 text-sm">
                          Starting From
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-semibold text-sky-400">
                          {item.price}
                        </h2>

                      </div>

                    </div>

                    {/* CONTENT */}
                    <div className="relative p-4 sm:p-5 flex flex-col justify-center">

                      <div className="space-y-6">

                        <div>

                          <p className="text-sky-400 text-sm uppercase tracking-[3px] mb-3">
                            Premium Package
                          </p>

                          <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
                            {item.name}
                          </h2>

                        </div>

                        <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                          {item.includes}
                        </p>

                        {/* INFO */}
                        <div className="grid grid-cols-2 gap-4">

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                            <p className="text-white/40 text-xs uppercase tracking-[2px]">
                              Duration
                            </p>

                            <h3 className="text-lg font-semibold mt-2">
                              {item.duration}
                            </h3>

                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

                            <p className="text-white/40 text-xs uppercase tracking-[2px]">
                              Price
                            </p>

                            <h3 className="text-lg font-semibold mt-2 text-sky-400">
                              {item.price}
                            </h3>

                          </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">

                          <button
                            onClick={() => navigate("/contact")}
                            className="
                              flex-1
                              py-3.5 px-6

                              rounded-2xl

                              bg-gradient-to-r from-sky-500 to-blue-600
                              text-black font-semibold

                              hover:scale-[1.02]
                              hover:shadow-[0_10px_40px_rgba(14,165,233,0.35)]

                              transition-all duration-300
                            "
                          >
                            Book Package ✈️
                          </button>

                          <button
                            onClick={() => navigate("/destinations")}
                            className="
                              flex-1
                              py-3.5 px-6

                              rounded-2xl

                              border border-white/10
                              bg-white/5

                              hover:bg-white/10
                              hover:border-sky-400/30

                              transition-all duration-300
                            "
                          >
                            Explore More
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      {/* OFFERS */}
      <section className="pb-24 px-4">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14 space-y-3">

            <p className="text-sky-400 uppercase tracking-[3px] text-sm">
              Exclusive Deals
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold">
              Limited Time Offers 🔥
            </h2>

            <p className="text-white/50 text-sm sm:text-base">
              Handpicked luxury experiences with premium savings
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div
              className="
                relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5 backdrop-blur-2xl

                p-8 sm:p-10

                hover:border-sky-400/20
                hover:-translate-y-1

                transition-all duration-500
              "
            >

              <div className="absolute -top-20 -right-20 w-72 h-72 bg-sky-500/10 blur-[120px]" />

              <div className="relative z-10 space-y-5">

                <div className="inline-flex px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs tracking-[2px]">
                  -20% LIMITED
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Dubai Luxury Escape ✈️
                </h3>

                <p className="text-white/50 leading-relaxed">
                  5★ Hotel • Desert Safari • VIP Airport Transfer • Flight Included
                </p>

                <div className="h-[1px] bg-white/10" />

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[2px]">
                      Starting From
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold text-sky-400 mt-2">
                      ₹59,999
                    </h2>
                  </div>

                  <button
                    onClick={() => navigate("/contact")}
                    className="
                      px-5 py-3
                      rounded-2xl
                      bg-gradient-to-r from-sky-500 to-blue-600
                      text-black font-semibold

                      hover:scale-105
                      transition
                    "
                  >
                    Book Now
                  </button>

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div
              className="
                relative overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-white/5 backdrop-blur-2xl

                p-8 sm:p-10

                hover:border-purple-400/20
                hover:-translate-y-1

                transition-all duration-500
              "
            >

              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500/10 blur-[120px]" />

              <div className="relative z-10 space-y-5">

                <div className="inline-flex px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs tracking-[2px]">
                  -30% LIMITED
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Maldives Paradise 🌴
                </h3>

                <p className="text-white/50 leading-relaxed">
                  Water Villa • Candle Dinner • Private Beach • Luxury Stay
                </p>

                <div className="h-[1px] bg-white/10" />

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[2px]">
                      Starting From
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-semibold text-purple-400 mt-2">
                      ₹49,999
                    </h2>
                  </div>

                  <button
                    onClick={() => navigate("/contact")}
                    className="
                      px-5 py-3
                      rounded-2xl
                      bg-gradient-to-r from-purple-500 to-pink-600
                      text-black font-semibold

                      hover:scale-105
                      transition
                    "
                  >
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}