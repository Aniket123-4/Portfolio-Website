


import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : {}}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute rounded-full bg-blue-400 dark:bg-indigo-400"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Background Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full filter blur-3xl animate-blob-1"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-blob-2"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
        >
          About Me
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education and Skills Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-indigo-100/30 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <motion.span whileHover={{ rotate: 20, scale: 1.1 }} className="inline-block mr-3">🎓</motion.span>
                Education & Skills
              </h3>

              <div className="space-y-10">
                {/* College */}
                <motion.div whileHover={{ x: 5 }} className="pl-6 border-l-2 border-blue-400 dark:border-blue-600">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Maharana Pratap Engineering College kanpur
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    M.C.A (2022-2024)
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    CGPA: 8.66
                  </p>
                </motion.div>

                {/* School */}
                <motion.div whileHover={{ x: 5 }} className="pl-6 border-l-2 border-blue-400 dark:border-blue-600">
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    N.L.K.V.M. Inter College Kanpur
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-1">
                    Intermediate (PCM) (2017-2019)
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Percentage: 87.5%
                  </p>
                </motion.div>

                {/* Skills */}
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    <motion.span whileHover={{ rotate: 20, scale: 1.1 }} className="inline-block mr-2">🚀</motion.span>
                    Technical Skills
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      "Java", "JavaScript", "HTML5",
                      "CSS3", "React", "Node.js",
                      "Express.js", "MSSQL", "MongoDB",
                      "Git", "TailwindCSS", "Bootstrap 5"
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.03 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                        className="flex items-center space-x-2 p-2 rounded-lg transition-all"
                      >
                        <motion.div whileHover={{ scale: 1.3 }} className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></motion.div>
                        <span className="text-gray-900 dark:text-gray-100 text-base font-semibold">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
                <motion.span whileHover={{ rotate: 20, scale: 1.1 }} className="inline-block mr-3">🧑‍💻</motion.span>
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Name", value: "Aniket Sahu", icon: "🧑" },
                  { label: "Date of Birth", value: "05/01/2003", icon: "🎂" },
                  { label: "Father's Name", value: "Mr. Om Prakash Sahu", icon: "👨‍👦" },
                  { label: "Gender", value: "Male", icon: "🚹" },
                  { label: "Marital Status", value: "Unmarried", icon: "💍" },
                  { label: "Languages", value: "English, Hindi", icon: "🗣️" },
                  { label: "Nationality", value: "Indian", icon: "🇮🇳" },
                  { label: "Location", value: "Kanpur, India", icon: "📍" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.04 }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      backgroundColor: "rgba(236, 72, 153, 0.1)"
                    }}
                    className="flex items-start space-x-3 p-4 bg-gray-100/60 dark:bg-gray-700/60 rounded-lg backdrop-blur-sm cursor-default"
                  >
                    <motion.span whileHover={{ rotate: 20, scale: 1.3 }} className="text-2xl text-gray-900 dark:text-gray-100">
                      {item.icon}
                    </motion.span>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</h5>
                      <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
