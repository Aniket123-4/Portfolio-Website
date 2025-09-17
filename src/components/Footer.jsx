// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="bg-gradient-to-r from-blue-50 via-white to-purple-50 py-6 border-t border-gray-200 text-center text-gray-600 text-sm"
//     >
//       <p className="tracking-wide">
//         © {new Date().getFullYear()}{" "}
//         <span className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
//           Aniket Sahu
//         </span>. All rights reserved.
//       </p>
//     </motion.footer>
//   );
// }


import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
        aria-label="Back to top"
      >
        <FiArrowUp className="text-xl" />
      </motion.button>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="container mx-auto px-6">
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Aniket123-4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/aniket-sahu-a79a6a202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FiTwitter className="h-6 w-6" />
            </motion.a>
            
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:sahuaniket5jan@gmail.com"
              className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p className="tracking-wide">
              © {2025}{" "}
              <span className="font-semibold text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
                Aniket Sahu
              </span>. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
}