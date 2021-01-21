const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        92: "23rem",
        102: "25.5rem",
        106: "26.5rem",
        110: "27.5rem",
        114: "28.5rem",
        130: "32.5rem",
        150: "37.5rem",
        180: "45rem",
      },
      height: {
        92: "23rem",
        116: "29rem",
        120: "30rem",
      },
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
