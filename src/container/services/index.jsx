import React from "react";
import { motion } from "framer-motion";
import Whattodo from "./whattodo";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Unique Technologies",
            desc: "Consectetur adipiscing elit, sed do eiusmod tempo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14 text-purple-500 bi bi-ui-checks-grid" viewBox="0 0 16 16">
                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Endless Possibilities",
            desc: "Consectetur adipiscing elit, sed do eiusmod tempo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-14 h-14 text-purple-500 bi bi-brilliance" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Reliable Experts",
            desc: "Consectetur adipiscing elit, sed do eiusmod tempo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-14 h-14 text-purple-500 bi bi-rainbow" viewBox="0 0 16 16">
                    <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7m0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3m0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1" />
                </svg>
            ),
        },
        {
            id: 4,
            title: "Excellent Support",
            desc: "Consectetur adipiscing elit, sed do eiusmod tempo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" w-14 h-14 text-purple-500 bi bi-flower2" viewBox="0 0 16 16">
                    <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <div className="relative w-full h-64">
                {/* Image */}
                <img
                    src="Screenshot 2025-10-12 104406.png"
                    alt="front"
                    className="w-full h-64 object-cover"
                />

                {/* Gradient overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            <section className="bg-black text-white py-20 px-6 md:px-12">

                <div className="max-w-6xl mx-auto text-center md:mb-36 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{
                                backgroundColor: "#7C3AED",
                                scale: 1.03,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-black  px-8 py-16 text-center hover:text-white
                             cursor-pointer transition-colors border border-transparent
                              hover:border-purple-600"
                        >
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </section>
            <Whattodo />
        </>
    );
}
