import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Packages", path: "/packages" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

  return (
    <motion.header
      role="navigation"
      aria-label="Main Navigation"
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >

      {/* OUTER CONTAINER */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-4 ">

        {/* NAVBAR BOX */}
        <div
          className={`
            rounded-2xl border transition-all duration-500

            ${
              scrolled
                ? "bg-black/50 backdrop-blur-md border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
                : "bg-transparent border-transparent"
            }
          `}
        >

          {/* INNER CONTENT */}
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">

            {/* LOGO */}
            <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="
                text-xl sm:text-2xl md:text-3xl
                font-semibold
                tracking-[2px] md:tracking-[3px]
                text-white
                cursor-pointer
              "
            >
              Fly<span className="text-sky-400">Ronex</span>
            </motion.h1>
            </Link>

            {/* DESKTOP LINKS */}
            <ul className="hidden lg:flex items-center gap-10">

              {navLinks.map((link, index) => (
                <li key={index} className="relative group">

                              <Link
                to={link.path}
                className="
                  text-sm uppercase tracking-[2px]
                  text-white/80
                  hover:text-white
                  transition
                "
              >
                {link.name}
              </Link>

                  <span
                    className="
                      absolute left-0 -bottom-2
                      w-0 h-[2px]
                      bg-sky-400
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />

                </li>
              ))}

            </ul>

            {/* DESKTOP BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                hidden lg:flex items-center justify-center
                relative overflow-hidden
                rounded-full
                border border-sky-400/40
                px-8 py-3
                text-sm uppercase tracking-[2px]
                text-white
                bg-white/[0.03]
                backdrop-blur-sm
                transition-all duration-500
                hover:border-sky-400
                hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]
                group
              "
            >

              <span className="absolute inset-0 bg-sky-400/10 opacity-0 group-hover:opacity-100 transition" />

              <span
                className="
                  absolute -left-20 top-0
                  h-full w-16 rotate-12
                  bg-white/20 blur-lg
                  transition-all duration-700
                  group-hover:left-[120%]
                  
                "
              />
              <Link
              to="/contact"
              >
              <span className="relative z-10 ">
                 &nbsp; Book Flight &nbsp;
              </span>
              </Link>
              
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white text-3xl z-50"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>

            {menuOpen && (

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden px-4 sm:px-6 pb-5"
              >

                <div
                  className="
                    bg-black/60
                    backdrop-blur-md
                    rounded-2xl
                    p-5
                    border border-white/10
                  "
                >

                  <ul className="flex flex-col gap-6">

                    {navLinks.map((link, index) => (
                      <li key={index}>

                     <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="
                        text-white/80
                        hover:text-sky-400
                        uppercase tracking-[2px]
                        transition
                      "
                    >
                      {link.name}
                    </Link>

                      </li>
                    ))}

                  </ul>
<Link
  to="/contact"
  className="
    w-full mt-8

    flex items-center justify-center

    rounded-full
    border border-sky-400/40

    py-3 px-4

    text-sm uppercase tracking-[2px]
    text-white

    bg-white/[0.03]
    backdrop-blur-sm

    hover:bg-sky-400
    hover:text-black

    transition-all duration-300
  "
>
  Book Flight
</Link>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>

    </motion.header>
  );
};

export default Navbar;