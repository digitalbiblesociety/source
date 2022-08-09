
module.exports = {
	content: ['src/app.html', 'src/**/*.{svelte,css}', 'node_modules/**/*.{svelte,css}'],
	darkMode: 'class', // Or 'media' or false
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
	],
}
