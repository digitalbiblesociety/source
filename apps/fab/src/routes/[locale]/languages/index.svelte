<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "languages")
}
</script>

<script>
import { t, locale } from "$lib/i18n"
import { LanguageList } from "svelte-bible-wiki"
export let languages
</script>

<LanguageList locale={$locale} languages={languages} />
