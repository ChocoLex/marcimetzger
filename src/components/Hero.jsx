import { motion } from "framer-motion";

const categories = ["Houses", "Condo", "Residential Lot", "Commercial Spaces", "Townhouses", "Beach House", "Hotel", "Beach Resort"];

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-cover bg-center flex items-center bg-[url('/hero.webp')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-6 z-20"
      >
        <img src="/logo.webp" alt="Marci Metzger Logo" className="w-40 md:w-52" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Pahrump Realtor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 text-lg"
        >
          MARCI METZGER - THE RIDGE REALTY GROUP
        </motion.p>

        {/* Quick Search Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="bg-black/50 backdrop-blur-md rounded-lg shadow-lg p-4 flex flex-wrap gap-4 text-white justify-center"
        >
          {/* Find Location */}
          <input
            type="text"
            placeholder="Find Location"
            className="border border-white/40 bg-transparent rounded p-2 w-52 placeholder-white text-white"
          />

          {/* Select Category */}
          <select className="border border-white/40 bg-transparent rounded p-2 w-52 text-white">
            <option className="bg-black/50 text-white">Select Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} className="bg-black/50 text-white">{cat}</option>
            ))}
          </select>

          {/* Select Type */}
          <select className="border border-white/40 bg-transparent rounded p-2 w-52 text-white">
            <option className="bg-black/50 text-white">Select Type</option>
            <option className="bg-black/50 text-white">Sale</option>
            <option className="bg-black/50 text-white">Rent</option>
          </select>

          {/* Sort By */}
          <select className="border border-white/40 bg-transparent rounded p-2 w-52 text-white">
            <option className="bg-black/50 text-white">Sort By</option>
            <option className="bg-black/50 text-white">Newest</option>
            <option className="bg-black/50 text-white">Price: Low to High</option>
            <option className="bg-black/50 text-white">Price: High to Low</option>
          </select>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-green-600 bg-opacity-80 text-white px-6 py-2 rounded w-40"
          >
            Search
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
