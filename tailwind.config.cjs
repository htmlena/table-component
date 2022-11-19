/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('assets/default.png')",
        up: "url('assets/down_arrow.png')",
        down: "url('assets/up_arrow.png')",
      },
    },
  },
  plugins: [],
};
