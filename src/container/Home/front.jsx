import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIArtGenerator() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0a0e1a]
     to-[#0a0e1a] text-white p-8 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl  mt-20 font-bold mb-14 bg-gradient-to-r from-yellow-200 via-green-200 to-green-400 bg-clip-text text-transparent">
            Create beautiful art with
            <br />
            Artificial Intelligence
          </h1>
          <p className="text-gray-400 text-lg">
            Be advised that image generation requires an active OpenAI, Stability AI or Stable Diffusion token.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`text-lg font-medium ${
              !isAdvanced ? "text-white" : "text-gray-500"
            }`}
          >
            Standard
          </span>
          <button
            onClick={() => setIsAdvanced(!isAdvanced)}
            className="relative w-16 h-8 bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
              animate={{ x: isAdvanced ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={`text-lg font-medium ${
              isAdvanced ? "text-white" : "text-gray-500"
            }`}
          >
            Advanced
          </span>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {!isAdvanced ? (
            // Standard Mode
            <motion.div
              key="standard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Chat and Generate Buttons */}
              {/* <div className="flex gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-colors"
                >
                 
                  <motion.div
                    className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  >
                    💬
                  </motion.div>
                  Presale Chat
                </motion.button>
              </div> */}

              {/* Search Bar and Generate Button */}
              <div className="flex gap-4 w-full max-w-3xl">
                <div className="flex-1 bg-white rounded-2xl px-6 py-4 text-gray-800">
                  <input
                    type="text"
                    placeholder="Describe what you want..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full bg-transparent outline-none text-lg"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-2xl font-medium transition-colors"
                >
                  Generate
                </motion.button>
                {/* <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="p-4 bg-white hover:bg-gray-100 rounded-2xl transition-colors"
                > */}
                  {/* Animated gear icon (replacing Sliders) */}
                  {/* <motion.div
                    className="w-5 h-5 border-2 border-gray-800 rounded-full"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "linear",
                    }}
                  ></motion.div> */}
                {/* </motion.button> */}
              </div>

              {/* Popular Tags */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-gray-400">Popular Tags:</span>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  Creative
                </button>
              </div>
            </motion.div>
          ) : (
            // Advanced Mode
            <motion.div
              key="advanced"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              {/* Tabs */}
              <div className="flex gap-8 mb-8 border-b border-gray-700">
                <button className="pb-4 text-white font-medium border-b-2 border-white">
                  GENERATION
                </button>
                <button className="pb-4 text-gray-500 font-medium hover:text-gray-300 transition-colors">
                  VARIATIONS
                </button>
                <button className="pb-4 text-gray-500 font-medium hover:text-gray-300 transition-colors">
                  UPSCALE
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Prompt
                    </label>
                    <textarea
                      placeholder="Describe what you want or hit a tag below"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full h-32 bg-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-400 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Negative prompt (optional):
                    </label>
                    <textarea
                      placeholder="Items you don't want in the image"
                      value={negativePrompt}
                      onChange={(e) => setNegativePrompt(e.target.value)}
                      className="w-full h-32 bg-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-400 resize-none"
                    />
                  </div>

                  {/* Popular Tags */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-gray-400">Popular Tags:</span>
                    {["Creative", "Hyperreality", "Steampunk"].map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Model
                    </label>
                    <select className="w-full bg-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-400 cursor-pointer">
                      <option>Stable Diffusion default</option>
                      <option>DALL-E 3</option>
                      <option>Midjourney</option>
                      <option>Stable Diffusion XL</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-medium mb-3">
                      Size (px)
                    </label>
                    <select className="w-full bg-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-green-400 cursor-pointer">
                      <option>512 x 512</option>
                      <option>768 x 768</option>
                      <option>1024 x 1024</option>
                      <option>1024 x 768</option>
                      <option>768 x 1024</option>
                    </select>
                  </div>

                  {/* Generate Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-green-600 hover:bg-green-700 rounded-xl font-medium text-lg transition-colors mt-8"
                  >
                    Generate
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border border-b mt-8 text-gray-800"></div>
      <p className="mt-4 text-gray-500 text-center">Limits per hour: 80 images for all visitors 
        and up to 2 requests from a single visitor.</p>
        <p className="mt-2 text-white text-center">Used: 0 images, 0 requests.</p>
    </div>
  );
}
