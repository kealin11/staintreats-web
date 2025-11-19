import { Link } from "react-router-dom";
import {
  Car,
  Droplet,
  Sparkles,
  Leaf,
  Shield,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/car10.jpeg')", // ✅ Local image from public folder
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm md:text-base font-semibold px-5 py-3 rounded-full uppercase tracking-widest mb-6 inline-block shadow-lg">
            🚗 Welcome to StainTreats Detailing Service 
          </span>

          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Giving You <span className="text-red-500">More</span> Than What You Asked For
          </h1>

          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            There’s no traffic jam along the extra mile. Experience premium
            vehicle care that’s fast, fun, and flawless.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/services"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl font-extrabold text-[#1E293B] leading-snug">
              Redefining the Car Wash Experience Since 2019
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2019, StainTreats set out to do more than wash cars —
              we redefined what vehicle care means. With innovation, attention
              to detail, and eco-friendly values, we deliver more than you
              expect every single time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From mobile detailing to premium protection, we’ve made quality
              and trust the heart of our brand.{" "}
              <strong>“Giving you more than what you asked for.”</strong>
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-tr from-red-100 via-white to-red-50 rounded-2xl shadow-xl p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At StainTreats, our mission is to transform a simple wash into a
              memorable experience. We deliver quality, care, and a personal
              touch that keeps your vehicle shining — and you smiling.
            </p>
            <p className="text-red-600 font-semibold mt-4">
              Because a car wash should be more than a service — it should be an experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-[#F9FAFB]" id="services">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-12">
            ✨ Our Signature Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {[
              {
                title: "Premium Wash & Detail",
                desc: "Experience a spotless shine inside and out with our precision detailing.",
                Icon: Car,
              },
              {
                title: "Eco-Friendly Wash",
                desc: "Biodegradable products, water-saving systems — clean car, clean planet.",
                Icon: Leaf,
              },
              {
                title: "Paint Protection & Wax",
                desc: "Advanced wax and UV coating for that glossy, long-lasting protection.",
                Icon: Shield,
              },
              {
                title: "Mobile Wash Services",
                desc: "We come to you — at home, work, or wherever your car needs a glow-up.",
                Icon: Clock,
              },
              {
                title: "Attention to Detail",
                desc: "Every corner, crevice, and curve gets our premium care and precision.",
                Icon: Sparkles,
              },
              {
                title: "Full Car Care Packages",
                desc: "Complete wash, polish, and protection — all in one premium package.",
                Icon: Droplet,
              },
            ].map(({ title, desc, Icon }, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-red-600" />
                  <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
                </div>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-red-700 hover:scale-105 transition-transform shadow-md"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/car4.jpeg"
              alt="Our Team"
              className="w-full h-[600px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-widest">
              Meet the Team
            </span>
            <h2 className="text-4xl font-extrabold text-[#1E293B] mt-2 mb-6">
              Passionate Experts in Vehicle Care
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our expert team is the heart of StainTreats. With skill, passion,
              and a love for detail, we go beyond clean — we deliver care,
              precision, and that extra sparkle every time.
            </p>
            <Link
              to="/about"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition-transform shadow-md"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20"
>
  <div className="bg-gradient-to-r from-red-700 to-red-500 p-12 md:p-20 text-white relative">
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="text-white">
        <h3 className="text-xl font-bold mb-4">📍 Visit Us</h3>
        <p className="text-white">12 Saint Joan Ave</p>
        <p className="text-white">Eldorado Park</p>
        <p className="text-white">Johannesburg, South Africa</p>
      </div>

      <div className="text-white">
        <h3 className="text-xl font-bold mb-4">📞 Contact Info</h3>
        <p className="text-white">
          Phone:{" "}
          <a
            href="tel:+27670997668"
            className="hover:underline text-white"
          >
            067 099 7668 / 081 532 6178
          </a>
        </p>
        <p className="text-white">
          Email:{" "}
          <a
            href="mailto:jd.stain@gmail.com"
            className="hover:underline text-white"
          >
            jd.stain@gmail.com
          </a>
        </p>
      </div>

      <div className="text-white">
        <h3 className="text-xl font-bold mb-4">🕒 Opening Hours</h3>
        <p className="text-white">Mon - Sun: 08:00 - 18:00</p>
      </div>

    </div>

    <div className="mt-10 text-center text-sm opacity-80 text-white">
      &copy; {new Date().getFullYear()} StainTreats Car Wash. All rights reserved.
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
