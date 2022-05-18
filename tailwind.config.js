module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bone: "#EEEEEE",
        "my-gray": "#787A91",
        "navy-blue": "#141E61",
        "darker-blue": "#0F044C",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
    container: {
      center: true,
      margin: "3rem",
    },
  },
  plugins: [],
};
