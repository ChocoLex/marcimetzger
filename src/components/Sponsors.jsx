import { motion } from "framer-motion";

const sponsors = [
  { name: "Sponsor 1", logo: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100" },
  { name: "Sponsor 2", logo: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg:true" },
  { name: "Sponsor 3", logo: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg:true" },
  { name: "Sponsor 4", logo: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:1004" },
];

export default function Sponsors() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Our Partners
        </motion.h2>

        <div className="flex justify-center flex-wrap gap-16">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
