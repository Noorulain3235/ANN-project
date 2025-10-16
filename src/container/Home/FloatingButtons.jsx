import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [hovered, setHovered] = useState(null);

  // Common motion for hover text
  const HoverText = ({ text }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.2 }}
      className="bg-[#1f2231] text-white px-4 py-2 rounded-l-md font-semibold text-sm shadow-lg"
    >
      {text}
    </motion.div>
  );

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-end gap-2 z-50">
      {/* --- 1. BUY THEME BUTTON --- */}
      <motion.div
        className="flex items-center justify-end"
        onHoverStart={() => setHovered("theme")}
        onHoverEnd={() => setHovered(null)}
      >
        <AnimatePresence>{hovered === "theme" && <HoverText text="BUY THEME" />}</AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7b2ff7] w-12 h-12 flex items-center justify-center rounded-md
                     shadow-lg hover:bg-[#8b3ffb] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-cart3 w-6 h-6 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </motion.button>
      </motion.div>

      {/* --- 2. GALLERY BUTTON --- */}
      <motion.div
        className="flex items-center justify-end"
        onHoverStart={() => setHovered("gallery")}
        onHoverEnd={() => setHovered(null)}
      >
        <AnimatePresence>{hovered === "gallery" && <HoverText text="OUR BESTSELLER" />}</AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7b2ff7] w-12 h-12 flex items-center justify-center rounded-md shadow-lg hover:bg-[#8b3ffb] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-images w-6 h-6 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* --- 3. EVENTS BUTTON --- */}
      <motion.div
        className="flex items-center justify-end"
        onHoverStart={() => setHovered("events")}
        onHoverEnd={() => setHovered(null)}
      >
        <AnimatePresence>{hovered === "events" && <HoverText text="HIDE PANEL" />}</AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7b2ff7] w-12 h-12 flex items-center justify-center rounded-md shadow-lg hover:bg-[#8b3ffb] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-calendar3-event w-6 h-6 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
            <path d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
