import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}languages/${params.iso}.json`)
if (res.ok) {
	return {
		language: await res.json(),
	}
}
throw error(500, `Could not load language JSON for ${params.iso}`);
}
