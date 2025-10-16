import React, { useState } from "react";
import { motion } from "framer-motion";

// === Animated Icon Components (Framer Motion only) ===
const AnimatedPlay = () => (
    <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
    >
        <polygon points="5 3 19 12 5 21 5 3" />
    </motion.svg>
);

const AnimatedSearch = () => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </motion.svg>
);

const AnimatedCalendar = () => (
    <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
    >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </motion.svg>
);

const AnimatedUser = () => (
    <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ y: [0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
    >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
    </motion.svg>
);

const AnimatedMessage = () => (
    <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ x: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
    >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </motion.svg>
);

const AnimatedHeart = () => (
    <motion.svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
    >
        <path d="M20.8 4.6c-1.5-1.4-3.9-1.4-5.4 0l-.4.4-.4-.4a3.8 3.8 0 0 0-5.4 0c-1.5 1.4-1.5 3.7 0 5.1L12 21l7.4-11.3c1.5-1.4 1.5-3.7.4-5.1z" />
    </motion.svg>
);

// === Blog Post ===
const BlogPost = ({
    image,
    videoEmbed,
    audioSrc,
    title,
    date,
    author,
    comments,
    likes,
    excerpt,
    hasVideo,
    hasAudio,
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <div className="relative group overflow-hidden rounded-lg mb-6">
                {/* ✅ Video Embed (Vimeo, YouTube, etc.) */}
                {hasVideo && videoEmbed ? (
                    <div className="aspect-video w-full">
                        <iframe
                            src={videoEmbed}
                            title={title}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                ) : (
                    /* ✅ Default Image */
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}

                {/* ✅ Play Overlay (if video but no embed link) */}
                {hasVideo && !videoEmbed && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black 
                    bg-opacity-40">
                        <button className="bg-white rounded-full p-4 hover:bg-gray-100 
                        transition-colors">
                            <AnimatedPlay />
                        </button>
                    </div>
                )}
            </div>

            {/* === Text Section === */}
            <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-green-500 transition-colors cursor-pointer">
                    {title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <AnimatedCalendar />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AnimatedUser />
                        <span>By {author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AnimatedMessage />
                        <span>{comments} Comments</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AnimatedHeart />
                        <span>{likes} Likes</span>
                    </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-400 leading-relaxed">{excerpt}</p>

                {/* ✅ Audio Player Section */}
                {hasAudio && (
                    <div className="bg-black rounded-lg p-4">
                        <audio
                            controls
                            className="w-full"
                            preload="none"
                            style={{ outline: "none" }}
                        >
                            <source src={audioSrc || "audio.mp3"} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                )}

                {/* Read More */}
                <button className="text-green-500 hover:text-green-400 font-medium transition-colors">
                    Read More →
                </button>
            </div>
        </motion.article>
    );
};



// === Sidebar ===
const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["Graphic", "Magento", "Showit", "Typography", "Web", "Wordpress"];

    const recentPosts = [
        {
            title: "What can we do to make websites",
            image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=100&h=100&fit=crop",
            date: "June 1, 2023",
        },
        {
            title: "What can we do to make websites",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&h=100&fit=crop",
            date: "June 1, 2023",
        },
    ];

    return (
        <aside className="lg:sticky lg:top-8 space-y-8">
            {/* Search */}
            <div className="bg-black border border-gray-800 p-6">
                <h3 className="text-white text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="w-full bg-black text-white px-4 py-3 border border-gray-800 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors">
                        <AnimatedSearch />
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-black border border-gray-800 p-6">
                <h3 className="text-white text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-green-500 transition-colors flex items-center justify-between group"
                            >
                                <span>{category}</span>
                                <span className="text-gray-600 group-hover:text-green-500">→</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-black border border-gray-800  p-6">
                <h3 className="text-white text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                        <div key={index} className="flex gap-3 group cursor-pointer">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-20 h-20 object-cover rounded flex-shrink-0"
                            />
                            <div>
                                <h4 className="text-white text-sm font-medium group-hover:text-green-500 transition-colors mb-1">
                                    {post.title}
                                </h4>
                                <p className="text-gray-500 text-xs">{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tags */}
            <div className="bg-black border-gray-800 border  p-6">
                <h3 className="text-white text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {["Business", "Design", "Development", "Marketing", "Technology"].map((tag, index) => (
                        <a
                            key={index}
                            href="#"
                            className="bg-gray-800 text-gray-400 px-3 py-1 rounded text-sm hover:bg-green-500 hover:text-white transition-colors"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

// === Main App ===
const App = () => {
    const blogPosts = [
        {
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
            title: "What can we do to make websites",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },
        {
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
            title: "There really can be no peace for us digital creations",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },
        {
            image: "Screenshot 2025-10-15 112814.png",
            title: "Must-haves in your portfolio: buy online",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Qroin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt.…",
            hasVideo: false,
            hasAudio: false,
        },
        {
            videoEmbed: "https://player.vimeo.com/video/282496707?h=9dacac48cf",
            title: "My Vimeo Post",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt: "This post includes a Vimeo embedded video.",
            hasVideo: true,
            hasAudio: false
        },
        {
            image: "Screenshot 2025-10-15 112940.png",
            title: "Top successful AI chatbots based on peoples feedback",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },
        {
            image: "Screenshot 2025-10-15 113000.png",
            title: "Top successful AI chatbots based on peoples feedback",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },
        {
            image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80",
            title: "Podcast Episode: Design Talk",
            date: "June 1, 2023",
            author: "Admin",
            comments: 1,
            likes: 12,
            excerpt: "Listen to our latest design discussion episode.",
            hasVideo: false,
            hasAudio: true,
            audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
         {
            image: "Screenshot 2025-10-15 113021.png",
            title: "Top successful AI chatbots based on peoples feedback",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },
         {
            image: "Screenshot 2025-10-15 113040.png",
            title: "Top successful AI chatbots based on peoples feedback",
            date: "June 1, 2023",
            author: "Admin",
            comments: 0,
            likes: 0,
            excerpt:
                "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
            hasVideo: false,
            hasAudio: false,
        },

    ];

    return (
        <div className="min-h-screen bg-black py-36">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl">Blog Standard</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">
                        {blogPosts.map((post, i) => (
                            <BlogPost key={i} {...post} />
                        ))}
                    </div>

                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default App;
