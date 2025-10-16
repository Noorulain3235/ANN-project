import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      alert('Subscribed successfully!');
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <div className="min-h-auto bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-slate-700 rounded-full mb-8"
          >
            <svg
              className="w-10 h-10 text-white transform rotate-45"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Get the best blog stories
            <br />
            into your inbox!
          </motion.h1>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-96 px-6 py-4 bg-[#141926] text-white placeholder-slate-400 rounded-lg border border-slate-700 focus:outline-none focus:border-slate-500 transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#141926] text-white font-semibold rounded-lg
                 transition-all flex items-center justify-center gap-2"
              >
                <motion.svg
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 transform rotate-45"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </motion.svg>
                Subscribe
              </motion.button>
            </div>

            {/* Checkbox */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-2"
            >
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 bg-slate-800 border-slate-600 rounded cursor-pointer"
                required
              />
              <label htmlFor="privacy" className="text-slate-400 text-sm cursor-pointer">
                I agree to the{' '}
                <span className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </span>
                .
              </label>
            </motion.div>
          </motion.form>
        </motion.div>
{/* 
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
        />*/}
      </div> 
    </div>
  );
}