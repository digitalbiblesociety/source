import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}bibles/${params.bible_id}.json`)
if (res.ok) {
	return {
		bible: await res.json(),
	}
}
throw error(500, `Could not load JSON for bible: ${params.bible_id}`);
}
