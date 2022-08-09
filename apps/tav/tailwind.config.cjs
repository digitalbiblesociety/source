const colors = require("tailwindcss/colors")

module.exports = {
	content: [
		"src/app.html",
		"src/**/*.{svelte,css}",
		"node_modules/**/*.{svelte,css}",
	],
	darkMode: "class", // or 'media' or false
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: {
				100: "#c5e5f8",
				200: "#cbddee",
				300: "#aaccdd",
				400: "#4488bb",
				500: "#2266bb",
				600: "#0044bb",
				700: "#053083",
				800: "#03215a",
				900: "#021231",
			},
			lightgreen: {
				100: "#dcedc8",
				200: "#c5e1a5",
				300: "#aed581",
				400: "#9ccc65",
				500: "#8bc34a",
				600: "#7cb342",
				700: "#689f38",
				800: "#558b2f",
				900: "#33691e",
			},
			tahiti: {
				100: "#cffafe",
				200: "#a5f3fc",
				300: "#67e8f9",
				400: "#22d3ee",
				500: "#06b6d4",
				600: "#0891b2",
				700: "#0e7490",
				800: "#155e75",
				900: "#164e63",
			},
			secondary: colors.slate,
			black: colors.black,
			white: colors.white,
			slate: colors.slate,
			gray: colors.gray,
			neutral: colors.neutral,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			pink: colors.pink,
			rose: colors.rose,
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
	],
}