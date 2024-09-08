/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*", "./src/**/*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sysytem-ui"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
