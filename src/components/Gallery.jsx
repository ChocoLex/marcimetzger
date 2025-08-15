import { useState, useEffect } from "react";

const FEEDBACKS = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Marci helped me find my dream home effortlessly. I couldn't be happier!",
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Professional and patient! Marci guided us every step of the way.",
  },
  {
    name: "Mark Johnson",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Excellent service and market knowledge. Highly recommend!",
  },
  {
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "We sold our property quickly thanks to Marci's strategy and expertise.",
  },
  {
    name: "Michael Lee",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Friendly, efficient, and very knowledgeable. A pleasure to work with!",
  },
];

export default function ClientFeedback() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % FEEDBACKS.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="feedback" className="bg-[#0f1318] py-12">
      <div className="mx-auto w-11/12 max-w-4xl text-center">
        <h2 className="font-poppins text-3xl md:text-4xl text-white mb-8">
          What Our Clients Say
        </h2>

        <div className="bg-black/50 rounded-2xl p-8 shadow-lg text-white transition-all duration-500">
          <img
            src={FEEDBACKS[current].photo}
            alt={FEEDBACKS[current].name}
            className="mx-auto w-20 h-20 rounded-full mb-4 object-cover border-2 border-amber-400"
          />
          <p className="text-lg italic mb-3">&quot;{FEEDBACKS[current].text}&quot;</p>
          <h3 className="font-semibold text-xl">{FEEDBACKS[current].name}</h3>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-center gap-3">
          {FEEDBACKS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-amber-400" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
