import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Droplet, Sparkles, Shield, Clock, Crown } from "lucide-react";

const Services = () => {
  const packages = [
    {
      title: "Basic Wash",
      price: "R200 / month",
      desc: "Unlimited exterior washes to keep your car spotless — quick, simple, and effective.",
      icon: Droplet,
      features: ["Unlimited Exterior Washes", "Fast Service", "No Booking Needed"],
    },
    {
      title: "Super Wash",
      price: "R300 / month",
      desc: "Includes both exterior and interior cleaning for a refreshed, all-round shine.",
      icon: Sparkles,
      features: ["Exterior + Interior Wash", "Mat & Dashboard Cleaning", "Unlimited Washes"],
    },
    {
      title: "Deluxe Wash",
      price: "R450 / month",
      desc: "Our top-tier plan — everything plus a free monthly hand polish and priority service.",
      icon: Crown,
      features: ["Exterior + Interior Wash", "1 Free Hand Polish", "Priority Member Access"],
    },
  ];

  const addOns = [
    {
      title: "Hydro Detailing",
      desc: "Deep-clean your car using advanced hydro-jet technology for an unbeatable shine.",
      icon: Shield,
      features: ["Hydro Jet Rinse", "Undercarriage Clean", "Water-Saving System"],
    },
    {
      title: "Premium Detailing",
      desc: "Full interior and exterior detailing for that brand-new showroom finish.",
      icon: Car,
      features: ["Seat Shampoo", "Wax & Paint Protection", "Engine Bay Detailing"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1E293B] overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1597008190853-bf0b0c497f8f?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Our <span className="text-red-500">Unlimited Wash</span> Packages
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose your plan, wash as often as you like, and experience the
            StainTreats shine — all month long.
          </p>
          <Link
            to="/hydro"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            💧 View Hydro Packages
          </Link>
        </motion.div>
      </div>

      {/* PACKAGES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-[#1E293B] mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚗 Unlimited Wash Plans
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map(({ title, price, desc, icon: Icon, features }, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-[#F9FAFB] rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-red-600" />
                  <h3 className="text-2xl font-bold text-[#1E293B]">{title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{desc}</p>
                <p className="text-red-600 font-semibold text-lg mb-6">{price}</p>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ON SERVICES */}
      <section className="bg-[#1E293B] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-white">
            🔥 Add-On & Hydro Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {addOns.map(({ title, desc, icon: Icon, features }, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-10 h-10 text-red-400" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-200 mb-4">{desc}</p>
                <ul className="space-y-2 text-gray-300">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20 text-center relative">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join the <span className="text-black">Unlimited Shine Club</span>
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Wash every day if you want — enjoy unlimited car care for one simple
            monthly fee.
          </p>
          <Link
            to="/signup"
            className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-transform shadow-md"
          >
            Become a Member
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-12">
            ❤️ Why Choose StainTreats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Droplet,
                title: "Unlimited Washes",
                text: "Wash anytime, as often as you want — no limits, no worries.",
              },
              {
                icon: Sparkles,
                title: "Attention to Detail",
                text: "Every wash, polish, and shine is handled with care and precision.",
              },
              {
                icon: Clock,
                title: "Fast & Convenient",
                text: "Quick service with outstanding results — every single time.",
              },
              {
                icon: Shield,
                title: "Trusted Quality",
                text: "Premium products and techniques to protect your car’s finish.",
              },
            ].map(({ icon: Icon, title, text }, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-[#F9FAFB] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="text-red-600 mb-4 flex justify-center">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
