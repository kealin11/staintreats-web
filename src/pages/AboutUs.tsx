import { FaBrain, FaStethoscope, FaUsers, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#F4F9FF]">
      {/* ABOUT HERO BANNER */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/candit 1.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <FaBrain className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            At the MILPARK Neurointerventional Unit, we are dedicated to
            advancing neurovascular and spinal care with precision, innovation,
            and compassion.
          </p>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/work 6.jpg"
              alt="Neurointervention Care"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase text-[#2563EB] tracking-widest">
              Our Mission
            </span>
            <h2 className="text-4xl font-bold text-[#1E293B] leading-snug mt-4">
              World-Class Minimally Invasive Neurovascular & Spinal Care
            </h2>
            <p className="text-gray-600 mt-4">
              At the MILPARK Neurointerventional Unit, we are dedicated to
              providing advanced care for complex neurovascular and spinal
              conditions. Guided by evidence-based practice, we combine
              state-of-the-art technology with compassion to achieve optimal
              patient outcomes.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#2563EB] text-xl">✔</span>
                <p>Safe, timely, and effective interventions</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2563EB] text-xl">✔</span>
                <p>Cutting-edge technology with expert precision</p>
              </div>
            </div>

            <Link
              to="/team"
              className="mt-6 inline-block bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIST SECTION */}
      <section className="bg-[#F4F9FF] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Meet Dr. Moaaz Valli Omar
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our neuro-intervention specialist, Dr. Moaz Omar, combines of
            expertise with cutting-edge technology to deliver life-saving
            treatments such as acute stroke thrombectomy, aneurysm repair, and
            management of arteriovenous malformations.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#F4F9FF] rounded-xl shadow hover:shadow-md transition">
            <FaHeartbeat className="w-10 h-10 mx-auto text-[#2563EB] mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B]">Stroke Thrombectomy</h3>
            <p className="text-gray-600 mt-2">
              Rapid, minimally invasive treatment for acute stroke.
            </p>
          </div>
          <div className="p-6 bg-[#F4F9FF] rounded-xl shadow hover:shadow-md transition">
            <FaStethoscope className="w-10 h-10 mx-auto text-[#2563EB] mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B]">Aneurysm Repair</h3>
            <p className="text-gray-600 mt-2">
              Advanced procedures to restore vascular integrity and prevent
              rupture.
            </p>
          </div>
          <div className="p-6 bg-[#F4F9FF] rounded-xl shadow hover:shadow-md transition">
            <FaUsers className="w-10 h-10 mx-auto text-[#2563EB] mb-4" />
            <h3 className="font-bold text-lg text-[#1E293B]">AVM Treatments</h3>
            <p className="text-gray-600 mt-2">
              Tailored care for arteriovenous malformations with precision and
              safety.
            </p>
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="py-20 bg-[#F4F9FF]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#1E293B]">
              Collaboration & Research
            </h2>
            <p className="text-gray-600 mt-4">
              Collaboration is at the heart of what we do. We work closely with
              neurologists, neurosurgeons, and multidisciplinary teams to ensure
              comprehensive treatment. Beyond interventions, we emphasize
              patient education, family support, and pioneering research that
              pushes the boundaries of neurovascular care.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-[#2563EB] text-xl">✔</span> Multidisciplinary teamwork
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2563EB] text-xl">✔</span> Patient & family-centered care
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#2563EB] text-xl">✔</span> Ongoing research & innovation
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/candit 2.jpg"
              alt="Collaboration in Care"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-6 py-3 rounded-lg shadow text-[#1E293B] font-semibold">
              Restoring lives, one intervention at a time
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
