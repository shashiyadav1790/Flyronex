import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const ContactButtons = () => {
  const phoneNumber = "9571727338";
  const whatsappNumber = "9571727338";

  const message = `
Hello FlyRonex,

I would like to know more about your flight packages and booking details.

Please guide me.
Thank you.
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"
      aria-label="Quick contact buttons FlyRonex"
    >

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact FlyRonex on WhatsApp"
        className="group w-12 h-12 rounded-full flex items-center justify-center
        bg-[#25D366]
        shadow-md hover:shadow-lg
        transition-transform duration-300
        hover:scale-110 active:scale-95"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call FlyRonex support"
        className="group w-12 h-12 rounded-full flex items-center justify-center
        bg-[#1d4ed8]
        shadow-md hover:shadow-lg
        transition-transform duration-300
        hover:scale-110 active:scale-95"
      >
        <IoCall className="text-white text-xl" />
      </a>

    </div>
  );
};

export default ContactButtons;