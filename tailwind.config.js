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
        bgGray: "#1016180F",
        bgBody: "#F6F6F6",
        bgButton: "#101618",
        textPrimary: "#1E1E1E",
        textSecondary: "#101618",
        iconColor: "#141B34",
        iconHoverColor: "#036AA2",
        tableBorder: "#1016181F",
        secondary: {
          500: "#10b981",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
