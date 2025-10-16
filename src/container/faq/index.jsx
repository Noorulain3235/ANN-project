import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Animated Message Icon made with Framer Motion SVG
const AnimatedMessageIcon = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            initial={{ y: -3 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
            }}
        >
            <motion.path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </motion.svg>
    );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-700">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group hover:opacity-80 transition-opacity"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-white pr-8">
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="text-white"
                    >
                        <line
                            x1="16"
                            y1="8"
                            x2="16"
                            y2="24"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <line
                            x1="8"
                            y1="16"
                            x2="24"
                            y2="16"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-400 text-base md:text-lg leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ChatButton = () => {
    return (
        <motion.div
            className="fixed bottom-8 left-8 flex items-center gap-3 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-5 shadow-lg transition-colors"
            >
                {/* 🔹 Replaced Lucide MessageSquare with Framer Motion SVG */}
                <AnimatedMessageIcon />
            </motion.button>
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-full px-6 py-3 shadow-lg"
            >
                <span className="text-gray-900 font-medium">Presale Chat</span>
            </motion.div>
        </motion.div>
    );
};

const App = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "What are my options?",
            answer:
                "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
        },
        {
            question: "Can I switch to a different plan?",
            answer:
                "Yes, you can switch to a different plan at any time. Simply go to your account settings and select the plan that best suits your needs.",
        },
        {
            question: "Do you offer non-disclosure signature?",
            answer:
                "Absolutely. We take confidentiality seriously and offer NDAs for enterprise clients.",
        },
        {
            question: "Do you issue refunds?",
            answer:
                "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, contact our support team within 30 days.",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80')`,
                }}
            >
                {/* Color tone overlay (optional for mood) */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/20"></div>

                {/* 🔹 Black gradient from bottom to transparent top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>


            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        FAQ
                    </h1>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl"
                >
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>
            </div>


        </div>
    );
};

export default App;
