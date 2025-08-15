import { motion } from "framer-motion";

const categories = [
  { title: "Houses", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80", count: 2 },
  { title: "Condos", image: "https://i.pinimg.com/736x/82/08/95/8208956dab94aa02f5228ca14c50dda1.jpg", count: 3 },
  { title: "Residential Lot", image: "https://i.pinimg.com/736x/41/24/bb/4124bb415132a2ba5a19133ceb578a32.jpg", count: 1 },
  { title: "Commercial Spaces", image: "https://i.pinimg.com/736x/b7/06/bc/b706bc4a553a252a00ac3e326879248e.jpg", count: 4 },
  { title: "Townhouses", image: "https://i.pinimg.com/736x/a4/b7/7a/a4b77a457bd598e1b8e933d3274f4c56.jpg", count: 2 },
  { title: "Beach House", image: "https://i.pinimg.com/1200x/7c/a8/fc/7ca8fc1799210f0d0aba98b94b8eb7d0.jpg", count: 1 },
  { title: "Hotel", image: "https://i.pinimg.com/736x/69/91/a0/6991a06d2c0dfea1f6efa46286d65a81.jpg", count: 3 },
  { title: "Beach Resort", image: "https://i.pinimg.com/1200x/32/74/eb/3274eb8768ee5c467e14cc7ffbbdaa88.jpg", count: 2 },
  { title: "Agriculture/Farm Land", image: "https://i.pinimg.com/736x/2c/da/e0/2cdae0a3e3aff447dd5beb7519d557ff.jpg", count: 2 },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-2"
        >
          Real Estate Categories
        </motion.h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Listed below are all the categories that contain property for sale.
        </p>

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer relative group"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Always visible category name at bottom middle */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/60 w-full text-center py-2">
                <h3 className="text-white font-semibold">{cat.title}</h3>
                <p className="text-gray-300 text-sm">{cat.count} properties</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
