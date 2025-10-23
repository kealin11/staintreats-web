import { Link } from "react-router-dom";
import { Car, Droplet, Sparkles, Leaf, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* HERO BANNER */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1600x800?text=StainTreats+Hero+Image')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="bg-white text-red-600 text-sm md:text-base font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
            Welcome to StainTreats Car Wash
          </span>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
            Giving You More Than What You Asked For
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10">
            There’s no traffic jam along the extra mile. Experience premium
            vehicle care that astonishes, delights, and keeps your car shining
            inside and out.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/services"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ABOUT + MISSION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: About */}
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase text-red-600 tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-[#1E293B] leading-snug">
              Redefining the Car Wash Experience Since 2019
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2019, StainTreats Wash Station set out to do more than
              wash cars. We redefined what vehicle care means by combining
              innovation, attention to detail, and community values. Every wash
              is an experience built around quality, respect, and eco-friendly
              practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our humble beginnings to offering mobile services, paint
              protection, and detailing, we continue to raise the bar in
              automotive care. Our motto says it all —{" "}
              <strong>“Giving you more than what you asked for.”</strong>
            </p>
          </div>

          {/* RIGHT: Mission */}
          <div className="bg-[#F9FAFB] rounded-2xl shadow-lg p-10 relative">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              At StainTreats, our mission is to deliver more than just a clean
              car — we’re here to create an exceptional experience that goes
              beyond expectations. We focus on{" "}
              <strong>quality, care, and attention</strong> that transforms an
              ordinary wash into something extraordinary.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe a car wash should be more than a service —{" "}
              <span className="font-semibold text-red-600">
                it should be an experience.
              </span>
            </p>
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-red-600/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-12">
            Our Signature Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            {[
              {
                title: "Premium Wash & Detail",
                desc: "Experience a spotless shine with interior and exterior detailing done to perfection.",
                Icon: Car,
              },
              {
                title: "Eco-Friendly Wash",
                desc: "We use biodegradable cleaning products and water-saving techniques to protect the planet.",
                Icon: Leaf,
              },
              {
                title: "Paint Protection & Wax",
                desc: "Shield your vehicle from UV rays and scratches with advanced wax and coating technology.",
                Icon: Shield,
              },
              {
                title: "Mobile Wash Services",
                desc: "Can’t come to us? We’ll bring the shine to you — anywhere, anytime.",
                Icon: Clock,
              },
              {
                title: "Attention to Detail",
                desc: "Every inch of your vehicle is treated with care for a flawless finish.",
                Icon: Sparkles,
              },
              {
                title: "Full Car Care Packages",
                desc: "One-stop solution for washing, polishing, and protecting your vehicle.",
                Icon: Droplet,
              },
            ].map(({ title, desc, Icon }, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-red-600" />
                  <h3 className="text-xl font-semibold text-[#1E293B]">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Team Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/600x600?text=Our+Team"
              alt="StainTreats Team"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Right: Team Content */}
          <div>
            <span className="text-sm font-semibold uppercase text-red-600 tracking-widest">
              Meet the Team
            </span>
            <h2 className="text-4xl font-bold text-[#1E293B] mt-2 mb-6">
              Passionate Experts in Vehicle Care
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our skilled team members are the heart of StainTreats. Each one is
              trained to deliver premium service, from detailed cleaning to
              exceptional customer care. We go the extra mile — literally and
              figuratively — to make your car look brand new every time.
            </p>
            <Link
              to="/about"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20"
      >
        <div className="bg-gradient-to-r from-red-700 to-red-500 p-12 md:p-20 text-white relative">
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Visit Us
              </h3>
              <p>12 Saint Joan Ave</p>
              <p>Eldorado Park</p>
              <p>Johannesburg, South Africa</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Contact Info
              </h3>
              <p>
                Phone:{" "}
                <a href="tel:+27670997668" className="text-white hover:underline">
                  067 099 7668 / 081 532 6178
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:jd.stain@gmail.com"
                  className="text-white hover:underline"
                >
                  jd.stain@gmail.com
                </a>
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Opening Hours
              </h3>
              <p>Mon - Sun: 08:00 - 18:00</p>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} StainTreats Car Wash. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
