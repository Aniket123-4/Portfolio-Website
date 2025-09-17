// import { motion } from "framer-motion";
// import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi"; 

// export default function Contact() {
//   return (
//     <section id="contact" className="relative bg-gray-50 py-20 px-6 overflow-hidden">
//       {/* Animated background blobs */}
//       <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
//       <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>

//       <div className="container mx-auto relative z-10 text-center">
//         {/* Animated Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold mb-10 text-gray-800"
//         >
//           Contact Me
//         </motion.h2>

//         {/* Contact Subtext */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
//         >
//           Feel free to reach out for collaborations, projects, or just to say hi! 👋
//         </motion.p>

//         {/* Contact Details with Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="space-y-6 text-gray-700 text-lg flex flex-col items-center"
//         >
//           <p className="flex items-center gap-3">
//             <FiPhone className="text-blue-600 text-2xl" />
//             <a href="tel:8303298792" className="hover:underline hover:text-blue-800 transition-colors duration-300">
//               8303298792
//             </a>
//           </p>
//           <p className="flex items-center gap-3">
//             <FiMail className="text-blue-600 text-2xl" />
//             <a href="mailto:sahuaniket5jan@gmail.com" className="hover:underline hover:text-blue-800 transition-colors duration-300">
//               sahuaniket5jan@gmail.com
//             </a>
//           </p>
//           <p className="flex items-center gap-3">
//             <FiLinkedin className="text-blue-600 text-2xl" />
//             <a href="https://www.linkedin.com/in/aniket-sahu-a79a6a202" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800 transition-colors duration-300">
//               linkedin.com/in/aniket-sahu-a79a6a202
//             </a>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FiPhone, FiMail, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-all duration-500"
    >
      {/* Geometric Background Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[10%] w-40 h-40 border-4 border-blue-200 dark:border-blue-700 opacity-30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-[15%] right-[15%] w-32 h-32 border-4 border-purple-200 dark:border-purple-700 opacity-30 rotate-12 animate-spin-slower"></div>
        <div className="absolute top-[30%] right-[20%] w-24 h-24 border-4 border-teal-200 dark:border-teal-700 rounded-full opacity-25 animate-pulse-medium"></div>
        <div className="absolute bottom-[25%] left-[20%] w-20 h-20 border-4 border-amber-200 dark:border-amber-600 rounded-full opacity-25 animate-pulse-fast"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-10 text-gray-800 dark:text-white tracking-tight text-center"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed text-center"
        >
          Feel free to reach out for collaborations, projects, or just to say hi! 👋
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 max-w-md mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">Direct Contact</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                <a 
                  href="tel:8303298792" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors"
                >
                  8303298792
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FiMail className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">Email</h4>
                <a 
                  href="mailto:sahuaniket5jan@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors"
                >
                  sahuaniket5jan@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <FiLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/aniket-sahu-a79a6a202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-400 hover:underline transition-colors"
                >
                  linkedin.com/in/aniket-sahu-a79a6a202
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}