import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MachineImage from "@/assets/Machine.jpg";
import Work3Image from "@/assets/work-3.jpg";

const MachinePage = () => {
  const machine = {
    title: "Siemens ARTIS icono",
    description:
      "A cutting-edge imaging system designed for advanced diagnostics and image-guided procedures, enabling faster, safer, and more precise treatments.",
    image: MachineImage, // ✅ imported image
    specs: [
      "Real-time 3D imaging",
      "Developer: Siemens Healthineers",
      "Application: Diagnostic & Interventional Imaging",
      "US FDA Approved",
    ],
    benefits: [
      {
        title: "Clearer Images = Better Decisions",
        description:
          "High-quality, real-time images let your medical team pinpoint exactly where to treat, whether it’s a blocked artery, a bleeding vessel, or a tumor.",
      },
      {
        title: "Less Radiation, Safer for You",
        description:
          "Designed to use the lowest possible amount of radiation while still providing clear images, prioritizing your safety.",
      },
      {
        title: "Shorter, More Comfortable Procedures",
        description:
          "Many procedures are faster and require fewer movements or adjustments, making your experience smoother.",
      },
      {
        title: "Smaller Incisions, Faster Recovery",
        description:
          "Used for minimally invasive treatments, reducing pain and speeding up healing.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F9FF] to-white">
      {/* HERO SECTION */}
      <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full opacity-15 blur-2xl animate-pulse"></div>

        {/* Machine Image */}
        <div className="relative z-10">
          <img
            src={machine.image}
            alt={machine.title}
            className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto object-contain rounded-3xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Machine Title & Description */}
        <div className="relative z-10 mt-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-6">
            {machine.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            {machine.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 hover:scale-105 transition transform"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-700 hover:scale-105 transition transform"
            >
              Learn About Our Experts
            </Link>
          </div>
        </div>
      </div>

      {/* TECHNOLOGY HIGHLIGHT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
              Advanced Imaging Technology
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Our team uses state-of-the-art imaging technology — the Siemens ARTIS icono — 
              to provide the highest level of care during image-guided procedures.
              This advanced system allows us to see inside your body in real time with exceptional detail, 
              enabling us to diagnose and treat a wide range of conditions with greater precision and confidence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Guided by experienced radiographers and medical staff, the ARTIS icono supports quicker, safer, 
              and more accurate treatments — often with smaller incisions and faster recovery times.
            </p>
          </div>
          <div>
            <img
              src={Work3Image}
              alt="Siemens ARTIS icono"
              className="rounded-3xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* EXPERT TEAM SECTION */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
            Skilled Experts Behind the Technology
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Our highly trained radiographers operate the Siemens ARTIS icono with precision and care. 
            They work closely with your doctors to capture detailed images during procedures, 
            adjusting the machine to ensure the clearest possible views while keeping your comfort and safety in mind.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Using their expertise, they help guide treatments in real time — so your medical team can make quick, confident decisions that lead to better outcomes.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12">
          Why This Matters to You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machine.benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              <FaCheckCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECS SECTION */}
      <section className="relative mt-32 mb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {machine.specs.map((spec, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-2xl flex items-center gap-4 hover:scale-105 transition transform cursor-pointer"
            >
              <FaCheckCircle className="text-blue-600 text-2xl" />
              <span className="font-semibold text-gray-700">{spec}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MachinePage;
