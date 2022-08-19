import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
const res = await fetch(
	`https://api.scripture.api.bible/v1/bibles/${params.bible_id}/books`,
	{
		headers: { "api-key": import.meta.env.VITE_API_BIBLE },
	}
)
if (res.ok) {
	return {
		books: await res.json(),
	}
}
throw error(500, `Could not load Scripture API books`);
}
