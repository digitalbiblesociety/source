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
	import {Header} from '@dbs/svelte-dbs-ui'
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


<Header header={{
	'title': 'Anusaran',
	'nav': nav,
}} />

<main class="-mt-32">
	<div class="max-w-7xl mx-auto xl:rounded-lg shadow px-5 py-6 sm:px-6 bg-white dark:bg-stone-800">
		<div class="lg:relative">
			<slot />
		</div>
	</div>
</main>