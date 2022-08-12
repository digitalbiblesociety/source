<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "countries")
}
</script>

<script>
import { CountryList } from "@dbs/svelte-bible-wiki"
import { t } from "$lib/translations"

export let countries
</script>

<CountryList countries="{countries}" locale="" />
