/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
  safelist: [
    "bg-slate-300",
    "text-slate-900",
    "bg-sky-300",
    "text-sky-900",
    "bg-blue-300",
    "text-blue-900",
    "bg-green-300",
    "text-green-900",
  ],
};
