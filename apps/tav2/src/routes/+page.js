import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}/bibles_dbs.json`)
if (res.ok) {
	return {
		bibles: await res.json(),
	}
}
throw error(500, `Could not load bibles JSON`);
}
