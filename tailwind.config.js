const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#fff",

      green: colors.emerald,
      gray: colors.warmGray,
      blue: colors.lightBlue,
      purple: colors.violet,
      red: colors.red,
      yellow: colors.yellow,
    },
  },
  variants: {
    extend: {
      width: ["group-hover"],
      opacity: ["group-hover"],
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
