const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "37.5rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      darkGray: "#121212",
      white: "#fff",

      green: colors.emerald,
      gray: colors.warmGray,
      blue: colors.lightBlue,
      purple: colors.purple,
      red: colors.red,
      yellow: colors.yellow,
    },
  },
  variants: {
    extend: {
      width: ["group-hover"],
      opacity: ["group-hover"],
      textColor: ["group-hover"],
      visibility: ["hover"],
    },
  },
  plugins: [],
};
