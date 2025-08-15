import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Serving the Area
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            title="Marci's Service Area"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2726931706165!2d-115.95782812434162!3d36.18424937242917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1755246480643!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex justify-center"
        >
       
        </motion.div>
      </div>
    </section>
  );
}
  