<script>
	import {Header} from '@dbs/svelte-dbs-ui'
	import I18n from "$lib/i18n.svelte";
	import '../style.css'
	import {t} from "$lib/translations/index.js"

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