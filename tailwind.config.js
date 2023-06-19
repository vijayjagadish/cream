module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_7f: "#ffffff7f",
          A700_b2: "#ffffffb2",
          A700_00: "#ffffff00",
          A700_01: "#fffffe",
          A700: "#ffffff",
        },
        blue_gray: {
          50: "#f1f1f1",
          100: "#d9d9d9",
          200: "#abbed1",
          400: "#88939e",
          800: "#2b455d",
          900: "#2f2f2f",
          "100_01": "#cbdcee",
          "100_02": "#cbddee",
          "900_4c": "#193a4b4c",
          "200_66": "#abbed166",
          "100_7f": "#d9d9d97f",
          "100_4c": "#d9d9d94c",
          "400_01": "#888888",
        },
        red: { 400: "#eb5757" },
        light_blue: { 900: "#006699" },
        gray: {
          50: "#f8f8f8",
          100: "#f5f7f9",
          300: "#d5e4ec",
          400: "#bdbdbd",
          600: "#828282",
          800: "#4d4d4d",
          900: "#212121",
          "900_02": "#171e24",
          "900_03": "#211f1f",
          "600_01": "#707070",
          "900_01": "#252525",
          "300_01": "#e2e2e2",
          "100_01": "#f4f2f2",
        },
        black: { 900: "#000000", "900_01": "#090909" },
        yellow: { 900: "#e17f0d" },
        indigo: { 50: "#e5edf6" },
        orange: { 400: "#ffa826", 700: "#e17d08", "700_01": "#e48800" },
        teal: { 50: "#e3e9ec" },
      },
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
        opensans: "Open Sans",
        montserrat: "Montserrat",
        helveticaneue: "Helvetica Neue",
        sfprotext: "SF Pro Text",
        gothica: "Gothic A1",
      },
      boxShadow: {
        bs: "0px 4px  8px 0px #abbed166",
        bs1: "0px 8px  16px 0px #abbed166",
        bs2: "0px 141px  200px -80px #193a4b4c",
      },
      backgroundImage: {
        gradient: "radial-gradient(#ffffffb2,#ffffff00)",
        gradient1: "linear-gradient(180deg ,#f4f2f2,#ffffff,#ffffff7f,#f4f2f2)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};