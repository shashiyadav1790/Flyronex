import { useNavigate } from "react-router-dom";

import {
  Plane,
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Headphones,
  BadgeDollarSign,
  Zap,
} from "lucide-react";



import dubaiImg from "../../assets/destinations/dubai.webp";
import parisImg from "../../assets/destinations/paris.webp";
import maldivesImg from "../../assets/destinations/maldives.webp";
import londonImg from "../../assets/destinations/london.webp";

import shimlaImg from "../../assets/destinations/shimla.webp";
import kashmirImg from "../../assets/destinations/kashmir.webp";
import goaImg from "../../assets/destinations/goa.webp";
import ladakhImg from "../../assets/destinations/ladakh.webp";
import andamanImg from "../../assets/destinations/andaman.webp";
import thailandImg from "../../assets/destinations/thailand.webp";
import vietnamImg from "../../assets/destinations/vietnam.webp";
import baliImg from "../../assets/destinations/bali.webp";



export default function Destinations() {

  const navigate = useNavigate();

  const destinations = [
  {
    name: "Dubai",
    image: dubaiImg,
    desc: "Luxury Escape",
    price: "₹45,999",
  },

  {
    name: "Delhi • Shimla • Manali",
    image: shimlaImg,
    desc: "Mountain Paradise",
    price: "₹11,999",
  },

  {
    name: "Kashmir",
    image: kashmirImg,
    desc: "Heaven on Earth",
    price: "₹14,999",
  },

  {
    name: "Goa",
    image: goaImg,
    desc: "Beach Holiday",
    price: "₹12,999",
  },

  {
    name: "Ladakh",
    image: ladakhImg,
    desc: "Adventure Destination",
    price: "₹25,999",
  },

  {
    name: "Andaman",
    image: andamanImg,
    desc: "Island Escape",
    price: "₹21,999",
  },

  {
    name: "Thailand",
    image: thailandImg,
    desc: "International Getaway",
    price: "₹19,999",
  },

  {
    name: "Vietnam",
    image: vietnamImg,
    desc: "Nature & Culture",
    price: "₹21,999",
  },

  {
    name: "Bali",
    image: baliImg,
    desc: "Luxury Island",
    price: "₹29,999",
  },

  {
    name: "Paris",
    image: parisImg,
    desc: "Romantic City",
    price: "₹62,999",
  },

  {
    name: "Maldives",
    image: maldivesImg,
    desc: "Beach Paradise",
    price: "₹39,999",
  },

  {
    name: "London",
    image: londonImg,
    desc: "Royal Experience",
    price: "₹70,999",
  },
];

  const whyChoose = [
    {
      title: "Best Price",
      desc: "Affordable luxury travel deals.",
      icon: <BadgeDollarSign size={26} />,
    },

    {
      title: "Fast Booking",
      desc: "Instant and secure reservations.",
      icon: <Zap size={26} />,
    },

    {
      title: "24/7 Support",
      desc: "Always here for your journey.",
      icon: <Headphones size={26} />,
    },

    {
      title: "Trusted Flights",
      desc: "Verified airline partnerships.",
      icon: <ShieldCheck size={26} />,
    },
  ];

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* PREMIUM GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_40%)]"></div>

      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 text-center mt-8">

        <div className="flex justify-center items-center gap-2 mb-4">

          <Plane className="text-sky-400" size={16} />

          <p className="uppercase tracking-[4px] text-sky-300 text-[10px] sm:text-xs">
            Premium Travel Destinations
          </p>

        </div>

        <h1 className="text-[clamp(2rem,6vw,4rem)] leading-[1.05] font-light max-w-6xl mx-auto">

          Discover The World's Most

          <span className="block font-semibold bg-gradient-to-r from-sky-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Luxury Destinations
          </span>

        </h1>

        <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mt-6 leading-relaxed px-2">
          Explore breathtaking destinations with Fly Ronex.
          Premium journeys, luxury stays, and unforgettable travel experiences crafted for modern travelers.
        </p>

      </section>

      {/* DESTINATIONS */}
      <section className="relative pb-24 px-4 flex justify-center">

        <div className="w-full max-w-7xl">

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">

            {destinations.map((item, i) => (

              <div
                key={i}
                className="
                  group
                  relative
                  rounded-[24px] sm:rounded-[32px]
                  overflow-hidden

                  border border-white/10
                  bg-white/[0.04]

                  backdrop-blur-md

                  shadow-[0_15px_50px_rgba(0,0,0,0.45)]

                  hover:-translate-y-2 sm:hover:-translate-y-3
                  hover:border-sky-400/40

                  transition-all duration-500
                "
              >

                {/* IMAGE */}
                <div className="relative h-[270px] sm:h-[420px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      w-full
                      h-full
                      object-cover

                      group-hover:scale-110

                      transition-transform duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* BADGE */}
                  <div className="
                    absolute top-3 left-3 sm:top-5 sm:left-5

                    flex items-center gap-1

                    px-2.5 py-1 sm:px-3 sm:py-1

                    rounded-full

                    bg-black/40
                    backdrop-blur-sm

                    border border-white/10

                    text-[10px] sm:text-xs
                    text-yellow-300
                  ">

                    <Star size={11} fill="currentColor" />

                    Premium

                  </div>

                  {/* PRICE */}
                  <div className="
                    absolute top-3 right-3 sm:top-5 sm:right-5

                    px-2.5 py-1 sm:px-4 sm:py-2

                    rounded-full

                    bg-sky-500/10
                    border border-sky-400/20
                    backdrop-blur-sm

                    text-sky-300
                    text-[10px] sm:text-sm
                    font-medium
                  ">
                    {item.price}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-7">

                    <div className="flex items-center gap-2 text-sky-300 text-[11px] sm:text-sm mb-2 sm:mb-3">

                      <MapPin size={13} />

                      <span>{item.desc}</span>

                    </div>

                    <h2 className="text-lg sm:text-3xl font-semibold tracking-wide">
                      {item.name}
                    </h2>

                    {/* BUTTON */}
                    <button
                      onClick={() => navigate("/contact")}
                      className="
                        mt-3 sm:mt-6

                        w-full

                        flex
                        items-center
                        justify-center
                        gap-2

                        py-2.5 sm:py-4

                        rounded-xl sm:rounded-2xl

                        bg-gradient-to-r
                        from-sky-500
                        via-cyan-400
                        to-sky-300

                        text-black
                        text-xs sm:text-base
                        font-semibold

                        hover:scale-[1.02]

                        transition-all duration-300
                      "
                    >

                      Explore

                      <ArrowRight size={16} />

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="relative pb-24 px-4 flex justify-center">

        <div className="w-full max-w-7xl">

          {/* HEADER */}
          <div className="text-center mb-14 sm:mb-16">

            <p className="uppercase tracking-[4px] text-sky-300 text-[10px] sm:text-xs mb-4">
              Why Fly Ronex
            </p>

            <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">

              Premium Experience

              <span className="block text-sky-400 mt-2">
                Built For Travelers
              </span>

            </h2>

            <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto mt-5 leading-relaxed px-2">
              We combine luxury, comfort, speed, and reliability
              to make every journey unforgettable.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-7">

            {whyChoose.map((item, i) => (

              <div
                key={i}
                className="
                  relative

                  overflow-hidden

                  rounded-[24px] sm:rounded-[30px]

                  border border-white/10

                  bg-white/[0.04]

                  backdrop-blur-md

                  p-6 sm:p-8

                  hover:border-sky-400/30
                  hover:-translate-y-2

                  transition-all duration-500
                "
              >

                {/* GLOW */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-sky-500/10 blur-[90px] rounded-full"></div>

                {/* ICON */}
                <div className="
                  w-12 h-12 sm:w-14 sm:h-14

                  rounded-2xl

                  bg-sky-500/10
                  border border-sky-400/20

                  flex items-center justify-center

                  text-sky-400

                  mb-5
                ">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}