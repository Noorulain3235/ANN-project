import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSplitSection() {
  return (
    <div className="min-h-screen bg-black md:pt-12 pt-0 flex flex-col lg:flex-row">
      {/* Left Side - Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 h-screen relative overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
        
        {/* Overlay Text on Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-8 right-8 lg:bottom-20 lg:left-16"
        >
          <h2 className="text-white text-3xl lg:text-4xl font-bold ml-10 md:ml-40 leading-tight">
            We develop & create<br />digital future.
          </h2>
        </motion.div>
      </motion.div>

      {/* Right Side - Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 bg-black flex items-center justify-center p-8 lg:p-16"
      >
        <div className="max-w-xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm uppercase tracking-wider mb-6"
          >
            WHAT WE DO
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight mb-8"
          >
            Create your own AI business easily.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-400 text-sm lg:text-lg leading-relaxed mb-6"
          >
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold
             text-lg px-7 py-3 rounded-xl transition-all duration-300 shadow-lg 
             shadow-emerald-500/30"
          >
            About Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}