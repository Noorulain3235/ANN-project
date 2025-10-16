import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AIToolsHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-black md:pt-24 pt-10">
      {/* First Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center
       p-4 md:p-8 lg:p-16">
        {/* Left Side - Large Image */}
        <motion.div 
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={slideIn}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden  shadow-2xl">
            <img 
              src="Screenshot 2025-10-14 053534.png" 
              alt="Space landscape"
              className=" h-[300px] md:h-[450px] lg:h-[550px] w-[400px] md:w-[400px] lg:w-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div 
          className="w-full md:w-4xl md:pl-12 lg:pl-20"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p 
            className="text-gray-400 text-sm md:text-base uppercase tracking-widest mb-4"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            WELCOME
          </motion.p>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            Easy ways to use AI tools, and tools to build AI.
          </motion.h1>
           <img 
              src="Screenshot 2025-10-14 053512.png" 
              alt="Space landscape"
              className=" h-[300px] md:h-[450px] lg:h-[550px] w-[400px] md:w-[500px] lg:w-[600px] object-cover"
            />
        </motion.div>
       
      </section>

     
    </div>
  );
}