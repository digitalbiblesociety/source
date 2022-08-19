import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
const api_base_url = import.meta.env.VITE_BASE_API
const res = await fetch(
	`${api_base_url}organizations/${params.organization_id}.json`
)

if (res.ok) {
	return {
		organization: await res.json(),
	}
}

throw error(500, `Could not load organizations_${params.organization_id}.json`);
}
