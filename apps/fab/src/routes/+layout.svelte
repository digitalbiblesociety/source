<script>
	import '../style.css';

	import {Header} from '@dbs/svelte-dbs-ui'
	import I18n from "$lib/i18n.svelte";
	import { t } from "$lib/translations/index.js"

	const header = {
		title: "Find a Bible",
		nav: [
			{label:$t('common.bibles'),href:'/bibles'},
			{label:$t('common.languages'),href:'/languages'},
			{label:$t('common.countries'),href:'/countries'},
		]
	}
	console.log($t('common.bibles'))
</script>

<Header {header}>
	<div slot="i18n">
		<I18n />
	</div>
</Header>

<main class="-mt-32">
	<div class="max-w-7xl mx-auto xl:rounded-lg shadow lg:relative">
		<slot />
	</div>
</main>