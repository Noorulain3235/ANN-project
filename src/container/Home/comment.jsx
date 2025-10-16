import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    comment:
      "Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi. sint occaecatii gnissimos incididunt ducimus.",
    name: "Jennifer Hill",
    profession: "Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    comment:
      "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched in the industry.",
    name: "Michael Chen",
    profession: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    comment:
      "The results exceeded our expectations. Professional, efficient, and truly dedicated to delivering the best possible outcome for our project.",
    name: "Sarah Williams",
    profession: "Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];
  const prevIndex =
    currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="min-h-screen bg-[#141926] flex 
    items-center justify-center p-4">
      <div className="max-w-4xl w-full relative">
        {/* Left Arrow (Framer Motion version) */}
        <motion.button
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          aria-label="Previous testimonial"
        >
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.div>
        </motion.button>

        {/* Right Arrow (Framer Motion version) */}
        <motion.button
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
          aria-label="Next testimonial"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </motion.button>

        {/* Testimonial Content */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <svg
                  className="w-12 h-12 text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <p className="text-white text-xl md:text-2xl leading-relaxed mb-12 px-4 max-w-3xl mx-auto">
                {currentTestimonial.comment}
              </p>

              <div className="mb-8">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {currentTestimonial.name}
                </h3>
                <p className="text-slate-400 text-lg">
                  {currentTestimonial.profession}
                </p>
              </div>

              <div className="flex justify-center items-center gap-6 mt-12">
                <motion.button
                  onClick={() => paginate(-1)}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={testimonials[prevIndex].image}
                    alt={testimonials[prevIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-600 opacity-50 group-hover:opacity-75 transition-opacity duration-200"
                  />
                </motion.button>

                <motion.div layoutId="current-avatar" className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-300 shadow-lg shadow-blue-500/50"
                  />
                </motion.div>

                <motion.button
                  onClick={() => paginate(1)}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={testimonials[nextIndex].image}
                    alt={testimonials[nextIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-600 opacity-50 group-hover:opacity-75 transition-opacity duration-200"
                  />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-300 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
