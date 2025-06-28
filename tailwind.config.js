/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#036AA2",
        primaryForeground: "#1E1E24",
        secondary: {
          500: "#10b981",
        },
      },
    },
  },
  plugins: [],
};