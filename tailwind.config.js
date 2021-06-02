module.exports = {
  mode: "jit", // Just in time
  purge: ["./pages/**/*.{js.ts.jsx.tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    textOverflow: ["responsive", "group-hover"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
