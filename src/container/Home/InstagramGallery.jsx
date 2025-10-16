import React from "react";
import { motion } from "framer-motion";

const images = [
  "Screenshot 2025-10-13 095716.png",
  "Screenshot 2025-10-12 104823.png",
  "Screenshot 2025-10-13 095739.png",
  "Screenshot 2025-10-13 095756.png",
  "Screenshot 2025-10-13 095808.png",
  "Screenshot 2025-10-13 095825.png",
];

export default function InstagramGallery() {
  return (
    <section className="bg-black py-10 relative">
      {/* ✅ Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center
       gap-2 md:gap-0 px-2 relative">
        {/* All 6 images in one row on desktop */}
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-[140px] sm:w-[180px] md:w-[230px] lg:w-[250px] aspect-square 
            overflow-hidden "
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}

        {/* ✅ Instagram Icon Overlay (centered) */}
        <motion.a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="absolute bg-black rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        >
          {/* Custom SVG Instagram Icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 md:w-9 md:h-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 3h9A4.5 4.5 0 0121 7.5v9A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3z"
            />
            <circle cx="12" cy="12" r="3.5" stroke="white" strokeWidth="1.5" />
            <circle cx="17" cy="7" r="0.8" fill="white" />
          </motion.svg>
        </motion.a>
      </div>

      {/* ✅ Responsive layout: Stack images in 2 columns with centered icon */}
      <style>
        {`
          @media (max-width: 768px) {
            section > div {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }
            section > div > a {
              grid-column: 1 / 3;
              grid-row: 2;
              justify-self: center;
            }
          }
        `}
      </style>
    </section>
  );
}
