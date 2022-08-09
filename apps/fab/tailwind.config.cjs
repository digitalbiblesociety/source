const colors = require("tailwindcss/colors")

module.exports = {
	content: [
		"src/app.html",
		"src/**/*.{svelte,css}",
		"node_modules/**/*.svelte",
	],
	darkMode: "class", // or 'media' or false
	theme: {
		colors: {
			primary: colors.emerald,
			secondary: colors.green,
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
		},
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
	],
}
