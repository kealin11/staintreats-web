import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock,  } from "lucide-react";

const Contact = () => {
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
          className="relative z-10 text-white px-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Whether you’re looking to book a wash, get a quote, or learn more
            about our packages — we’re here to help!
          </p>
        </motion.div>
      </div>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Have a question or want to schedule a service? Fill out the form
              below and our team will get back to you shortly.
            </p>

            <form
              action="https://formsubmit.co/jd.stain@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Message" />
              <input type="hidden" name="_next" value="https://staintreats.co.za/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="First Name"
                  placeholder="First Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Last Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
                />
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
              />

              <textarea
                name="Message"
                rows={5}
                placeholder="Your Message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Send Message →
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Visit us, give us a call, or send a message — we’re always ready
              to make your car shine like new.
            </p>

            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-600" />
                <p>
                  <a href="tel:+27670997668" className="hover:underline">
                    067 099 7668
                  </a>{" "}
                  /{" "}
                  <a href="tel:+27815326178" className="hover:underline">
                    081 532 6178
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-red-600" />
                <a href="mailto:jd.stain@gmail.com" className="hover:underline">
                  jd.stain@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-red-600" />
                <p>12 Saint Joan Ave, Eldorado Park, Johannesburg, South Africa</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-red-600" />
                <p>Mon – Sun: 08:00 – 18:00</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="StainTreats Car Wash Location"
                src="https://www.google.com/maps?q=12+Saint+Joan+Ave,+Eldorado+Park,+Johannesburg,+South+Africa&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="bg-gradient-to-r from-red-700 to-red-500 py-10 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Let’s Make Your Car Shine Today!
        </h3>
        <p className="text-red-100 mb-4">
          Reach out and book your next premium wash experience.
        </p>
        <a
          href="tel:+27670997668"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-md"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default Contact;
