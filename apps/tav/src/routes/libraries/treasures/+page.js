import { error } from '@sveltejs/kit';
import { t } from "$lib/Translations"
import Banner from "$lib/components/Banner.svelte"

export async function load({ fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}/libraries.json`)
if (res.ok) {
	return {
		libraries: await res.json(),
	}
}

throw error(500, `Could not load libraries`);
}
