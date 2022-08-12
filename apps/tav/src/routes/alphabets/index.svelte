<script context="module">
export async function load({ fetch }) {
	const res = await fetch(`${api_base_url}alphabets.json`)
	if (res.ok) {
		return {
			props: {
				alphabets: await res.json(),
			},
		}
	}

	return {
		status: res.status,
		error: new Error(`Could not load Alphabets`),
	}
}
</script>

<script>
import { AlphabetList } from "@dbs/svelte-bible-wiki"
import { t } from "$lib/translations"

export let alphabets
</script>

<svelte:head>
	<title>Alphabets | {$t("common.org_title")}</title>
</svelte:head>

<AlphabetList alphabets="{alphabets}" locale="" />
