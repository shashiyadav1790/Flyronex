import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Fly Ronex made our travel experience incredibly smooth and hassle-free. Booking flights has never been this fast and reliable.",
    name: "Rohan Mehta",
  },
  {
    text: "Amazing platform for booking flights. Great prices, quick support, and a premium experience every time I travel.",
    name: "Aman Verma",
  },
  {
    text: "Fly Ronex feels like a luxury travel assistant. Everything is simple, fast, and perfectly designed for modern travelers.",
    name: "Neha Kapoor",
  },
  {
    text: "From booking to boarding, everything was seamless. Fly Ronex truly understands what premium travel means.",
    name: "Siddharth Jain",
  },
  {
    text: "Best flight booking experience I’ve used so far. Clean UI, fast process, and trustworthy service.",
    name: "Priya Sharma",
  },
];

export default function TestimonialSlider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const prevSlide = () => {
    setCurrent(
      current === 0
        ? testimonials.length - 1
        : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent(
      (current + 1) % testimonials.length
    );
  };

  return (

    <section className="relative py-10 text-white overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          What Our{" "}
          <span className="text-sky-400">
            Travelers Say
          </span>
        </h2>

        <p className="text-gray-400 mb-10 text-sm md:text-base">
          Real experiences from people who trust Fly Ronex for their journeys.
        </p>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="min-w-full px-1 sm:px-3"
              >

                {/* CARD */}
                <div
                  className="
                    bg-sky-500/10
                    border border-white/10
                    backdrop-blur-md
                    rounded-3xl
                    p-5 sm:p-8
                    
                    hover:border-sky-400/30
                    transition
                  "
                >

                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    “{item.text}”
                  </p>

                  <h4 className="mt-6 text-sky-400 font-semibold">
                    — {item.name}
                  </h4>

                </div>

              </div>

            ))}

          </div>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="
              absolute
              left-1 sm:left-2
              top-1/2
              -translate-y-1/2
              bg-white/5
              border border-white/10
              hover:border-sky-400
              text-white
              p-2 sm:p-3
              rounded-full
              transition
              hover:scale-110
            "
          >
            ❮
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="
              absolute
              right-1 sm:right-2
              top-1/2
              -translate-y-1/2
              bg-white/5
              border border-white/10
              hover:border-sky-400
              text-white
              p-2 sm:p-3
              rounded-full
              transition
              hover:scale-110
            "
          >
            ❯
          </button>

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">

          {testimonials.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`
                w-2.5 h-2.5
                rounded-full
                transition
                ${
                  current === i
                    ? "bg-sky-400 scale-125"
                    : "bg-gray-500"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
}