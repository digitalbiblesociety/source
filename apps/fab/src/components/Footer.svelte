<script>
import { t, locale } from "$lib/i18n"
</script>

<footer
	class="mx-auto max-w-7xl bg-white py-8 dark:bg-gray-900"
	aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<a
		rel="license noopener noreferrer"
		href="http://creativecommons.org/licenses/by/4.0/"
		target="_blank"
		class="flex items-center justify-center p-2 text-sm text-gray-400">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 65 65"
			class="mr-3 h-5 w-5">
			<path
				d="M32.4.5a31.2 31.2 0 0 1 29.8 19.7 32.6 32.6 0 0 1 0 24.6 32.9 32.9 0 0 1-29.7 19.7A31.1 31.1 0 0 1 9.8 55 31.9 31.9 0 0 1 32.4.5Zm.2 5.8A25 25 0 0 0 14 13.9a27.5 27.5 0 0 0-5.8 8.6 25.2 25.2 0 0 0-2 10 26.5 26.5 0 0 0 16.3 24.1 25.7 25.7 0 0 0 10 2 27.6 27.6 0 0 0 18.7-7.8c5-4.8 7.4-11 7.4-18.3A26.3 26.3 0 0 0 51.1 14a25.3 25.3 0 0 0-18.5-7.7Zm-.4 20.9-4.3 2.2c-.5-1-1-1.6-1.7-2-.7-.4-1.3-.6-1.9-.6-2.8 0-4.3 2-4.3 5.7 0 1.7.4 3 1.1 4.1.7 1 1.8 1.6 3.2 1.6 1.9 0 3.2-1 4-2.8l4 2a9.4 9.4 0 0 1-8.5 5c-2.8 0-5.2-.8-6.9-2.6a9.9 9.9 0 0 1-2.6-7.3c0-3 .9-5.5 2.6-7.3a9 9 0 0 1 6.7-2.6c4 0 6.8 1.5 8.6 4.6Zm18.4 0-4.2 2.2c-.5-1-1-1.6-1.7-2-.7-.4-1.3-.6-2-.6-2.8 0-4.2 2-4.2 5.7 0 1.7.4 3 1 4.1a4 4 0 0 0 3.3 1.6c1.8 0 3.2-1 4-2.8l4 2c-1 1.6-2.1 2.8-3.6 3.7a9.2 9.2 0 0 1-4.9 1.3c-2.9 0-5.2-.8-7-2.6a10 10 0 0 1-2.5-7.3c0-3 .9-5.5 2.6-7.3a9 9 0 0 1 6.8-2.6c4 0 6.7 1.5 8.4 4.6Z"
				fill="currentColor">
			</path>
		</svg>

		{new Date().getFullYear()}
		{$t("Digital Bible Society")}
	</a>
</footer>
