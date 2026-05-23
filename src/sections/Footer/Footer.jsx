import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const social = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden ">

      {/* background glow */}
    
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 opacity-20 pointer-events-none" />

      {/* MAIN WRAPPER */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* BRAND */}
          <section className="space-y-6 ">
            <h2 className="text-3xl font-semibold tracking-tight">
              Fly<span className="text-sky-400">Ronex</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Smart flight booking experience for modern travelers.
              Fast booking, best prices, and seamless global travel.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 pt-2">
              {social.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label={item.label}
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-white/70
                    hover:text-sky-400
                    hover:border-sky-400
                    hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <item.icon size={15} />
                </a>
              ))}
            </div>
          </section>

          {/* QUICK LINKS */}
          <nav className="space-y-6">
            <h3 className="text-white font-medium">Quick Links</h3>

            <ul className="space-y-3 text-white/60 text-sm">
              {links.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="
                      inline-block
                      hover:text-sky-400
                      hover:translate-x-1.5
                      transition
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SUPPORT */}
          <nav className="space-y-6">
            <h3 className="text-white font-medium">Support</h3>

            <ul className="space-y-3 text-white/60 text-sm">
              {support.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="
                      inline-block
                      hover:text-sky-400
                      hover:translate-x-1.5
                      transition
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* NEWSLETTER */}
          <section className="space-y-6">
            <h3 className="text-white font-medium">Newsletter</h3>

            <p className="text-white/60 text-sm leading-relaxed ">
              Get travel deals, offers & updates directly in your inbox.
            </p>

            <form className="space-y-6 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-[80%] px-4 py-3
                  bg-white/5
                  border border-white/10
                  rounded-lg
                  text-sm
                  outline-none
                  focus:border-sky-400
                  focus:ring-2 focus:ring-sky-500/20
                "
              />
              
               
              <button
                type="submit"
                className="
                  w-[80%] py-3
                  rounded-lg
                  bg-gradient-to-r from-sky-500 to-blue-600
                  text-black font-medium
                  hover:opacity-90
                  transition
                  
                "
              >
                Join Newsletter
              </button>
            </form>
          </section>

        </div>
      </div>
      

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-white/50 text-sm">
   
        <p>© {new Date().getFullYear()} FlyRonex. All rights reserved.</p>
      </div>
     

    </footer>
  );
};

export default Footer;