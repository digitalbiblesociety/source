<script>
	import { t } from "$lib/translations/index.js"
	import { BibleList } from "@dbs/svelte-bible-wiki"
	
	export let data
</script>
	
<svelte:head>
		<title>Bibles | {$t("Digital Bible Society")}</title>
</svelte:head>
	
	<BibleList
		bibles="{data.bibles}"
		translations="{{
			title: $t('common.bibles'),
			subtitle: '',
			tabs: {
				bibles: $t('common.bibles'),
				resources: $t('common.resources'),
			},
			thead: {
				language: $t('common.language'),
				title: $t('common.title'),
				country: $t('common.country'),
				date: $t('common.Date'),
			},
		}}" />