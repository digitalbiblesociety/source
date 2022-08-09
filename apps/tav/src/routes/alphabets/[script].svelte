<script context="module">
export async function load({ params, fetch }) {
	const api_base_url = import.meta.env.VITE_BASE_API
	const alphabet_request = await fetch(
		`${api_base_url}alphabets/${params.script}.json`
	)
	const bible_request = await fetch(`${api_base_url}bibles.json`)
	if (alphabet_request.ok && bible_request.ok) {
		const alphabet = await alphabet_request.json()
		const bibles = await bible_request.json()
		const parsedBibles = []

		for (const bible of bibles) {
			if (bible.sc == alphabet.script) {
				parsedBibles.push(bible)
			}
		}

		return {
			props: {
				alphabet: alphabet,
				bibles: parsedBibles,
			},
		}
	}
	return {
		status: alphabet_request.status,
		error: new Error(`Could not load alphabet for ${params.script}`),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { AlphabetShow } from "svelte-bible-wiki"

export let alphabet
export let bibles
let rows
</script>

<svelte:head>
	<title>{alphabet.name} | {$t("common.org_title")}</title>
</svelte:head>

<AlphabetShow alphabet="{alphabet}" bibles="{bibles}" locale="{locale}" />
