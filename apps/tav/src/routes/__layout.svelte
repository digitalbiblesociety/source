<script context="module">
import {
	t,
	locale,
	locales,
	loadTranslations,
} from "$lib/translations/index.js"

export const load = async ({ url }) => {
	const { pathname } = url
	const defaultLocale = "en" // get from cookie / user session etc...
	const initLocale = locale.get() || defaultLocale
	await loadTranslations(initLocale, pathname) // keep this just before the `return`
	return {}
}
</script>

<script>
import Footer from "$lib/components/Footer.svelte"
import Header from "$lib/components/Header.svelte"
import "../style.css"
</script>

<svelte:head>
	<meta property="og:type" content="website" />
	<meta property="og:determiner" content="The" />
	<meta property="og:site_name" content="Digital Bible Society" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:locale:alternate" content="zh_CN" />
	<meta property="og:image" content="https://dbs.org/img/logo.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="400" />
	<meta property="og:image:height" content="300" />
	<meta property="og:image:alt" content="The Digital Bible Society Logo" />
</svelte:head>

<div class="">
	<Header />

	<main class="-mt-32 text-gray-800 dark:text-gray-200">
		<div
			class="mx-auto max-w-7xl border border-t-0 border-b-0 border-gray-300 bg-white pt-2 px-2 lg:px-1 pb-8
				dark:rounded-b-none dark:border-gray-500 dark:bg-gray-700 xl:rounded-t-lg">
			<slot />
		</div>
	</main>
	<Footer />
</div>

