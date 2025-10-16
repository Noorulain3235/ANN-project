import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'Design', percentage: 80 },
  { name: 'Technology', percentage: 90 },
  { name: 'Animation', percentage: 85 },
];

function SkillBar({ name, percentage, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-8 last:mb-0"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl md:text-2xl font-semibold text-white">{name}</h3>
        <span className="text-xl md:text-2xl font-bold text-white">{percentage}%</span>
      </div>
      
      <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
        >
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-transparent to-white/20"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <div className="min-h-auto bg-black flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Side - Progress Bars */}
        <div className="flex flex-col justify-center">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              index={index}
            />
          ))}
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm md:text-base text-slate-400 uppercase tracking-wider mb-4"
            >
              OUR PRACTICE
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              Skills
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed mb-2"
            >
              Dict sunt explicabo nemo ipsam voluptatem voluptas. Adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-base md:text-lg text-slate-400 leading-relaxed"
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem qui aspernatur aut odit aut fugit, sed quia consequntur.
            </motion.p>
          </motion.div>
        </div>
      </div>

   
    </div>
  );
}