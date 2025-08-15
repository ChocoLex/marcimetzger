export default function About() {
  return (
    <section className="bg-gradient-to-r from-white via-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left - About Marci */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Marci</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Marci was a REALTOR, then licensed Broker, 
            in Washington State. Now, she is enjoying the sunshine, 
            and helping clients in Southern Nevada. Having helped buyers and 
            sellers in many markets since 1995, she is a wealth of knowledge.
          </p>
        </div>

        {/* Middle - Photo */}
        <div className="flex justify-center">
          <img
            src="/marci.webp" // replace with actual image path
            alt="Marci Metzger"
            className="rounded-2xl shadow-xl w-64 h-64 object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right - Quote */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <blockquote className="italic text-lg text-gray-700 border-l-4 border-green-500 pl-4">
            "I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there's a place for you here!
            I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me."
          </blockquote>
          <p className="mt-4 text-gray-500 text-sm">
            – Marci Metzger
          </p>
        </div>
      </div>
    </section>
  );
}
