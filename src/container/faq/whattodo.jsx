import React from "react";
import { motion } from "framer-motion";
import AnimatedWord from "../../components/common/animatedword";
import { Link } from "react-router-dom";

export default function WhatWeDo() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-sm md:text-base uppercase tracking-[4px] text-gray-400 mb-3"
      >
       design agency

      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug max-w-5xl"
      >
        The area of our{" "}
        <AnimatedWord
          words={["expertise","expertise"]}
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
        <Link to="/about">
          <button  className="py-3 px-6 rounded-xl bg-green-400 hover:bg-green-500">
        About Us</button>
        </Link>
      </motion.div>
    </section>
  );
}
