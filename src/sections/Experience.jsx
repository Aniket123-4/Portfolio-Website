// import { motion } from "framer-motion"; // Make sure framer-motion is installed

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6"
//     >
//       <div className="container mx-auto">
//         {/* Animated Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold text-center mb-16 text-gray-800"
//         >
//           Experience
//         </motion.h2>

//         {/* Experience Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-white shadow-lg rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto transform hover:scale-105"
//         >
//           <h3 className="text-3xl font-bold text-blue-600 mb-4 hover:text-blue-700 transition-all duration-300">
//             Software Developer
//           </h3>
//           <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//             Multifacet Softwares Systems Pvt. Ltd. - Kanpur, India
//             <br />
//             <span className="text-base text-gray-500">
//               November 2024 - Present
//             </span>
//           </p>

//           <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
//             <li>
//               Designed intuitive and responsive user interfaces using React,
//               Vite, Material UI, and TailwindCSS.
//             </li>
//             <li>
//               Integrated APIs to ensure dynamic and efficient data flow across
//               components.
//             </li>
//             <li>
//               Managed frontend-to-backend communication using Node.js and MSSQL
//               Server.
//             </li>
//             <li>
//               Collaborated with cross-functional teams to deliver scalable and
//               maintainable web solutions.
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500"
    >
      {/* Background Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>

        {/* Experience Card with new animated hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.03,
            y: -10,
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(99, 102, 241, 0.7)", // Tailwind indigo-500 transparent border glow
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-10 md:p-12 border-2 border-transparent hover:border-indigo-400 dark:hover:border-indigo-500 shadow-lg dark:shadow-md max-w-4xl mx-auto backdrop-blur-md cursor-pointer transition-all duration-500"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
            Software Developer
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Multifacet Softwares Systems Pvt. Ltd. - Kanpur, India
            <br />
            <span className="text-lg text-gray-500 dark:text-gray-400">
              November 2024 - Present
            </span>
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
            <li>
              Designed intuitive and responsive user interfaces using React,
              Vite, Material UI, and TailwindCSS.
            </li>
            <li>
              Integrated APIs to ensure dynamic and efficient data flow across
              components.
            </li>
            <li>
              Managed frontend-to-backend communication using Node.js and MSSQL
              Server.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable and
              maintainable web solutions.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
