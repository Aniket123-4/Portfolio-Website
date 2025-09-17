// import { motion } from "framer-motion";
// import ProfileImg from "../assets/images/profileImg.jpg";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white pt-16 px-4 overflow-hidden"
//     >
//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -80 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 text-center"
//       >
//         Hi, I'm{" "}
//         <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//           Aniket Sahu
//         </span>
//       </motion.h1>

//       {/* Animated Floating Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{
//           opacity: 1,
//           scale: 1,
//           y: [0, -10, 0], // Floating effect
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           repeatType: "mirror",
//         }}
//         className="my-6"
//       >
//         <img
//           src={ProfileImg}
//           alt="Aniket Sahu"
//           className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500"
//         />
//       </motion.div>

//       {/* Animated Subheading */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="text-lg md:text-xl text-gray-600 mb-10 text-center max-w-2xl"
//       >
//         Software Engineer | Full Stack Developer | Crafting Seamless Digital
//         Experiences
//       </motion.p>

//       {/* Animated Button */}
//       <motion.a
//         href="/resume.pdf"
//         download
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         whileHover={{
//           scale: 1.1,
//           boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
//         }}
//         className="px-8 py-3 bg-blue-600 text-white rounded-full text-base md:text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl"
//       >
//         Download Resume
//       </motion.a>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import ProfileImg from "../assets/images/profileImg.jpg";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated Premium Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Softer Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-white/50 to-indigo-100/40 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

        {/* Grid + Glow Animation */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-300 dark:text-gray-700"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* More Visible Floating Circles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? 'bg-blue-300/50 dark:bg-blue-500/40'
                : i % 2 === 0
                ? 'bg-indigo-300/50 dark:bg-indigo-500/40'
                : 'bg-purple-300/50 dark:bg-purple-500/40'
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.7 + 0.5,
              opacity: 0,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              width: `${Math.random() * 200 + 120}px`,
              height: `${Math.random() * 200 + 120}px`,
              filter: 'blur(30px)',
            }}
          />
        ))}
      </div>

      {/* Theme Switcher */}
      <motion.div 
        className="absolute top-4 right-4 flex items-center space-x-2 bg-white/70 dark:bg-gray-800/70 p-1 rounded-full border border-gray-300 dark:border-gray-700 shadow-lg backdrop-blur-sm z-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => toggleTheme('light')}
          className={`p-2 rounded-full ${theme === 'light' ? 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          aria-label="Light theme"
        >
          <Sun size={18} />
        </button>
        <button
          onClick={() => toggleTheme('dark')}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          aria-label="Dark theme"
        >
          <Moon size={18} />
        </button>
        <button
          onClick={() => toggleTheme('system')}
          className={`p-2 rounded-full ${theme === 'system' ? 'bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
          aria-label="System theme"
        >
          <Monitor size={18} />
        </button>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center mt-0 md:mt-10 lg:mt-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white text-center leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Aniket Sahu
          </span>
        </motion.h1>

        {/* Profile Image with Soft Floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="my-6"
        >
          <img
            src={ProfileImg}
            alt="Aniket Sahu"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl"
        >
          Software Engineer | Full Stack Developer | Building Seamless Digital Experiences
        </motion.p>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(59,130,246,0.7)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-full text-base md:text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
