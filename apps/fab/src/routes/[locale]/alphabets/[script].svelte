<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch, params }) {
	return FallbackFetch(fetch, "alphabet", `alphabets/${params.script}`)
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { AlphabetShow } from "svelte-bible-wiki"

export let alphabet
</script>

<AlphabetShow locale="{$locale}" alphabet="{alphabet}" />
