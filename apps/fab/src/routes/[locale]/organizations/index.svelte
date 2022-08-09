<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "organizations")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { OrganizationList } from "svelte-bible-wiki"

export let organizations
</script>

<OrganizationList
	locale="{$locale}"
	organizations="{organizations}"
	translations="{{
		title: $t('Organizations'),
		subtitle: '',
		tabs: {
			organizations: $t('Organizations'),
			fobai: $t('fobai'),
		},
		breadcrumbs: [
			{
				title: $t('Reference'),
				url: '/organizations',
			},
			{
				title: $t('Organizations'),
				url: '/organizations',
			},
		],
	}}" />
