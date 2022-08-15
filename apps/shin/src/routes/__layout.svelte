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
	import I18n from "$lib/i18n.svelte";
	import '../style.css'

	let logo = ''

	$: nav = [
		{
			label: $t('common.resources'),
			href: `/`
		},
		{
			label: $t('common.map'),
			href: `/map`
		},
		{
			label: $t('common.films'),
			href: `/films`
		},
		{
			label: $t('common.audio_bibles'),
			href: `/bibles/audio`
		}
	];
</script>


<Header header={{
	'title': import.meta.env.VITE_SITE_TITLE,
	'nav': nav,
}}>

<div slot="i18n">
	<I18n />
</div>
</Header>

<main class="-mt-32">
	<div class="max-w-7xl mx-auto xl:rounded-lg shadow px-5 py-6 sm:px-6 bg-white dark:bg-stone-800">
		<div class="lg:relative">
			<slot />
		</div>
	</div>
</main>