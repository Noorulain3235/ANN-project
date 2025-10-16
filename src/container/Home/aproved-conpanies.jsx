import { motion } from 'framer-motion';

const logos = [
  {
    name: 'AGL',
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" className="w-full h-full">
        <path d="M25 10 L15 30 L20 30 L22 25 L35 25 L37 30 L42 30 L32 10 Z M28.5 15 L32 22 L25 22 Z" />
        <path d="M95 15 L80 15 L80 20 L90 20 L90 25 L80 25 L80 35 L95 35 L95 30 L85 30 L85 20" />
        <circle cx="10" cy="20" r="8" />
        <circle cx="10" cy="20" r="4" fill="#1a1a1a"/>
        <path d="M48 15 L48 27 C48 32 52 35 57 35 C62 35 66 32 66 27 L66 15 L61 15 L61 27 C61 29 59 30 57 30 C55 30 53 29 53 27 L53 15 Z" />
        <path d="M70 15 L70 35 L85 35 L85 30 L75 30 L75 15 Z" />
      </svg>
    )
  },
  {
    name: 'Citi',
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" className="w-full h-full">
        <path d="M20 12 C12 12 8 17 8 25 C8 33 12 38 20 38 C25 38 28 36 30 33 L26 30 C24 32 22 33 20 33 C15 33 13 30 13 25 C13 20 15 17 20 17 C22 17 24 18 26 20 L30 17 C28 14 25 12 20 12 Z" />
        <rect x="35" y="12" width="5" height="26" />
        <path d="M50 17 L58 17 L58 38 L63 38 L63 17 L71 17 L71 12 L50 12 Z" />
        <rect x="76" y="12" width="5" height="26" />
        <ellipse cx="60" cy="8" rx="25" ry="4" opacity="0.3" />
      </svg>
    )
  },
  {
    name: 'Energy',
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
        <path d="M15 10 L25 20 L15 30 L20 30 L30 20 L20 10 Z" />
        <path d="M35 15 L35 30 L50 30 L50 26 L40 26 L40 24 L48 24 L48 20 L40 20 L40 19 L50 19 L50 15 Z" />
        <path d="M55 15 L55 30 L60 30 L60 24 L65 30 L70 30 L70 15 L65 15 L65 21 L60 15 Z" />
        <path d="M75 15 L75 30 L90 30 L90 26 L80 26 L80 24 L88 24 L88 20 L80 20 L80 19 L90 19 L90 15 Z" />
        <path d="M95 15 L95 30 L105 30 C108 30 110 28 110 25 L110 20 C110 17 108 15 105 15 Z M100 19 L105 19 C106 19 106 20 106 20 L106 25 C106 26 106 26 105 26 L100 26 Z" />
      </svg>
    )
  },
  {
    name: 'GitHub',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
        <path d="M50 10 C27 10 8 29 8 52 C8 70 19 85 35 90 C37 91 38 89 38 88 L38 82 C27 84 25 76 25 76 C23 71 21 70 21 70 C17 67 21 67 21 67 C25 67 27 71 27 71 C31 77 37 75 38 74 C39 72 40 70 41 69 C31 68 21 64 21 49 C21 44 23 40 27 37 C26 36 25 32 27 27 C27 27 31 26 38 31 C41 30 45 30 50 30 C55 30 59 30 62 31 C69 26 73 27 73 27 C75 32 74 36 73 37 C77 40 79 44 79 49 C79 64 69 68 59 69 C61 71 62 74 62 78 L62 88 C62 89 63 91 65 90 C81 85 92 70 92 52 C92 29 73 10 50 10 Z" />
      </svg>
    )
  },
  {
    name: 'Theater',
    svg: (
      <svg viewBox="0 0 140 50" fill="currentColor" className="w-full h-full">
        <path d="M10 12 L10 17 L15 17 L15 35 L20 35 L20 17 L25 17 L25 12 Z" />
        <path d="M30 12 L30 35 L35 35 L35 26 L42 26 L42 35 L47 35 L47 12 L42 12 L42 22 L35 22 L35 12 Z" />
        <path d="M52 12 L52 35 L67 35 L67 31 L57 31 L57 25 L65 25 L65 21 L57 21 L57 16 L67 16 L67 12 Z" />
        <path d="M75 12 L70 35 L75 35 L76 30 L83 30 L84 35 L89 35 L84 12 Z M77 26 L79.5 16 L82 26 Z" />
        <path d="M92 12 L92 35 L97 35 L97 17 L103 17 L103 35 L108 35 L108 12 Z" />
        <text x="8" y="45" fontSize="8" fontFamily="serif" fontStyle="italic">Kunstlerhaus</text>
      </svg>
    )
  },
  {
    name: 'Delo',
    svg: (
      <svg viewBox="0 0 120 50" fill="currentColor" className="w-full h-full">
        <path d="M15 15 L15 35 L25 35 C32 35 37 30 37 25 C37 20 32 15 25 15 Z M20 20 L25 20 C29 20 32 22 32 25 C32 28 29 30 25 30 L20 30 Z" />
        <path d="M42 15 L42 35 L57 35 L57 30 L47 30 L47 27 L55 27 L55 23 L47 23 L47 20 L57 20 L57 15 Z" />
        <path d="M62 15 L62 35 L77 35 L77 30 L67 30 L67 15 Z" />
        <path d="M82 15 C75 15 70 20 70 25 C70 30 75 35 82 35 C89 35 94 30 94 25 C94 20 89 15 82 15 Z M82 20 C86 20 89 22 89 25 C89 28 86 30 82 30 C78 30 75 28 75 25 C75 22 78 20 82 20 Z" />
        <circle cx="15" cy="25" r="8" opacity="0.2" />
        <circle cx="82" cy="25" r="8" opacity="0.2" />
      </svg>
    )
  }
];

export default function LogoShowcase() {
  return (
    <div className="min-h-fit bg-black flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <motion.div
                className="w-full max-w-[160px] h-20 sm:h-24 flex items-center justify-center text-gray-500 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center p-2"
                  initial={{ color: '#6b7280' }}
                  whileHover={{ color: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  {logo.svg}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}