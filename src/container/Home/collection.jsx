import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Blockstyle from "../../components/common/blockstyle"


// Icon for "Computer Vision" (Stylized Stack/Database)
const DatabaseIcon = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-flower2 mb-4 w-20 h-20 text-gray-400 hover:text-white" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>
);

// Icon for "Automated Reasoning" (Stylized Spark/Zap)
const ZapIcon = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-claude w-20 h-20 mb-4 text-gray-400 hover:text-white " viewBox="0 0 16 16">
  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
</svg>
);

// Icon for the Arrow 
const ChevronRightIcon = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right text-white mt-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
);


// --- 2. FeatureCard Component ---

const AnimatedLink = ({ isHovered }) => {
 
  const textVariants = {
    initial: { width: 0, opacity: 0, marginLeft: 0 },
    hover: { width: 'auto', opacity: 1, marginLeft: 8 }, // ml-2 is 8px
  };

  return (
    <div className="flex items-center mt-4">
     

      {/* 'Read More' Text */}
      <motion.span
        variants={textVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        transition={{ 
          width: { duration: 0.3 },
          opacity: { duration: 0.2, delay: isHovered ? 0.1 : 0 } 
        }}
        className="text-sm tracking-wider text-white font-semibold whitespace-nowrap overflow-hidden"
      >
        Read More
      </motion.span>
       {/* ChevronRight Icon */}
      <motion.div
        animate={{
          x: isHovered ? 4 : 0, // Moves the arrow slightly on hover
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <ChevronRightIcon className="w-5 h-5 " />
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ title, icon: IconComponent }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Framer Motion values for the text and icons to change color
  // Tailwind gray-500 is roughly #6B7280, using a darker gray for the initial state.
  const initialColor = '#71717A'; // Tailwind zinc-500/gray-500
  const finalColor = '#FFFFFF';

  const colorValue = useMotionValue(initialColor);
  const color = useTransform(colorValue, latest => latest);

  // Animation to smoothly transition the color
  useEffect(() => {
    if (isHovered) {
      colorValue.start(finalColor, { duration: 0.3 });
    } else {
      colorValue.start(initialColor, { duration: 0.3 });
    }
  }, [isHovered, colorValue, initialColor, finalColor]);

  return (
    <motion.div
      className="p-8 md:p-12  cursor-pointer  duration-300 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full ">
        
        {/* Icon Section (The large icon at the top) */}
        <motion.div style={{ color }} transition={{ duration: 0.3 }}>
          <IconComponent className="w-16 h-16 md:w-20 md:h-20 mb-8  " />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
          {title}
        </h3>

        {/* Arrow/Read More Section */}
        <motion.div style={{ color }}>
          <AnimatedLink isHovered={isHovered} />
        </motion.div>
      </div>
    </motion.div>
  );
};


// --- 3. Main App Component ---

function App() {
  return (
   <>
     <div className="min-h-screen bg-black text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* =======================
            TOP HEADER SECTION
            ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-12 pb-16 md:pb-24">
          
          {/* Left Side: Headline */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-2">
              Huge Collection
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              More algorithms than anywhere else.
            </h1>
          </div>
          
          {/* Right Side: Description */}
          <div className="pt-8 lg:pt-0">
            <p className="text-lg text-zinc-300">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="text-lg text-zinc-300 mt-4">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>

        {/* =======================
            FEATURE CARDS SECTION
            ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className='md:border-r border-gray-700 text-gray-400 border-none md:border-solid'>

          <FeatureCard
            title="Natural Language"
            icon={DatabaseIcon} 
          />
          </div>
          
          <FeatureCard
            title="Face Recognization"
            icon={ZapIcon} 
          />
        </div>
      </div>
      
    </div>
    <Blockstyle/>
   </>
  );
}

export default App;