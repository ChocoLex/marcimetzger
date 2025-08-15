import { motion } from "framer-motion";

const stats = [
  {
    number: "90",
    description: "Clients helped in 2021",
  },
  {
    number: "$28.5M",
    description: "Closed in sales",
  },
];

const highlights = [
  {
    title: "Don't Just List it...",
    description:
      "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    title: "Guide to Buyers",
    description:
      "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];

export default function GetItDoneSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Top Residential Sales Last 5 Years
        </motion.h2>
        <p className="text-center text-gray-700 mb-12">
          We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
              <p className="text-gray-700">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights / Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
