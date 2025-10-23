import { Link } from "react-router-dom";
import { Stethoscope, Brain, Activity, HeartPulse, Eye, Syringe, Droplet, Bone } from "lucide-react"; 

const HeroSection = () => {
  return (
    <>
      {/* WELCOME BANNER (unchanged) */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/team 4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <span className="bg-white text-black text-sm md:text-base font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-8 inline-block">
            Welcome to Milpark
          </span>
          <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
            Exceptional Radiology Care for Patients
          </h1>
          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <Link
              to="/services"
              className="bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-4 rounded-full font-semibold text-lg transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-full font-semibold text-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US + MISSION (unchanged) */}
      <section className="bg-[#F4F9FF] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Why Choose Us */}
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase text-[#2563EB] tracking-widest">
              Why Choose Us?
            </span>
            <h2 className="text-4xl font-bold text-[#1E293B] leading-snug">
              Leading the Future of Brain & Spine Care
            </h2>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#1E293B]">
                    Expert Care
                  </h3>
                  <p>
                    Highly trained specialists in minimally invasive brain and
                    spine procedures.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#1E293B]">
                    Cutting-Edge Technology
                  </h3>
                  <p>The latest in neuroimaging and advanced interventions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#2563EB] text-xl">✔</span>
                <div>
                  <h3 className="font-semibold text-lg text-[#1E293B]">
                    Patient-Centered
                  </h3>
                  <p>
                    Every decision guided by safety, recovery, and quality of
                    life.
                  </p>
                </div>
              </li>
            </ul>

            <Link
              to="/about"
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition mt-6"
            >
              Learn More
            </Link>
          </div>

          {/* RIGHT: Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-10 relative">
            <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We believe{" "}
              <span className="font-semibold text-[#2563EB]">time is brain</span>. 
              Every second matters in neuro-intervention. Our mission is to
              deliver world-class treatment with{" "}
              <strong>speed, precision, and compassion</strong> — giving patients
              the best chance at recovery and renewed quality of life.
            </p>
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-[#2563EB]/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (IMPROVED + BUTTON UNDER SECTION) */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-12">
            Our Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
            
            {[
              { title: "Brain Aneurysm Coiling & Flow Diversion", desc: "Minimally invasive treatment to prevent rupture and improve outcomes.", Icon: Brain },
              { title: "Arteriovenous Malformations (AVM)", desc: "Advanced neurointerventional techniques for abnormal vessel connections.", Icon: Activity },
              { title: "Ischemic Stroke Intervention", desc: "Rapid thrombectomy and clot removal to restore blood flow.", Icon: HeartPulse },
              { title: "Carotid Artery Stenting", desc: "Opens narrowed arteries to reduce future stroke risks.", Icon: Stethoscope },
              { title: "Venous Sinus Stenting for IIH", desc: "Relieves pressure and symptoms from intracranial hypertension.", Icon: Eye },
              { title: "Dural Arteriovenous Fistula (dAVF)", desc: "Endovascular treatment for abnormal artery-vein connections.", Icon: Syringe },
              { title: "CSF-Venous Fistula Embolization", desc: "Manages cerebrospinal fluid leaks via embolization.", Icon: Droplet },
              { title: "Spinal Dural Arteriovenous Fistula (SDAVF)", desc: "Restores blood flow and neurological outcomes.", Icon: Bone },
            ].map(({ title, desc, Icon }, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F4F9FF] rounded-2xl shadow hover:shadow-lg transition text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-[#2563EB]" />
                  <h3 className="text-xl font-semibold text-[#1E293B]">{title}</h3>
                </div>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}

          </div>

          {/* BUTTON UNDER SERVICES */}
          <a
            href="/services"
            className="inline-block bg-[#2563EB] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View Our Services
          </a>
        </div>
      </section>

      {/* TEAM SECTION (IMAGE LEFT, TEXT RIGHT, BIGGER IMAGE) */}
      <section className="bg-[#F4F9FF] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Team Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/team 7.jpg"
              alt="Milpark Radiology Team"
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Right: Team Content */}
          <div>
            <span className="text-sm font-semibold uppercase text-[#2563EB] tracking-widest">
              Meet Our Team
            </span>
            <h2 className="text-4xl font-bold text-[#1E293B] mt-2 mb-6">
              Dedicated Experts in Patient Care
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team of radiologists, neurologists, and healthcare
              professionals are committed to delivering exceptional care with
              compassion and precision. Every member plays a crucial role in
              ensuring patients receive accurate diagnostics and effective
              treatments.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#2563EB] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (unchanged) */}
      <section
        id="contact"
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-20"
      >
        <div className="hero-gradient p-12 md:p-20 text-white relative">
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Our Address</h3>
              <p className="text-white">Netcare Milpark Hospital</p>
              <p className="text-white">9 Guild Rd. Parktown</p>
              <p className="text-white">Johannesburg 2193</p>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
              <p className="text-white">
                Phone:{" "}
                <a href="tel:+27117264220" className="text-white hover:underline">
                  +27 011 726 4220/9
                </a>
              </p>
              <p className="text-white">
                Email:{" "}
                <a
                  href="mailto:international@milrad.co.za"
                  className="text-white hover:underline"
                >
                  international@milrad.co.za
                </a>
              </p>
            </div>
            {/* Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Opening Hours</h3>
              <p className="text-white">Open 24 Hours</p>
            </div>
          </div>
          <div className="mt-10 text-center text-sm text-white">
            &copy; {new Date().getFullYear()} Milpark Radiology. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
