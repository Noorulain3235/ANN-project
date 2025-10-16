import React, { useState } from "react";
import { motion } from "framer-motion";

const FacebookIcon = ({ color = "#fff" }) => (
    <motion.svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
            d="M13 3h4v3h-3c-0.6 0-1 .4-1 1v3h4l-1 3h-3v9h-3v-9h-3v-3h3V7.5c0-2.5 1.5-4.5 4-4.5z"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
        />
    </motion.svg>
);

// Instagram (camera outline)
const InstagramIcon = ({ color = "#fff" }) => (
    <motion.svg width="24" height="24" viewBox="0 0 24 24">
        <motion.rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            ry="5"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
        />
        <motion.circle
            cx="12"
            cy="12"
            r="4"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
        />
        <motion.circle
            cx="17"
            cy="7"
            r="1"
            fill={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
        />
    </motion.svg>
);

// Globe (Axiom Themes)
const GlobeIcon = ({ color = "#fff" }) => (
    <motion.svg width="24" height="24" viewBox="0 0 24 24">
        <motion.circle
            cx="12"
            cy="12"
            r="9"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
        />
        <motion.path
            d="M3 12h18M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9c-2-2.5-3-5.5-3-9s1-6.5 3-9z"
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
        />
    </motion.svg>
);

// Twitter (bird shape)
const TwitterIcon = ({ color = "#fff" }) => (
    <motion.svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
            d="M22 5.8c-.8.4-1.6.6-2.4.8.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.2 4.2 0 0 0-7.1 3.8A12 12 0 0 1 3 4.6a4.1 4.1 0 0 0 1.3 5.6c-.7 0-1.4-.2-2-.5 0 2 1.4 3.8 3.3 4.2-.6.2-1.3.2-2 .1a4.2 4.2 0 0 0 3.9 2.9 8.4 8.4 0 0 1-5.2 1.8c-.3 0-.7 0-1-.1a12 12 0 0 0 6.5 1.9c7.9 0 12.2-6.5 12.2-12.2v-.6c.8-.6 1.5-1.3 2-2.1z"
            fill="none"
            stroke={color}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
        />
    </motion.svg>
);

// === Team Card Component ===
const TeamCard = ({ name, role, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const socialLinks = [
        { icon: FacebookIcon, label: "Facebook" },
        { icon: InstagramIcon, label: "Instagram" },
        { icon: GlobeIcon, label: "Axiom Themes" },
        { icon: TwitterIcon, label: "Twitter" },
    ];

    return (
        <motion.div
            className="relative overflow-hidden bg-black group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[3/4]">
                <motion.img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Social Links Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={index}
                                href="#"
                                className="text-white hover:text-green-400 transition-colors duration-300"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: isHovered ? 0 : 20,
                                    opacity: isHovered ? 1 : 0,
                                }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <Icon color="#fff" />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>

            {/* Text Content */}
            <div className="p-6 bg-black">
                <h3 className="text-white text-xl font-semibold mb-1">{name}</h3>
                <p className="text-gray-400 text-sm">{role}</p>
            </div>
        </motion.div>
    );
};

// App component
const App = () => {
    const teamMembers = [
        {
            name: "John Lewis",
            role: "Game Developer",
            image:
                "Screenshot 2025-10-15 040318.png",
        },
        {
            name: "Angie Foster",
            role: "Graphic Designer",
            image:
                "Screenshot 2025-10-15 040336.png",
        },
        {
            name: "Kate Barnes",
            role: "Web Designer",
            image:
                "Screenshot 2025-10-15 040350.png",
        },
        {
            name: "Daisy Roberts",
            role: "AI Artist",
            image:
                "Screenshot 2025-10-15 040408.png",
        },
        {
            name: "Lucy Gilmore",
            role: "Project Manager",
            image:
                "Screenshot 2025-10-15 040421.png",
        },
        {
            name: "Evan Erickson",
            role: "Web Engineer",
            image:
                "Screenshot 2025-10-15 040438.png",
        },
    ];

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
