import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f1318] text-white py-16">
      <div className="mx-auto w-11/12 max-w-6xl grid gap-10 md:grid-cols-2">

        {/* Contact Form - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg order-1 md:order-1"
        >
          <h3 className="text-2xl font-semibold mb-6 text-black">Send a Message</h3>
          <form className="space-y-4 text-black">
            <input
              className="w-full rounded-lg border border-gray-300 p-3 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 p-3 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              placeholder="Email"
            />
            <input
              className="w-full rounded-lg border border-gray-300 p-3 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              placeholder="Phone"
            />
            <textarea
              rows="4"
              className="w-full rounded-lg border border-gray-300 p-3 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              placeholder="Message"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-400 px-5 py-3 font-medium text-black hover:bg-amber-300 transition-transform transform hover:scale-105"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Contact Info - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 order-2 md:order-2"
        >
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">Marci Metzger - THE RIDGE REALTY GROUP</p>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-amber-400 mt-1" />
            <div>
              <p>3190 HW-160, Suite F</p>
              <p>Pahrump, Nevada 89048, United States</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-amber-400" />
            <a href="tel:+12069196886" className="hover:underline">(206) 919-6886</a>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-amber-400 mt-1" />
            <div>
              <p>Office Hours:</p>
              <p className="text-gray-300">Open Daily: 08:00 AM – 07:00 PM</p>
              <p className="text-gray-400 text-sm">Appointments outside office hours available upon request.</p>
            </div>
          </div>

          <div className="flex gap-4 text-2xl mt-4">
            <a href="#" className="hover:text-amber-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-400 transition"><FaLinkedin /></a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
