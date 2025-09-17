// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          light: '#2563eb', // blue-600
          DEFAULT: '#2563eb',
          dark: '#1d4ed8', // blue-700
        },
        secondary: {
          light: '#7c3aed', // violet-600
          DEFAULT: '#7c3aed',
          dark: '#6d28d9', // violet-700
        },
        // Dark theme colors
        dark: {
          primary: {
            light: '#60a5fa', // blue-400
            DEFAULT: '#60a5fa',
            dark: '#3b82f6', // blue-500
          },
          secondary: {
            light: '#a78bfa', // violet-400
            DEFAULT: '#a78bfa',
            dark: '#8b5cf6', // violet-500
          },
          background: '#111827', // gray-900
          surface: '#1f2937', // gray-800
          text: {
            primary: '#f3f4f6', // gray-100
            secondary: '#d1d5db', // gray-300
          },
        },
      },
      backgroundColor: {
        light: {
          DEFAULT: '#ffffff',
          muted: 'rgba(255, 255, 255, 0.8)',
        },
        dark: {
          DEFAULT: '#111827', // gray-900
          muted: 'rgba(17, 24, 39, 0.8)',
        },
      },
      textColor: {
        light: {
          primary: '#1f2937', // gray-800
          secondary: '#4b5563', // gray-600
        },
        dark: {
          primary: '#f3f4f6', // gray-100
          secondary: '#d1d5db', // gray-300
        },
      },
    },
  },
  plugins: [],
}