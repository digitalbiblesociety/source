import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const alphabet_request = await fetch(
	`${api_base_url}alphabets/${params.script}.json`
)
const bible_request = await fetch(`${api_base_url}bibles.json`)
if (alphabet_request.ok && bible_request.ok) {
	const alphabet = await alphabet_request.json()
	const bibles = await bible_request.json()
	const parsedBibles = []

	for (const bible of bibles) {
		if (bible.sc == alphabet.script) {
			parsedBibles.push(bible)
		}
	}

	return {
		alphabet: alphabet,
		bibles: parsedBibles,
	}
}
throw error(500, `Could not load alphabet for ${params.script}`);
}
