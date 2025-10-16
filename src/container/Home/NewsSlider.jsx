import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const news = [
  {
    id: 1,
    category: "MODERN",
    date: "February 2, 2022",
    title: "A few simple steps to start your own projects",
    img: "Screenshot 2025-10-13 081350.png",
  },
  {
    id: 2,
    category: "MODERN",
    date: "February 3, 2022",
    title: "How to choose the right line in app development?",
    img: "Screenshot 2025-10-13 081406.png",
  },
  {
    id: 3,
    category: "MODERN",
    date: "February 4, 2022",
    title: "AI software can help you avoid same boring patterns",
    img: "Screenshot 2025-10-13 081426.png",
  },
  {
    id: 4,
    category: "MODERN",
    date: "February 5, 2022",
    title: "How to make your designs stand out in 2025",
    img: "Screenshot 2025-10-13 081442.png",
  },
];

export default function NewsSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % news.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + news.length) % news.length);

  return (
    <section className="bg-[#141926] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-gray-400 uppercase tracking-widest text-sm">Our Latest News</p>
        <h2 className="text-5xl font-bold mt-2">News & Articles</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {/* Show two cards at once */}
            {[
              news[index],
              news[(index + 1) % news.length],
            ].map((item) => (
              <div
                key={item.id}
                className="bg-[#141926]  overflow-hidden shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-80 w-full object-cover"
                />
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-400">
                    {item.category} • {item.date}
                  </p>
                  <h3 className="text-2xl font-semibold mt-2 leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {news.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-emerald-400 scale-110" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
