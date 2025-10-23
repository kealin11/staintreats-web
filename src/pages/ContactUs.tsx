import { FaBrain } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F4F9FF]">
      {/* WELCOME BANNER */}
      <div
        className="relative h-[650px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/team 1.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Small Label */}
          <span className="bg-white text-black text-sm md:text-base font-semibold px-4 py-1 rounded-full uppercase tracking-widest mb-8 inline-block">
            <div>
              <FaBrain className="w-8 h-8 mx-auto" />
            </div>
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive information about stroke prevention, symptoms, and treatment
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#F9FAFB] p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Contact With Us</h2>
            <p className="text-gray-600 mb-6">
              Send us a message and we’ll respond as soon as possible.
            </p>

            {/* FormSubmit Form */}
            <form
              action="https://formsubmit.co/Radiology@milrad.co.za"
              method="POST"
              className="space-y-4"
            >
              {/* Hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://milpark-website.vercel.app/" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
                />
              </div>

              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />

              <textarea
                name="Message"
                rows={4}
                placeholder="Your Message here"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2563EB] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Need Any Help?</h2>
            <p className="text-gray-600">
              Call us or send a message and we’ll respond as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#2563EB] text-2xl">📞</span>
                <p>27 011 726 4220/9</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2563EB] text-2xl">📧</span>
                <p>international@milrad.co.za</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#2563EB] text-2xl">📍</span>
                <p>Netcare Milpark Hospital, 9 Guild Rd, Parktown, Johannesburg, 2193</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5166091318674!2d28.01487897420074!3d-26.179867962981014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950b8a9f1d73a5%3A0x76589ece2cee093c!2sNetcare%20Milpark%20Hospital!5e0!3m2!1sen!2sza!4v1756218237530!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
