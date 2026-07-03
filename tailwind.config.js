/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#E9E6DD",
        panel: "#DED9CB",
        panelDark: "#CFC9B8",
        ink: "#1B2420",
        inkSoft: "#4A544C",
        signal: "#2F6E62",
        signalDark: "#20504A",
        brass: "#A8783A",
        brassLight: "#C79A5C",
        hairline: "#B9B2A0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
