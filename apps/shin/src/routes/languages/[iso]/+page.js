	export async function load({ params, fetch }) {
		const baseUrl = import.meta.env.VITE_BASE_API;
		const res = await fetch(`${baseUrl}/languages/${params.iso}.json`);
		const bibles_dbs = await fetch(`${baseUrl}/bibles_dbs.json`);
		if (res.ok) {
			return {
					language: await res.json(),
					bibles: await bibles_dbs.json()
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load JSON for language: ${params.iso}`)
		};
	}