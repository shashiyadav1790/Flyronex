import { useEffect, useRef } from "react";
import gsap from "gsap";
import plane from "../../assets/airplane.webp";
import Comment from "./Comment";
import Globe from "./Globe";
import { Link } from "react-router-dom";
import FAQ from "./faq";
const Hero = () => {

  const planeRef1 = useRef(null);
 

  useEffect(() => {

    const ctx = gsap.context(() => {

      const width = window.innerWidth;

      // Plane 1
      gsap.set(planeRef1.current, {
        x: width - 50,
        y: -40,
        scale: 0.9,
      });

      gsap.to(planeRef1.current, {
        x: -width - 300,
        y: -80,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      
    });

    return () => ctx.revert();

  }, []);

  return (
    

    <header
      className="
      relative
      min-h-[100svh]
      flex
      items-center
      justify-center
      overflow-hidden
      bg-gradient-to-br
      from-[#020617]
      via-[#0f172a]
      to-black
      pt-28
      lg:pt-40
    "
    >

      

     <Globe/> 
      
     

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 blur-[60px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 blur-[60px] rounded-full"></div>

      {/* Plane 1 */}
      <img
        ref={planeRef1}
        src={plane}
        alt="Fly Ronex airplane"
        loading="eager"
        decoding="async"
        className="
        will-change-transform
        absolute
        top-[9%]
        right-[-200px]
        w-[120px]
        md:w-[220px]
        lg:w-[300px]
        pointer-events-none
        select-none

      "
      />

      

      {/* MAIN CONTENT */}
      <div
        className="
        relative
        z-10
        w-full
        max-w-7xl
        px-6
        lg:px-10
        flex
        flex-col
        items-center
        text-center
        gap-12
      "
      >

        {/* Badge */}
         
         
        <p
          className="
          text-sky-400
          uppercase
          tracking-[5px]
          text-[11px]
          md:text-xs
          mt-8
        "
        >
          Premium Flight Experience
        </p>

        {/* Heading */}
        <h1
          className="
          text-white
          font-light
          leading-[1.05]
          tracking-tight
          text-[clamp(2.8rem,8vw,6rem)]
          max-w-5xl
        "
        >
        
          

          <span
            className="
            font-semibold
            bg-gradient-to-r
            from-sky-400
            to-cyan-200
            bg-clip-text
            text-transparent
          "
          >
            Experience with Fly Ronex
          </span>
        </h1>

        {/* Description */}
        <p
          className="
          text-gray-300
          text-sm
          md:text-base
          max-w-xl
          leading-relaxed
        "
        >
          Discover seamless flight booking, luxury destinations,
          and premium travel experiences tailored for modern travelers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center ">

          <Link
          to="/packages"
            className="
            px-8
            py-3
            rounded-full
            bg-sky-500
            text-black
            text-sm
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(14,165,233,0.6)]
            active:scale-95
          "
          >
            Book Flight ✈️
          </Link>

          <Link
          to="/destinations"
            className="
            px-8
            py-3
            rounded-full
            border
            border-white/20
            text-white
            text-sm
            backdrop-blur-md
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            active:scale-95
          "
          >
            Explore Deals
          </Link>

        </div>


  

  
        {/* Stats */}
        <div
          className="
          w-full
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4
          mt-4
        "
        >

          {[
            { num: "500+", label: "Destinations" },
            { num: "50K+", label: "Travelers" },
            { num: "24/7", label: "Support" },
            { num: "Best", label: "Price" },
          ].map((item, i) => (

            <div
              key={i}
              className="
              bg-white/5
              border
              border-white/15
              rounded-2xl
              p-5
              backdrop-blur-sm
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              hover:bg-white/10
              hover:border-sky-400
              hover:-translate-y-1
              hover:scale-105
              transition-all
              duration-300
            "
            >

              <p className="text-white text-xl font-semibold">
                {item.num}
              </p>

              <p className="text-white/60 text-xs mt-1">
                {item.label}
              </p>

            </div>
          ))}

        </div>

        {/* WHY SECTION */}
        <div className="w-full mt-4 mb-10">

          <p
            className="
            text-white/50
            text-[11px]
            tracking-[3px]
            uppercase
            mb-6
          "
          >
            Why Fly Ronex
          </p>
         

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
          >

            {[
              "Easy Booking",
              "Lowest Prices",
              "Instant Ticket",
              "24/7 Support",
            ].map((item, i) => (

              <div
                key={i}
                className="
                bg-white/5
                border
                border-white/15
                rounded-xl
                p-4
                text-white/70
                text-xs
                text-center
                backdrop-blur-sm
                hover:bg-white/10
                hover:border-sky-400
                hover:text-white
                transition-all
                duration-300
              "
              >
                {item}
              </div>
            ))}
           
            

          </div>

           <section className="max-w-6xl mx-auto px-6 py-12 text-center bg-sky-500/10 border rounded-3xl mt-10">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Why Choose <span className="text-yellow-400">Us?</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
         Since 2026, Fly Ronex has redefined air travel by offering comfort, convenience, and reliability, making every journey seamless, premium, and enjoyable for modern travelers worldwide.
          </p>
        </section>

        <Comment/>
        <FAQ/>


        </div>
       
        


      </div>
      

    </header>
    
  );
};

export default Hero;