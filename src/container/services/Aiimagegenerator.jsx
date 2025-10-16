import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIImageGenerator() {
    const [currentImage, setCurrentImage] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

    const images = [
        "close-up-sakura-haruno-short-pink-hair-big-sparkling-green-eyes-focus-on-eyes-aesthetic-different-po.webp", // replace with your image paths
        "images.jfif",
    ];

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentImage((prev) => (prev + 1) % images.length),
            4000
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-black text-white py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-10 relative overflow-hidden">
            {/* Left Section (Image + Boxes) */}
            <div className="relative w-full lg:w-1/2 h-[600px]  overflow-hidden">
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="AI artwork"
                        className="absolute w-full h-full object-cover "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                </AnimatePresence>

                {/* Overlay Boxes */}
                <div className="absolute bottom-8 left-8 flex flex-col md:flex-row gap-4">
                    <div className="bg-purple-600 p-4 md:px-14 md:py-6  shadow-lg">
                        <p className="text-sm text-gray-200">People</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold">100+</h2>

                        <p className="text-sm text-gray-200">Adipiscing elit, do eiusm.</p>
                    </div>
                    <div className="bg-black p-4  md:px-14 md:py-6 shadow-lg">
                        <p className="text-sm text-gray-200">World Offices</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold">16</h2>

                        <p className="text-sm text-gray-200">Adipiscing elit, do eiusm.</p>
                    </div>
                </div>
            </div>

            {/* Right Section (Text + Video + Rotating Image) */}
            <div className="relative w-full lg:w-1/2 flex flex-col items-start space-y-6">
                {/* Video Button */}
                <motion.button
                    onClick={() => setShowVideo(true)}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                </motion.button>

                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 ">
                        AI Image Generator FAQs
                    </h2>

                    <div className="space-y-3 text-gray-300">
                        <p className="font-semibold text-white">
                            What It Takes to Create an Image?
                        </p>
                        <p className="text-sm">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <p className="font-semibold text-white">
                            + What’s the Standard Image Size?
                        </p>
                        <p className="font-semibold text-white">
                            + Can I Create Multiple Images at Once?
                        </p>
                    </div>
                </div>

                {/* Rotating Circle Image */}
                <motion.img
                    src="Screenshot_2025-10-14_090258-removebg-preview.png" // circular text image
                    alt="rotating text"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className="w-24 h-24 absolute bottom-0 right-0 "
                />
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative w-[90%] md:w-[70%] lg:w-[60%]">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-3 right-3 text-white text-2xl hover:text-purple-500"
                            >
                                ×
                            </button>

                            {/* Video */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full rounded-lg shadow-lg overflow-hidden"
                            >
                                <iframe
                                    title="vimeo-player"
                                    src="https://player.vimeo.com/video/282496707?h=9dacac48cf"
                                    width="640"
                                    height="360"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    allowFullScreen
                                    className="w-full h-80"
                                ></iframe>
                            </motion.div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
