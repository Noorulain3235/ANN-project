import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StyledVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-auto bg-black
    flex items-center justify-center ">
      <div className="w-full max-w-7xl min-h-fit ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video  overflow-hidden shadow-2xl"
        >
          {/* Video Container */}
          <div className="absolute inset-0">
            <iframe
              title="vimeo-player"
              src={`https://player.vimeo.com/video/282496707?h=9dacac48cf${isPlaying ? '&autoplay=1' : ''}`}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
            />
          </div>

          {/* Play Button Overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer z-10"
                onClick={handlePlay}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Outer Ring with Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full border-4 border-white"
                  />
                  
                  {/* Main Circle */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white bg-transparent backdrop-blur-md flex items-center justify-center group">
                    {/* Play Text */}
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-light tracking-[0.3em] uppercase">
                      PLAY
                    </span>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Inner Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-8 sm:inset-10 md:inset-12 rounded-full bg-white/10 blur-xl pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 to-transparent pointer-events-none" />
        </motion.div>

       
      </div>
    </div>
  );
}