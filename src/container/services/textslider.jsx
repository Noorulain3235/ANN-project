import React from "react";
import { motion } from "framer-motion";

export default function MovingText() {
  return (
    <div className="overflow-hidden bg-black py-8 md:py-20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Repeat the text several times for seamless looping */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-purple-500 text-5xl md:text-7xl font-extrabold tracking-widest mx-8"
          >
            AI Image Generator
          </span>
        ))}
      </motion.div>
    </div>
  );
}
