import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(`${api_base_url}libraries/${params.id}.json`)
if (res.ok) {
	return {
		library: await res.json(),
	}
}

throw error(500, `Could not load individual library: ${params.id}`);
}
