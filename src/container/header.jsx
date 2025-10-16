import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'Home', path: '/', arrow: false },
    {
      name: 'Pages',
      arrow: true,
      subItems: [
        { name: 'About', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Our Team', path: '/ourteam' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
    {
      name: 'Blog',
      arrow: true,
      subItems: [
        { name: 'Standard', path: '/Blog-standard' },
        { name: 'Portfolio', path: '/Blog-standard' },
      ],
    },
    { name: 'Shop', path: '/shop', arrow: false },
    { name: 'Contacts', path: '/contact', arrow: false },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a] border-b border-gray-800">
        <div className="mx-auto py-4 px-6 md:px-9 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="logo-inverse-color-retina.png" alt="" className="h-7" />
          </Link>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Cart Icon */}
            <button
              className="relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>

            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 w-8"
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                className="block w-full h-0.5 bg-white"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                className="block w-full h-0.5 bg-white"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                className="block w-full h-0.5 bg-white"
              />
            </button>
          </div>
        </div>
      </header>

      {/*  SEARCH BAR OVERLAY */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-40 bg-[#0f1420] border-b border-gray-700
             p-20"
          >
            <div className="relative max-w-5xl mx-auto flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg md:text-xl focus:outline-none placeholder-gray-400 pb-2"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-0 text-gray-400 hover:text-white text-sm md:text-base"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*  CART POPUP */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-96 h-full bg-[#0f1420] border-l border-gray-800 z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
              <h2 className="text-white text-xl font-light">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <svg
                className="w-16 h-16 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p>Your cart is currently empty.</p>
            </div>

            <button
              className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-semibold transition"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#0f1420] z-40 overflow-y-auto"
          >
            <div className="container mx-auto px-4 sm:px-6 py-20 md:py-24 min-h-screen flex flex-col md:flex-row">
              {/* Left - Menu Items */}
              <div className="flex-1 flex flex-col justify-center">
                <nav className="space-y-3 sm:space-y-4 text-center md:text-left">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {/* Parent link */}
                      <div className="relative">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          className="group flex justify-center md:justify-start items-center gap-3 sm:gap-4 text-gray-400 hover:text-white transition-colors text-3xl sm:text-4xl md:text-5xl font-light"
                        >
                          <Link to={item.path || '#'}>{item.name}</Link>
                          {item.arrow && (
                            <svg
                              className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12
                                 transition-transform ${activeDropdown === item.name
                                  ? ' text-emerald-500'
                                  : 'text-gray-400'
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          )}
                        </button>

                        {/* Dropdown submenu */}
                        {item.subItems && activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-3 space-y-2 md:pl-8"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block text-lg sm:text-2xl text-gray-400 hover:text-emerald-400 transition"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </nav>
              </div>


              {/* Right - Contact Info */}
              <div className="flex-1 flex flex-col justify-center items-center md:items-end mt-12 md:mt-0 md:pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8 sm:space-y-10 md:space-y-12 text-center md:text-right"
                >
                  {/* Project Inquiry */}
                  <div>
                    <p className="text-gray-400 text-lg sm:text-xl mb-2">Have a Project?</p>
                    <a href="mailto:info@website.com" className="text-white text-2xl sm:text-3xl font-light border-b border-white pb-1 inline-block">
                      info@website.com
                    </a>
                  </div>

                  {/* Work With Me */}
                  <div>
                    <p className="text-gray-400 text-lg sm:text-xl mb-2">Want to Work with Me?</p>
                    <a href="#" className="group inline-flex items-center gap-2 sm:gap-3 text-white text-2xl sm:text-3xl font-light">
                      <span>Send Brief</span>
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Buy Illustrations */}
                  <div>
                    <p className="text-gray-400 text-lg sm:text-xl mb-2">Want to Buy Illustrations?</p>
                    <a href="#" className="group inline-flex items-center gap-2 sm:gap-3 text-white text-2xl sm:text-3xl font-light">
                      <span>Go to Shop</span>
                      <svg className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 sm:gap-6 mt-12 sm:mt-16 flex-wrap justify-center md:justify-end"
                >
                  {[
                    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12...",
                    "M23.953 4.57a10 10 0 01-2.825.775...",
                    "M12 0C5.373 0 0 5.373 0 12s5.373 12...",
                    "M12 2.163c3.204 0 3.584.012 4.85.07...",
                  ].map((path, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-4 sm:top-8 sm:right-6 text-gray-400 hover:text-white text-base sm:text-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
