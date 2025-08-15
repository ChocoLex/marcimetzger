import { motion } from "framer-motion";

const Card = ({ icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="rounded-2xl border p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white"
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="font-semibold text-2xl mb-3">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Real Estate Done Right",
      desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
    },
    {
      icon: "🏢",
      title: "Commercial & Residential",
      desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars."
    },
    {
      icon: "🧭",
      title: "Rely on Expertise",
      desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Card key={i} icon={service.icon} title={service.title} desc={service.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
