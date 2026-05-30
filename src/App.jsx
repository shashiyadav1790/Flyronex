import { Routes, Route, useLocation, } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


import Navbar from "./sections/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";

import Home from "./pages/Home";
import Destinations from "./sections/Destinations/Destinations";
import Packages from "./sections/Packages/Packages";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact"
import ContactButtons from "./components/Contactbutton";
function App() {
  const location = useLocation();

  return (
    <>
      {/* ✅ ALWAYS VISIBLE */}
      
      <Navbar />
      <ContactButtons/>

      {/* PAGE TRANSITIONS ONLY */}
            <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* ✅ ALWAYS VISIBLE */}
      <Footer />
      
    </>
  );
}

export default App;