<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch, params }) {
	return FallbackFetch(fetch, "country", `countries/${params.id}`)
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { CountryShow } from "svelte-bible-wiki"

export let country
</script>

<CountryShow country="{country}" locale="{$locale}" />
