<script context="module">
export async function load({ params, fetch }) {
	const api_base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${api_base_url}countries/${params.id}.json`)
	if (res.ok) {
		return {
			props: {
				country: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(
			`Could not load JSON for country: countries/${params.id}.json`
		),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { CountryShow } from "@dbs/svelte-bible-wiki"

export let country
</script>

<CountryShow country="{country}" locale="" />
