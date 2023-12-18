/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'Arial', 'sans-serif'],
    },
    extend: {
      
    }
  },
  colors: {
    primary: '#4a90e2', // Custom primary color
    secondary: '#f1f1f1', // Custom secondary color
    accent: '#ff4081', // Custom accent color
    // Add other custom colors here
  },
  plugins: [],
}
