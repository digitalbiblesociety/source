<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ params, fetch }) {
	return FallbackFetch(fetch, `resources`, "resources")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { ResourceList } from "svelte-bible-wiki"

export let resources
</script>

<ResourceList
	locale="{$locale}"
	resources="{resources}"
	translations="{{
		title: $t('Resources'),
		subtitle: '',
		tabs: {
			bibles: $t('Bibles'),
			resources: $t('Resources'),
		},
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/resources',
			},
			{
				title: $t('Resources'),
				url: '/resources',
			},
		],
	}}" />
