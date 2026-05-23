import { useNavigate } from "react-router-dom";
import dubaiImg from "../../assets/destinations/dubai.webp";
import parisImg from "../../assets/destinations/paris.webp";
import maldivesImg from "../../assets/destinations/maldives.webp";
import londonImg from "../../assets/destinations/london.webp";
import tokyoImg from "../../assets/destinations/tokyo.webp";
import indiaImg from "../../assets/destinations/india.webp";

export default function Destinations() {
  const navigate = useNavigate();

const destinations = [
  {
    name: "Dubai",
    image: dubaiImg,
    desc: "Luxury escape",
    price: "₹45,999",
  },

  {
    name: "Paris",
    image: parisImg,
    desc: "Romantic city",
    price: "₹62,999",
  },

  {
    name: "Maldives",
    image: maldivesImg,
    desc: "Beach paradise",
    price: "₹39,999",
  },

  {
    name: "London",
    image: londonImg,
    desc: "Royal city",
    price: "₹70,999",
  },

  {
    name: "Tokyo",
    image: tokyoImg,
    desc: "Future city",
    price: "₹85,999",
  },

  {
    name: "India",
    image: indiaImg,
    desc: "Heritage",
    price: "₹9,999",
  },
];

  const whyChoose = [
    {
      title: "Best Price Guarantee",
      desc: "We ensure you always get the lowest flight prices.",
      icon: "💰",
    },
    {
      title: "Instant Booking",
      desc: "Book flights instantly with zero delay.",
      icon: "⚡",
    },
    {
      title: "24/7 Support",
      desc: "We are always available for your travel help.",
      icon: "🛟",
    },
    {
      title: "Trusted Airlines",
      desc: "Only verified and trusted airline partners.",
      icon: "✈️",
    },
  ];


  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
    
      <section className="pt-28 pb-10 text-center">
        
        <p className="text-2xl sm:text-3xl font-semibold">
          Explore Destinations 🌍
        </p>
        
        <p className="text-white/50 text-xs mt-2 ">
          Premium travel experiences
        </p>
      </section>
     

      {/* GRID */}
    
      <section className="pb-20 flex justify-center">
        <div className="w-full max-w-6xl px-4">

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">

            {destinations.map((item, i) => (
              <div
                key={i}
                className="
                  w-full max-w-[230px]
                  h-[200px]

                  relative overflow-hidden
                  rounded-xl
                  border border-white/10

                  flex flex-col

                  shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                  hover:scale-[1.03]
                  hover:border-sky-400/30

                  transition-all duration-300
                "
              >

                {/* IMAGE (FIXED BRIGHTNESS) */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

                {/* BADGE */}
                <div className="absolute top-2 right-2 text-[11px] px-3 py-[3px] bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
                  Popular
                </div>

                {/* CONTENT WRAPPER */}
                <div className="relative z-10 flex flex-col flex-1 px-3 py-3">

                  {/* CENTER CONTENT */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1">

                    <h2 className="text-[15px] font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-white/70 text-[12px]">
                      {item.desc}
                    </p>

                    <div className="text-[12px] text-sky-400">
                      {item.price}
                    </div>

                  </div>

                  {/* BOTTOM BUTTON */}
                  <button
                    onClick={() => navigate(`/results?to=${item.name}`)}
                    className="
                      w-full

                      px-3 py-2 text-[12px]

                      bg-gradient-to-r from-sky-500 to-blue-600
                      text-black

                      rounded-md

                      hover:from-sky-400 hover:to-sky-500
                      transition
                    "
                  >
                    Explore
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
   

       {/* WHY CHOOSE US SECTION (INSIDE PAGE) */}
      <section className="pb-20 flex justify-center">
        <div className="w-full max-w-6xl px-4">

          <div className="text-center mb-10 space-y-2 flex flex-col gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Why Choose FlyRonex ✨
            </h2>
            <p className="text-white/50 text-xs sm:text-sm ">
              Smooth, fast & premium travel experience
            </p>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">

            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-xl
                  p-5
                  text-center

                  hover:bg-white/10
                  hover:border-sky-400/30
                  hover:scale-[1.03]

                  transition
                "
              >
                <div className="text-2xl mb-3 mt-3">{item.icon}</div>
                <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-xs ">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>
      


    </div>
  );
}