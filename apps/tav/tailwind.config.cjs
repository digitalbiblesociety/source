const colors = require('tailwindcss/colors')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
		extend: {
			colors: {
				primary: colors[process.env.VITE_COLOR_PRIMARY],
				secondary: colors[process.env.VITE_COLOR_SECONDARY],
			},
		}
  },
  plugins: [
	require("@tailwindcss/forms"),
	require("@tailwindcss/aspect-ratio"),
	require("@tailwindcss/typography"),
	require("@tailwindcss/line-clamp"),
  ],
};

module.exports = config;
