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
	import Header from '../components/Header.svelte'
	import '../style.css'

	let logo = ''

	$: nav = [
		{
			label: $t('common.resources'),
			href: `/`
		},
		{
			label: $t('common.films'),
			href: `/films`
		},
		{
			label: $t('common.audio_bibles'),
			href: `/bibles/audio`
		},
		{
			label: $t('common.about'),
			href: `/about`
		}
	];
</script>

<Header {nav} {logo} />

<main class="dark:bg-stone-800 mx-auto max-w-7xl">
	<slot />
</main>
