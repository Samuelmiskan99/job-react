/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            blue: {
               50: '#eef2ff',
               100: '#e0e7ff',
               500: '#3b82f6',
               700: '#1e3a8a',
            },
            gray: {
               100: '#f3f4f6',
               200: '#e5e7eb',
               600: '#4b5563',
            },
         },
      },
   },
   plugins: [],
};
