<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch, params }) {
	return FallbackFetch(fetch, "language", `languages/${params.iso}`)
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { LanguageShow } from "svelte-bible-wiki"

export let language
</script>

<LanguageShow
	locale="{$locale}"
	language="{language}"
	translations="{{
		title: language.name,
		subtitle: language.autonym,
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/languages',
			},
			{
				title: $t('Languages'),
				url: '/languages',
			},
			{
				title: language.name,
				url: '#',
			},
		],
		thead: {
			language: $t('Language'),
			title: $t('Title'),
			country: $t('Country'),
			date: $t('Date'),
		},
	}}" />
