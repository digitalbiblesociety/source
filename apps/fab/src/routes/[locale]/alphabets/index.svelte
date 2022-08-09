<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "alphabets")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { AlphabetList } from "svelte-bible-wiki"

export let alphabets
</script>

<svelte:head>
	<title>{$t("Alphabets")} | {$t("Digital Bible Society")}</title>
	<meta name="description" content="Alphabets" />
</svelte:head>

<AlphabetList
	locale="{$locale}"
	alphabets="{alphabets}"
	translations="{{
		title: $t('Alphabets'),
		subtitle: '',
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/bibles',
			},
			{
				title: $t('Alphabets'),
				url: '/alphabets',
			},
		],
		thead: {
			title: $t('Title'),
			language_count: $t('Language Count'),
		},
	}}" />
}} />
