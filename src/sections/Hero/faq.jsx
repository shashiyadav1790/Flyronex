import { useState } from "react";
import { Plus } from "lucide-react";


const FAQ = () => {
  const [active, setActive] = useState(1);


  const faqData = [
  {
    id: 1,
    question: "How can I book a flight with Fly Ronex?",
    answer:
      "You can contact our travel experts through phone, WhatsApp, or the contact form on our website. Our team will help you choose the best flight and complete your booking."
  },
  {
    id: 2,
    question: "Do you offer domestic and international flight bookings?",
    answer:
      "Yes. Fly Ronex provides both domestic and international flight booking services with reliable airline partners and competitive fares."
  },
  {
    id: 3,
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes. Booking modifications and cancellations are subject to the airline's policies. Our support team will guide you through the process."
  },
  {
    id: 4,
    question: "Do you provide holiday tour packages?",
    answer:
      "Yes. We offer customized domestic and international holiday packages, including flights, hotels, sightseeing, and travel assistance."
  },
  {
    id: 5,
    question: "Why should I choose Fly Ronex?",
    answer:
      "Fly Ronex focuses on reliable service, competitive pricing, personalized travel assistance, and dedicated customer support to make every journey smooth and hassle-free."
  },
  {
    id: 6,
    question: "How can I contact Fly Ronex?",
    answer:
      "You can reach us through our Contact page, email, phone, or WhatsApp. Our travel experts are ready to assist you with your travel needs."
  }

];



  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section
      className="relative overflow-hidden py-10 px-6"
      aria-labelledby="faq-heading"
    >
      {/* Glow */}

      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-5 py-2 text-xs uppercase tracking-[4px] text-sky-400">

            FAQ

          </span>

          {/* <h2
            id="faq-heading"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light text-white"
          >
            Frequently Asked

            <span className="block font-semibold bg-gradient-to-r from-sky-400 to-cyan-200 bg-clip-text text-transparent">

              Questions

            </span>

          </h2> */}

          <p className="mt-6 mx-auto max-w-2xl text-gray-400 leading-8">

            Everything you need to know before booking your next journey with
            Fly Ronex.

          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqData.map((item) => (

            <article
              key={item.id}
              className={`
              overflow-hidden
              rounded-3xl
              border
              backdrop-blur-xl
              transition-all
              duration-500

              ${
                active === item.id
                  ? "border-sky-400 bg-white/10 shadow-[0_0_40px_rgba(14,165,233,.15)]"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06] hover:border-sky-500/40"
              }
              `}
            >

              <button
                className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={active === item.id}
                aria-controls={`faq-${item.id}`}
              >

                <h3 className="text-base md:text-xl font-medium text-white">

                  {item.question}

                </h3>

                <Plus
                  size={24}
                  className={`text-sky-400 transition-all duration-250 ${
                    active === item.id ? "rotate-45 scale-110" : ""
                  }`}
                />

              </button>

              <div
                id={`faq-${item.id}`}
                className={`
                grid
                transition-all
                duration-500
                ease-in-out

                ${
                  active === item.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
                `}
              >

                <div className="overflow-hidden">

                  <p className="px-7 pb-7 text-gray-300 leading-8">

                    {item.answer}

                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;