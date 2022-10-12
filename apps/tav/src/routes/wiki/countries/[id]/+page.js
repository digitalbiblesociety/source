import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}countries/${params.id}.json`)
if (res.ok) {
	return {
		country: await res.json(),
	}
}
throw error(500, `Could not load JSON for country: countries/${params.id}.json`);
}
