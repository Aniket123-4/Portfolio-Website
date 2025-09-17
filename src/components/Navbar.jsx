// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-transform duration-700 ease-in-out ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <nav className="backdrop-blur-md bg-white/80 shadow-lg border-b border-gray-200 transition-all duration-500 ease-in-out">
//         <div className="container mx-auto flex justify-between items-center px-6 py-4">
//           {/* Logo with Hover Effect */}
//           <div className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-all duration-300 cursor-pointer transform hover:scale-110">
//             Portfolio
//           </div>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
//             {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="relative group transition-all duration-300"
//                 >
//                   <span className="group-hover:text-blue-600">{item}</span>
//                   <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Hamburger Icon */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-gray-700 focus:outline-none transition-all duration-300"
//             >
//               {menuOpen ? <X size={28} className="transform rotate-45 transition-all duration-300" /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu with Transition */}
//         <div
//           className={`md:hidden transition-all duration-500 overflow-hidden ${
//             menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <ul className="flex flex-col items-center bg-white/90 py-4 space-y-4 text-gray-700 font-semibold">
//             {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   className="block text-lg hover:text-blue-600 transition-all duration-300"
//                   onClick={() => setMenuOpen(false)} // Close menu on click
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    setIsVisible(true);
    
    // Apply theme class to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // System preference
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
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="backdrop-blur-md bg-light-muted dark:bg-dark-muted shadow-lg border-b border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo with Hover Effect */}
          <div className="text-2xl font-extrabold text-primary dark:text-dark-primary hover:text-primary-dark dark:hover:text-dark-primary-dark transition-all duration-300 cursor-pointer transform hover:scale-110">
            Portfolio
          </div>

          <div className="flex items-center space-x-6">
            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 text-light-primary dark:text-dark-primary font-semibold">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group transition-all duration-300"
                  >
                    <span className="group-hover:text-primary dark:group-hover:text-dark-primary">{item}</span>
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary dark:bg-dark-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Selector Desktop */}
            <div className="hidden md:flex items-center space-x-2 bg-white/70 dark:bg-dark-surface p-1 rounded-full border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleTheme('light')}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="Light theme"
              >
                <Sun size={18} />
              </button>
              <button
                onClick={() => toggleTheme('dark')}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="Dark theme"
              >
                <Moon size={18} />
              </button>
              <button
                onClick={() => toggleTheme('system')}
                className={`p-2 rounded-full ${theme === 'system' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="System theme"
              >
                <Monitor size={18} />
              </button>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-light-primary dark:text-dark-primary focus:outline-none transition-all duration-300"
              >
                {menuOpen ? <X size={28} className="transform rotate-45 transition-all duration-300" /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center bg-light-muted dark:bg-dark-muted py-4 space-y-4">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block w-full text-center text-lg text-light-primary dark:text-dark-primary hover:text-primary dark:hover:text-dark-primary transition-all duration-300 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            
            {/* Theme Selector Mobile */}
            <div className="flex items-center justify-center space-x-4 mt-4 p-2 bg-white/70 dark:bg-dark-surface rounded-full border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => { toggleTheme('light'); setMenuOpen(false); }}
                className={`p-2 rounded-full ${theme === 'light' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="Light theme"
              >
                <Sun size={20} />
              </button>
              <button
                onClick={() => { toggleTheme('dark'); setMenuOpen(false); }}
                className={`p-2 rounded-full ${theme === 'dark' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="Dark theme"
              >
                <Moon size={20} />
              </button>
              <button
                onClick={() => { toggleTheme('system'); setMenuOpen(false); }}
                className={`p-2 rounded-full ${theme === 'system' ? 'bg-primary/10 dark:bg-dark-primary/10 text-primary dark:text-dark-primary' : 'text-gray-600 dark:text-gray-400'}`}
                aria-label="System theme"
              >
                <Monitor size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}