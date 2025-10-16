import { motion } from "framer-motion";

export default function ModernFooter() {
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.12 1.04A12.94 12.94 0 013 4.12s-4 9 5 13a13.15 13.15 0 01-7 2c9 5.5 20 0 20-11.5a4.48 4.48 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
    },
    {
      label: "Dribbble",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2.05 12.78A10.94 10.94 0 0112 2c2.5 0 4.78.84 6.63 2.24M9.9 3.1a16.06 16.06 0 016.2 8.9M3.1 9.9a16.06 16.06 0 018.9 6.2m1.7-5.6a16.09 16.09 0 016.2 8.9M21 12a9 9 0 01-9 9" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Contacts", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-black text-white min-h-screen flex flex-col">
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {/* Tagline */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              We develop & create digital future.
            </h2>
          </motion.div>

          {/* Address */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Address</h3>
            <address className="not-italic text-gray-400 space-y-2 mb-8">
              <p>Germany —</p>
              <p>785 15h Street, Office 478</p>
              <p>Berlin, De 81566</p>
            </address>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center hover:border-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, borderColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Say Hello</h3>
            <div className="space-y-4 text-gray-400">
              <motion.a
                href="mailto:info@email.com"
                className="block hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                info@email.com
              </motion.a>
              <motion.a
                href="tel:+18005552565"
                className="block text-2xl sm:text-3xl font-semibold text-white hover:text-gray-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                +1 800 555 25 65
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="border-t border-gray-800 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
           

            <nav className="flex gap-6 sm:gap-8">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            AxiomThemes © 2025. All Rights Reserved
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
}
