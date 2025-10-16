import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const images = [
  "Screenshot 2025-10-12 104314.png",
  "Screenshot 2025-10-12 104406.png",
  "Screenshot 2025-10-14 065451.png",
  "Screenshot 2025-10-12 104442.png",
  "Screenshot 2025-10-14 065639.png",
  "Screenshot 2025-10-12 104249.png",
  "images (3).jfif",
];

export default function ImageSlider() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0); // For tracking drag position

  //  Update constraints dynamically
  useEffect(() => {
    const update = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;
      const newWidth = Math.max(0, inner.scrollWidth - outer.offsetWidth);
      setDragWidth(newWidth);
    };

    update();
    const ro = new ResizeObserver(update);
    if (innerRef.current) ro.observe(innerRef.current);

    const imgs = innerRef.current ? Array.from(innerRef.current.querySelectorAll("img")) : [];
    imgs.forEach((img) => img.addEventListener("load", update));

    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      imgs.forEach((img) => img.removeEventListener("load", update));
      ro.disconnect();
    };
  }, []);

  //  Track current slide index based on drag position
  useEffect(() => {
    const unsubscribe = x.onChange((latestX) => {
      const slideWidth = 300 + 24; // width + gap (Tailwind gap-6 ≈ 24px)
      const index = Math.round(Math.abs(latestX) / slideWidth);
      setCurrentIndex(Math.min(index, images.length - 1));
    });
    return () => unsubscribe();
  }, [x]);

  //  Clickable dots navigation
  const handleDotClick = (index) => {
    const slideWidth = 300 + 24;
    const newX = -index * slideWidth;
    x.set(newX);
  };

  return (
    <>
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div>


        {/* Slider Section */}
        <div className="w-full overflow-hidden bg-black py-16">
          <div
            ref={outerRef}
            className="hide-scrollbar cursor-grab active:cursor-grabbing overflow-hidden px-4"
          >
            <motion.div
              ref={innerRef}
              className="flex gap-6 items-stretch"
              drag="x"
              dragConstraints={{ right: 0, left: -dragWidth }}
              dragElastic={0.12}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              style={{ x, touchAction: "pan-y" }}
            >
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="flex-shrink-0  overflow-hidden shadow-lg bg-gray-800"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  style={{ width: "600px", minWidth: "300px" }}
                >
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ✅ Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-white scale-125"
                    : "bg-gray-500 hover:bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
