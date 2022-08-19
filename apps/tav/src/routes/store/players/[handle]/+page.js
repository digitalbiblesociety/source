import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}bible_audioplayers.json`)
if (res.ok) {
	return {
		bibles: await res.json(),
		handle: params.handle,
	}
}
throw error(500, `Could not load bibles JSON`);
}
