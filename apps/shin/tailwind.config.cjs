const colors = require('tailwindcss/colors')
require('dotenv').config();

module.exports = {
	content: ['src/app.html', 'src/**/*.{svelte,css}', 'node_modules/**/*.{svelte,css}','../../packages/**/*.{svelte,css}'],
	darkMode: 'class', // or 'media' or false
	theme: {
		extend: {
			colors: {
				primary: colors[process.env.VITE_COLOR_PRIMARY],
				secondary: colors[process.env.VITE_COLOR_SECONDARY],
			},
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp')
	]
};
