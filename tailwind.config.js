module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors: {
      orange: "#E46740",
      blue: "#231F4A",
      purple: "#E4E2F5",
      grey: "#e8e8e8",
      black: "#121212",
      white: "#ffffff",
    },
    extend: {
      fontSize: {
        title: "70px",
        menu: "20px",
        submenu: "18px",
      },
    },
  },
  plugins: [],
};
