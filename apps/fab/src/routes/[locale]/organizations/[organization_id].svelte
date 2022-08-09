<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ params, fetch }) {
	return FallbackFetch(
		fetch,
		"organization",
		`organizations/${params.organization_id}`
	)
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { OrganizationShow } from "svelte-bible-wiki"

export let organization
</script>

<OrganizationShow locale="{$locale}" organization="{organization}" />
