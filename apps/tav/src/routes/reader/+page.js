import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ fetch }) {
const res = await fetch(`https://api.scripture.api.bible/v1/bibles`, {
	headers: { "api-key": import.meta.env.VITE_API_BIBLE },
})

if (res.ok) {
	return {
		bibles: await res.json(),
	}
}

throw error(500, `Could not load Scripture API Bibles endpoint`);
}
