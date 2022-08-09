<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "countries")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { CountryList } from "svelte-bible-wiki"

export let countries
</script>

<svelte:head>
	<title>Countries | {$t("Digital Bible Society")}</title>
	<meta name="description" content="An index of countries" />
</svelte:head>

<CountryList
	locale="{$locale}"
	countries="{countries}"
	translations="{{
		title: $t('Countries'),
		subtitle: '',
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/bibles',
			},
			{
				title: $t('Countries'),
				url: '/countries',
			},
		],
		thead: {
			title: $t('Title'),
			population: $t('Population'),
			language_count: $t('Language Count'),
		},
		tabs: {
			countries: $t('Countries'),
			maps: $t('Maps'),
		},
	}}" />
