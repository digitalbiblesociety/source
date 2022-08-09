const colors = require('tailwindcss/colors')

module.exports = {
	content: ['src/app.html', 'src/**/*.{svelte,css}', 'node_modules/**/*.{svelte,css}'],
	darkMode: 'class', // or 'media' or falsee
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp')
	]
};
