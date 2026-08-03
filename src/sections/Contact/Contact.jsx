import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Plane } from "lucide-react";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiryFor: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_ag2c89f",
        "template_rb65kpv",
        formRef.current,
        "s3iEmzqIZVVSQXU5N"
      )
      .then(
        () => {
          setShowPopup(true);
          setFormData({
            name: "",
            mobile: "",
            email: "",
            enquiryFor: "",
            message: "",
          });
          setLoading(false);
        },
        () => {
          alert("Failed to send enquiry");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Fly Ronex | Premium Travel Support</title>
      </Helmet>

      <div className="min-h-screen bg-[#050b18] text-white relative overflow-hidden ">

        {/* Glow Background */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-sky-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

        {/* HERO */}
        <section className="text-center py-20 px-4 mt-15">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Plane className="text-sky-400" />
            <p className="text-sky-300 tracking-[4px] text-sm uppercase">
              Fly Ronex Support
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-sky-400">Touch</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Premium travel support, booking help, and assistance — anytime you need.
          </p>
        </section>

        {/* MAIN */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 pb-20">

          {/* FORM CARD */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.4)]">

            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 ">
              <Send className="text-sky-400" />
              Send Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">

              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-sky-400"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

              <input
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-sky-400"
              />
              {errors.mobile && <p className="text-red-400 text-sm">{errors.mobile}</p>}

              <input
                name="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-sky-400"
              />

              <select
                name="enquiryFor"
                value={formData.enquiryFor}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl"
              >
                <option value="">Select Enquiry Type</option>
                <option>Flight Booking</option>
                <option>Cancellation</option>
                <option>Refund</option>
                <option>Support</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-sky-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-400 text-black font-bold py-2 rounded-xl transition hover:scale-[1.02] mt-5"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* INFO CARD */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-4 text-sky-400">
                Contact Info
              </h2>

              <div className="space-y-4 text-gray-300">

                <p className="flex items-center gap-2">
                  <Mail className="text-sky-400" /> flyronex@gmail.com
                </p>

                <p className="flex items-center gap-2">
                  <Phone className="text-sky-400" /> +91 9571727338
                </p>

                <p className="flex items-center gap-2">
                  <MapPin className="text-sky-400" /> Chouparan, Hazaribag India
                </p>

              </div>
            </div>

           <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:border-sky-400/30 transition">

  {/* HEADER */}
  <div className="p-6 border-b border-white/10">
    <h2 className="text-xl font-bold text-sky-400">
      Visit Our Campus
    </h2>

    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
      Come and explore our office location. We are available
      Monday to Saturday for support and inquiries.
    </p>
  </div>

  {/* MAP */}
  <div className="p-4">
    <iframe
      title="map"
      className="w-full h-64 rounded-2xl border border-white/10 grayscale-[0.2] hover:grayscale-0 transition"
      src="https://maps.google.com/maps?q=Block%20Mod,%20Chouparan,%20Jharkhand%20825406&t=&z=15&ie=UTF8&iwloc=&output=embed"
    ></iframe>
  </div>

</div>

          </div>
        </section>

        {/* POPUP */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-[#0b1220] border border-sky-400/20 p-8 rounded-2xl text-center">
              <h3 className="text-sky-400 text-xl font-bold">
                Message Sent Successfully ✈️
              </h3>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-5 bg-sky-500 text-black px-6 py-2 rounded-xl"
              >
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default Contact;