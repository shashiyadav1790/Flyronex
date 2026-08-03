import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Owner from "../../assets/destinations/abhishek-singh-founder-flyronex.webp";


export default function About() {
  return (

    <>
<Helmet>

<title>
About Fly Ronex | Meet Founder Abhishek Singh | Premium Travel Agency
</title>

<meta
name="description"
content="Learn about Fly Ronex and its founder Abhishek Singh. Discover our mission to provide premium domestic and international travel experiences with affordable tour packages."
/>

<meta
name="keywords"
content="
Fly Ronex,
About Fly Ronex,
Abhishek Singh,
Founder Fly Ronex,
Travel Agency India,
Domestic Tour Packages,
International Tour Packages,
Flight Booking,
Holiday Packages,
Luxury Travel,
Travel Company India
"
/>

<meta name="robots" content="index,follow"/>

<link
rel="canonical"
href="https://flyronex.com/about"
/>

<meta property="og:type" content="website"/>

<meta
property="og:title"
content="About Fly Ronex | Premium Travel Agency"
/>

<meta
property="og:description"
content="Meet the founder of Fly Ronex and discover premium domestic & international travel experiences."
/>

<meta
property="og:url"
content="https://flyronex.com/about"
/>

<meta
property="og:image"
content="https://flyronex.com/abhishek-singh-founder-flyronex.webp"
/>

<meta
name="twitter:card"
content="summary_large_image"
/>

<meta
name="twitter:title"
content="About Fly Ronex"
/>

<meta
name="twitter:description"
content="Meet the Founder of Fly Ronex and explore our premium travel services."
/>

<meta
name="twitter:image"
content="https://flyronex.com/abhishek-singh-founder-flyronex.webp"
/>

{/* Organization Schema */}

<script type="application/ld+json">
{`
{
"@context":"https://schema.org",
"@type":"TravelAgency",

"name":"Fly Ronex",

"url":"https://flyronex.com",

"logo":"https://flyronex.com/logo.png",

"image":"https://flyronex.com/abhishek-singh-founder-flyronex.webp",

"description":"Premium Domestic and International Travel Agency",

"telephone":"+919571727338",

"email":"flyronex@gmail.com",

"address":{
"@type":"PostalAddress",
"addressLocality":"Chouparan",
"addressRegion":"Jharkhand",
"addressCountry":"India"
}

}
`}
</script>

{/* Founder Schema */}

<script type="application/ld+json">
{`
{
"@context":"https://schema.org",

"@type":"Person",

"name":"Abhishek Singh",

"jobTitle":"Founder",

"worksFor":{
"@type":"TravelAgency",
"name":"Fly Ronex"
},

"image":"https://flyronex.com/abhishek-singh-founder-flyronex.webp"

}
`}
</script>

</Helmet>
    <div className="bg-[#020617] text-white overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 ">

        {/* HERO */}
        <section className="min-h-[50vh] flex flex-col items-center justify-center text-center pt-28 pb-20 sm:pt-32 sm:pb-28">

          <div className="
            px-4 py-2
            rounded-full
            border border-sky-400/20
            bg-sky-400/10
            text-sky-400
            text-xs sm:text-sm
            mb-6
            transition-all duration-300
            hover:bg-sky-400/20
            hover:scale-105
          ">
            ✈️ Premium Travel Platform
          </div>

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-bold
            leading-[1.1]
            max-w-4xl
          ">
            About{" "}
            <span className="
              bg-gradient-to-r
              from-sky-400
              to-cyan-300
              bg-clip-text
              text-transparent
            ">
              FlyRonex
            </span>
          </h1>

          <p className="
            text-white/60
            text-sm sm:text-base
            leading-8
            max-w-2xl
            mt-6
          ">
            Creating premium travel experiences with luxury,
            comfort and unforgettable journeys worldwide.
          </p>

        </section>

        {/* ABOUT SECTION */}
        <section className="pb-24">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16 lg:gap-24
            items-center
          ">

            {/* IMAGE */}
            <div className="relative flex justify-center group">

              <div className="
                relative
                w-full
                max-w-[520px]
                h-[250px]
                sm:h-[300px]
                md:h-[350px]
                rounded-[30px]
                overflow-hidden
                border border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                transition-all duration-500
                group-hover:scale-[1.02]
                group-hover:border-sky-400/30
              ">

               <img
src={Owner}
alt="Abhishek Singh Founder of Fly Ronex Premium Travel Agency"
loading="eager"
fetchPriority="high"
decoding="async"
className="
w-full
h-full
object-cover
transition-transform
duration-700
group-hover:scale-110
"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              </div>

              {/* FLOATING CARD */}
              <div className="
                absolute
                -bottom-6
                right-2 sm:right-0
                bg-[#0f172a]/90
                backdrop-blur-sm
                border border-white/10
                rounded-2xl
                p-2
                shadow-2xl
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:border-sky-400/30
              ">

                <h3 className="text-lg font-bold text-sky-400 mb-1">
                  Founder & CEO

                </h3>

                <p className="text-sm text-white/60">
                  Abhishek Singh
                </p>

              </div>

            </div>

            {/* CONTENT */}
            <div
              className="
                flex flex-col
                items-center lg:items-start
                text-center lg:text-left
                mt-8 lg:mt-0
              "
            >

              <p
                className="
                  text-sky-400
                  uppercase
                  tracking-[3px]
                  text-xs sm:text-sm
                  mb-3
                "
              >
                Meet The Founder
              </p>

              <h2
                className="
                  text-3xl
                  sm:text-3xl
                  lg:text-4xl
                  font-bold
                  leading-[1.3]
                  max-w-xl
                  mb-5
                "
              >
               Meet
<span className="text-sky-400">
 The Founder of Fly Ronex
</span>
              </h2>



              <div className="md:col-span-2 text-gray-300 leading-relaxed mb-8">
                <p className="mb-4 font-bold"> 
                   Fly Ronex was founded with a vision to make travel simple, affordable, and unforgettable. Led by founder & ceo Abhishek Singh.
                </p>

                  <details>
                  <summary className="cursor-pointer text-yellow-400 font-semibold">
                    Read Full Message
                  </summary>

                  <p className="mt-4">
  Our mission is to provide trusted domestic and international tour packages, flight bookings, and premium travel experiences tailored for every traveler.
                    
                     <br /><br />
                Today, Fly Ronex proudly serves travelers across India with carefully planned holidays
                    <br /><br />
                 luxury vacations, honeymoon packages, family tours, corporate travel, and international destinations. Our commitment to customer satisfaction and transparent
                    <br /><br />
                  </p>
                </details>
              </div>











              {/* STATS */}
              <div
                className="
                  grid grid-cols-2
                  gap-5
                  w-full
                  max-w-md
                "
              >

                <div
                  className="
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-3
                    text-center
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-sky-400/30
                    hover:bg-sky-400/5
                  "
                >
                  <h3 className="text-3xl font-bold text-sky-400 mb-2">
                    50+
                  </h3>

                  <p className="text-white/60 text-sm">
                    World wide Destinations
                  </p>
                </div>

                <div
                  className="
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-3
                    text-center
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-purple-400/30
                    hover:bg-purple-400/5
                  "
                >
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">
                    10K+
                  </h3>

                  <p className="text-white/60 text-sm">
                 Happt Customers
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="py-5 sm:py-3 ">

          <div className="text-center mb-10">

            <p className="
              text-sky-400
              uppercase
              tracking-[3px]
              text-xs sm:text-sm
              mb-4
            ">
              Why Choose Us
            </p>

            <h2 className="
              text-3xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              leading-tight
            ">
              Why Thousands Trust Fly Ronex ✨
            </h2>

          </div>

          {/* FEATURE CARDS */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
          ">

            {[
              {
                title: "Luxury Experience",
                desc: "Premium hotels and curated travel experiences.",
              },
              {
                title: "Best Price Deals",
                desc: "Affordable luxury with amazing travel offers.",
              },
              {
                title: "24/7 Support",
                desc: "Dedicated support for your travel journey.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="
                  group
                  bg-white/5
                  border border-white/10
                  rounded-[30px]
                  p-3
                  text-center
                  hover:border-sky-400/30
                  hover:-translate-y-3
                  hover:bg-sky-400/5
                  transition-all duration-500
                  cursor-pointer
                "
              >

                <div className="
                  w-10 h-10
                  rounded-2xl
                  bg-sky-500/10
                  flex items-center justify-center
                  mx-auto
                  mb-6
                  text-2xl
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                ">
                  ✈️
                </div>

                <h3 className="
                  text-xl font-semibold mb-4
                  transition-all duration-300
                  group-hover:text-sky-400
                ">
                  {item.title}
                </h3>

                <p className="
                  text-white/60
                  text-sm
                  leading-7
                ">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="pt-5 pb-8 ">

          <div className="
            relative
            overflow-hidden
            rounded-[45px]
            border border-white/10
            bg-gradient-to-r
            from-sky-500/10
            to-cyan-400/10
            px-6 sm:px-8
            py-6 sm:py-8
            text-center
            transition-all duration-500
            hover:border-sky-400/30
            hover:scale-[1.01]
            mb-10
          ">

            <div className="
              relative z-10
              flex flex-col
              items-center
              gap-6
            ">

              <h2 className="
                text-2xl
                sm:text-2xl
                lg:text-2xl
                font-bold
                leading-tight
                max-w-3xl
              ">
                Ready To Explore The World?
              </h2>

              <p className="
                text-white/60
                text-sm sm:text-base
                leading-8
                max-w-2xl
              ">
                Start your journey with premium travel experiences
                and unforgettable destinations today.
              </p>

             <Link
             to="/destinations"
             >
              <button className="
                mt-2
                px-6 py-3
                rounded-2xl
                bg-gradient-to-r
                from-sky-400
                to-cyan-300
                text-black
                font-semibold
                transition-all duration-500
                hover:scale-110
                hover:shadow-[0_10px_40px_rgba(56,189,248,0.45)]
              ">
                Explore Tour Packages
              </button>
              </Link>

            </div>

          </div>

        </section>

        <br />

      </div>
    </div>
    </>
  );
}