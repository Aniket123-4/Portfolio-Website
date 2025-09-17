// import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa"; // Added Github Icon

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="container py-20 px-6 relative bg-gradient-to-r from-blue-50 via-white to-blue-50 text-center"
//     >
//       {/* Animated Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-5xl font-extrabold mb-4 text-gray-800 tracking-tight"
//       >
//         Projects
//       </motion.h2>

//       {/* GitHub Dashboard Link */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="mb-16 flex justify-center items-center gap-2"
//       >
//         <a
//           href="https://github.com/Aniket123-4"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-300"
//         >
//           <FaGithub size={24} />
//           View GitHub Dashboard
//         </a>
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
//         {/* Project 1 */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
//         >
//           {/* Gradient Background Hover Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

//           {/* Project Content */}
//           <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
//             MediAssist – Hospital Management System
//           </h3>
//           <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
//             A web-based hospital management application facilitating efficient handling of core operations such as Patients, Doctors, Appointments, Medical Records, and Prescriptions.
//           </p>
//           <p className="text-sm text-gray-500 relative z-10">
//             <strong>Technologies Used:</strong> React.js, TailwindCSS, Node.js, Express.js, MSSQL Server
//           </p>
//         </motion.div>

//         {/* Project 3 - Portfolio Website */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
//         >
//           {/* Gradient Background Hover Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 via-transparent to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

//           {/* Project Content */}
//           <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
//             Portfolio Website – Personal Webpage
//           </h3>
//           <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
//             A personal portfolio website showcasing my skills, projects, and achievements, built with React and TailwindCSS for a responsive and modern design.
//           </p>
//           <p className="text-sm text-gray-500 relative z-10">
//             <strong>Technologies Used:</strong> React, TailwindCSS, JavaScript
//           </p>
//         </motion.div>

//         {/* Project 2 */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-left"
//         >
//           {/* Gradient Background Hover Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-transparent to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

//           {/* Project Content */}
//           <h3 className="text-3xl font-semibold text-blue-600 mb-4 relative z-10">
//             Responsive Web Page Template
//           </h3>
//           <p className="text-gray-700 mb-6 text-lg leading-relaxed relative z-10">
//             Developed a fully responsive web page template using HTML, CSS, and Bootstrap, ensuring seamless adaptability across desktops, tablets, and smartphones.
//           </p>
//           <p className="text-sm text-gray-500 relative z-10">
//             <strong>Technologies Used:</strong> HTML, CSS, Bootstrap
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-all duration-500"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-300 dark:bg-purple-700 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-blue-300 dark:bg-blue-700 opacity-20 rounded-full filter blur-2xl animate-pulse-slower"></div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-center mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
      >
        Projects
      </motion.h2>

      {/* GitHub Link Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16 flex justify-center items-center gap-3 relative z-10"
      >
        <a
          href="https://github.com/Aniket123-4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-lg transition-all duration-300 px-5 py-2 rounded-full shadow-lg hover:shadow-xl"
        >
          <FaGithub size={24} />
          View GitHub Dashboard
        </a>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center relative z-10">
        {/* Project Cards */}
        {[
          {
            title: "MediAssist – Hospital Management System",
            description:
              "A web-based hospital management application facilitating efficient handling of core operations such as Patients, Doctors, Appointments, Medical Records, and Prescriptions.",
            tech: "React.js, TailwindCSS, Node.js, Express.js, MSSQL Server",
            colorFrom: "from-blue-200",
            colorTo: "to-purple-200",
          },
          {
            title: "Portfolio Website – Personal Webpage",
            description:
              "A personal portfolio website showcasing my skills, projects, and achievements, built with React and TailwindCSS for a responsive and modern design.",
            tech: "React, TailwindCSS, JavaScript",
            colorFrom: "from-teal-200",
            colorTo: "to-yellow-300",
          },
          {
            title: "Responsive Web Page Template",
            description:
              "Developed a fully responsive web page template using HTML, CSS, and Bootstrap, ensuring seamless adaptability across desktops, tablets, and smartphones.",
            tech: "Technologies Used:</strong> HTML, CSS, Bootstrap",
            colorFrom: "from-pink-200",
            colorTo: "to-yellow-200",
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl dark:shadow-md hover:shadow-3xl transition-all duration-500 overflow-hidden text-left max-w-md w-full"
          >
            {/* Card Background Animation */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${project.colorFrom} via-transparent ${project.colorTo} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
            ></div>

            {/* Project Content */}
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4 relative z-10 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed relative z-10 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
              {project.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 relative z-10 group-hover:text-gray-700 dark:group-hover:text-white transition-colors duration-300">
              <strong>Technologies Used:</strong> {project.tech}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Extra Bottom Space */}
      <div className="h-24"></div>
    </section>
  );
}
