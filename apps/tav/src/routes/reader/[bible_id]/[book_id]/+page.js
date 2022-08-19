import { error } from '@sveltejs/kit';

// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
const res = await fetch(
	`https://api.scripture.api.bible/v1/bibles/${params.bible_id}/books/${params.book_id}/chapters`,
	{
		headers: { "api-key": import.meta.env.VITE_API_BIBLE },
	}
)
if (res.ok) {
	return {
		chapters: await res.json(),
	}
}
throw error(500, `Could not load scripture api chapters endpoint`);
}
