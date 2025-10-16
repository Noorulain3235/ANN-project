// AnimatedWord.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedWord({ words, interval = 2500, className = "" }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const wordVariant = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const letterVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        variants={wordVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`inline-block ${className}`}
      >
        {words[index].split("").map((letter, i) => (
          <motion.span key={i} variants={letterVariant}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
