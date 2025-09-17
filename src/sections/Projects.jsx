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
            title: "Attendance Management System",
            description:
              "A web-based attendance tracking system that enables organizations to manage employee or student attendance records efficiently, with real-time reporting and analytics.",
            tech: "React.js (Vite + TypeScript), Node.js, Express.js, MSSQL Server",
            colorFrom: "from-green-200",
            colorTo: "to-blue-200",
          },
          {
            title: "Complaint Management System",
            description:
              "An online complaint management platform that streamlines grievance reporting, tracking, and resolution for organizations and institutions.",
            tech: "React.js (Vite + TypeScript), Node.js, Express.js, MSSQL Server",
            colorFrom: "from-purple-200",
            colorTo: "to-pink-200",
          },
          {
            title: "E-Property Tax System",
            description:
              "A digital property tax management system designed to help citizens calculate, pay, and track their property taxes securely and conveniently online.",
            tech: "React.js (Vite + TypeScript), Node.js, Express.js, MSSQL Server",
            colorFrom: "from-yellow-200",
            colorTo: "to-orange-200",
          },
          {
            title: "Document Management System",
            description:
              "A secure and efficient document management application that enables organizations to store, retrieve, and share files seamlessly with role-based access control.",
            tech: "React.js (Vite + TypeScript), .NET API, MSSQL Server",
            colorFrom: "from-blue-200",
            colorTo: "to-green-200",
          },
          {
            title: "Vehicle Tracking System",
            description:
              "A real-time vehicle tracking platform that provides live location monitoring, trip history, and analytics for effective fleet management.",
            tech: "React.js (Vite + TypeScript), .NET API, MSSQL Server",
            colorFrom: "from-red-200",
            colorTo: "to-indigo-200",
          },

          {
            title: "MediAssist – Hospital Management System",
            description:
              "A web-based hospital management application facilitating efficient handling of core operations such as Patients, Doctors, Appointments, Medical Records, and Prescriptions.",
            tech: "React.js, TailwindCSS, Node.js, Express.js, MSSQL Server",
            colorFrom: "from-blue-200",
            colorTo: "to-purple-200",
          },
          {
            title: "Vehicle Workshop Management System",
            description:
              "A comprehensive system designed to manage vehicle service bookings, spare parts inventory, billing, and customer records, ensuring smooth workshop operations.",
            tech: "React.js (Vite + TypeScript), .NET API, MSSQL Server",
            colorFrom: "from-cyan-200",
            colorTo: "to-blue-300",
          },
          {
            title: "Asset Management System",
            description:
              "A robust application for tracking and managing organizational assets, including allocation, maintenance, depreciation, and reporting.",
            tech: "React.js (Vite + TypeScript), .NET API, MSSQL Server",
            colorFrom: "from-orange-200",
            colorTo: "to-teal-200",
          },
          {
            title: "Pole Tracking System",
            description:
              "A smart pole tracking application that helps municipalities and organizations monitor, maintain, and manage electric poles, ensuring timely repairs and safety compliance.",
            tech: "React.js (Vite + TypeScript, MUI), .NET API, MSSQL Server",
            colorFrom: "from-sky-200",
            colorTo: "to-indigo-300",
          },
          {
            title: "Digital Library System",
            description:
              "An online library management system that allows users to access, borrow, and manage digital books and resources, with features for categorization, search, and user management.",
            tech: "React.js (Vite + TypeScript, MUI), .NET API, MSSQL Server",
            colorFrom: "from-violet-200",
            colorTo: "to-pink-300",
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
            tech: "Technologies Used: HTML, CSS, Bootstrap",
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
