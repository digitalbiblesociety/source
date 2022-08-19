import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
const res = await fetch(`${api_base_url}alphabets.json`)
if (res.ok) {
	return {
		alphabets: await res.json(),
	}
}

throw error(500, `Could not load Alphabets`);
}
