import { motion } from "framer-motion";
import { Droplet, Sparkles, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HydroPackages = () => {
  const packages = [
    {
      title: "Brilliant Shine",
      price: "R320.00",
      duration: "Up to 1 Month Protection",
      desc: "Quick, Clean, Gleam! Easy spray-on hydrophobic layer that boosts your car’s shine and repels water instantly.",
      icon: Sparkles,
      features: [
        "✔ Easy spray-on application",
        "✔ 1 month of protection and shine",
        "✔ Enhanced shine & water repellency",
      ],
      bg: "from-red-50 to-white",
    },
    {
      title: "Radiant Gloss",
      price: "R420.00",
      duration: "2 - 3 Months Protection",
      desc: "Glow that lasts! Enjoy a deep gloss finish, strong water beading, and durable protection that keeps your ride looking new.",
      icon: Droplet,
      features: [
        "✔ Deep gloss finish",
        "✔ Strong water beading effect",
        "✔ Durable 2–3 month protection",
      ],
      bg: "from-white to-red-50",
    },
    {
      title: "Ceramic Ultra Slick",
      price: "R550.00",
      duration: "4 - 6 Months Protection",
      desc: "Next-level defense! Our premium ceramic treatment delivers an ultra-slick, long-lasting hydrophobic coating for serious car enthusiasts.",
      icon: Shield,
      features: [
        "✔ Ultra-slick ceramic coating",
        "✔ Up to 6 months paint defense",
        "✔ Long-lasting shine & smooth feel",
      ],
      bg: "from-red-100 to-white",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      {/* HERO SECTION */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/car10.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <motion.div
          className="relative z-10 px-6 text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Hydrophobic <span className="text-red-500">Wash Packages</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Where shine meets shield — give your vehicle lasting protection and
            that flawless mirror-gloss finish.
          </p>
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Book Your Hydro Treatment
          </Link>
        </motion.div>
      </div>

      {/* PACKAGES */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold text-[#1E293B] mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            💧 Choose Your Hydro Protection Level
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map(({ title, price, duration, desc, icon: Icon, features, bg }, idx) => (
              <motion.div
                key={idx}
                className={`p-10 rounded-3xl shadow-lg bg-gradient-to-br ${bg} hover:shadow-2xl hover:-translate-y-2 transition-all`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E293B] mb-2">
                  {title}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{price}</p>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
                  {duration}
                </p>
                <p className="text-gray-700 mb-6">{desc}</p>
                <ul className="text-left text-gray-700 space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <Zap className="w-4 h-4 text-red-500 mr-2" /> {f}
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
            Where <span className="text-black">Shine Meets Shield</span>
          </h2>
          <p className="text-lg mb-8 text-red-100">
            Protect your car’s finish and keep it gleaming with the ultimate
            hydrophobic wash technology.
          </p>
          <Link
            to="/signup"
            className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-transform shadow-md"
          >
            Sign Up for a Hydro Plan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HydroPackages;
