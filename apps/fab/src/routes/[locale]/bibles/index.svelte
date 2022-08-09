<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "bibles", "bibles")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { BibleList } from "svelte-bible-wiki"

export let bibles
</script>

<svelte:head>
	<title>Bibles | {$t("Digital Bible Society")}</title>
</svelte:head>

<BibleList
	locale="{$locale}"
	bibles="{bibles}"
	translations="{{
		title: $t('Bibles'),
		subtitle: '',
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/bibles',
			},
			{
				title: $t('Bibles'),
				url: '/bibles',
			},
		],
		tabs: {
			bibles: $t('Bibles'),
			resources: $t('Resources'),
		},
		thead: {
			language: $t('Language'),
			title: $t('Title'),
			country: $t('Country'),
			date: $t('Date'),
		},
	}}" />
