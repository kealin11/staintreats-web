import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Sparkles, Leaf, Users, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      {/* HERO SECTION */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/car10.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>
        <motion.div
          className="relative z-10 px-6 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About <span className="text-red-500">StainTreats Unlimited</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            “Giving You More Than What You Asked For” — redefining the car wash
            experience through quality, care, and innovation since 2019.
          </p>
        </motion.div>
      </div>

      {/* MISSION & STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/car4.jpeg"
              alt="Car Wash in Action"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase text-red-600 tracking-widest">
              Our Story
            </span>
            <h2 className="text-4xl font-extrabold text-[#1E293B] mt-3 mb-4">
              Redefining Car Care Since 2019
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2019, StainTreats Wash Station set out not just to wash
              cars — but to redefine what a car wash could be. The founders saw
              a gap between typical car wash experiences and what customers
              truly desired: attention to detail, respect, and an unforgettable
              shine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              StainTreats quickly became known for quality, innovation, and
              community focus — creating a place where every visit feels more
              like a treat than a task.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-[#F9FAFB] py-20 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            “At StainTreats Car Wash, our mission is to deliver more than just a
            clean car — we’re here to provide an exceptional experience that
            goes beyond expectations. We offer a level of quality, care, and
            attention that transforms a simple wash into a refreshing
            experience.”
          </p>
          <p className="text-red-600 font-semibold">
            A car wash should be more than a service — it should be an
            experience.
          </p>
        </motion.div>
      </section>

      {/* WHY STAINTREATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We don’t just clean cars — we elevate the experience. Every detail,
            every wash, and every shine reflects our promise to give customers
            “more than what they asked for.”
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-[#F9FAFB] rounded-2xl shadow hover:shadow-lg transition">
            <Sparkles className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B] mb-2">
              Exceptional Service
            </h3>
            <p className="text-gray-600 text-sm">
              Delivering top-tier cleaning with precision and care, inside and
              out.
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-2xl shadow hover:shadow-lg transition">
            <Leaf className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B] mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600 text-sm">
              Using biodegradable, water-saving products to protect the planet.
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-2xl shadow hover:shadow-lg transition">
            <Shield className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B] mb-2">
              Consistency & Care
            </h3>
            <p className="text-gray-600 text-sm">
              Every car receives the same attention and care — every single
              time.
            </p>
          </div>

          <div className="p-8 bg-[#F9FAFB] rounded-2xl shadow hover:shadow-lg transition">
            <Users className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B] mb-2">
              Community Focused
            </h3>
            <p className="text-gray-600 text-sm">
              Building long-term relationships through service, trust, and
              respect.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            “There’s No Traffic Jam Along The Extra Mile”
          </h2>
          <p className="text-lg mb-8 text-red-100">
            StainTreats continues to raise the standard of vehicle care —
            turning every wash into an experience of excellence and attention to
            detail.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-700 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-md"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
