import React from "react";
import { motion } from "framer-motion";

const plans = [
    {
        title: "Gold Pack",
        price: "$19",
        period: "/MO",
        features: [
            "3 User",
            "Basic Support",
            "Access to core features",
            "Email Notifications",
        ],
        button: "Get Now",
    },
    {
        title: "Silver Pack",
        price: "$49",
        period: "/MO",
        features: [
            "Up to 5 Users",
            "Priority Support",
            "Download prototypes",
            "Full API Access",
        ],
        button: "Get Now",
    },
];

export default function PricingSection() {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-start">
                {/* Subtitle */}
             

                {/* Pricing Boxes (2 Columns) */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="bg-[#141926] border border-gray-700  p-8 
                            flex flex-col justify-between text-center transition-all 
                            duration-300"
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                                <div className="text-4xl font-bold mb-6">
                                    {plan.price}
                                    <span className="text-base ">{plan.period}</span>
                                </div>

                                <ul className="text-gray-300 space-y-2 mb-6">
                                    {plan.features.map((feature, index) => (
                                        <motion.li
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center justify-center gap-2"
                                        >
                                            {/* Animated check using Framer Motion */}
                                           
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-auto bg-slate-700 hover:bg-slate-800
                                 text-white font-semibold py-3 px-5  rounded-lg transition-all
                                  duration-300"
                            >
                                {plan.button}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-start mt-24 max-w-2xl mx-auto"
                >
                    <p className="uppercase text-sm tracking-wider ">
                        Flexible & Affordable
                    </p>
                    <h3 className="text-3xl md:text-5xl font-medium mb-4">Our Pricing Plans</h3>
                    <p className="text-gray-400 mb-4">
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                        {[
                            "Suspendisse dignissim",
                            "Nullam efficitur nunc",
                            "Etiam eu lectus at lectus",
                        ].map((item, i) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-2"
                            >
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-green-400 text-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                    </svg>
                                </motion.span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
