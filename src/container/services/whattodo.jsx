import React from "react";
import { motion } from "framer-motion";
import AnimatedWord from "../../components/common/animatedword";

export default function WhatWeDo() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm md:text-base uppercase tracking-[4px] text-gray-400 mb-3"
      >
        What We Do
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-5xl"
      >
        Explore the power of AI tools, developed with ingenuity, brilliance, quality and{" "}
        <AnimatedWord
          words={["style", "pride", "joy"]}
          className="ml-2 "
          interval={2500}
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4"
      >
        <p className="text-lg font-semibold">Peter Bowman</p>
        <p className="text-gray-500 text-sm">Creative Director</p>
      </motion.div>
    </section>
  );
}
