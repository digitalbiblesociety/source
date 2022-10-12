export default async function (fetch, name) {
	const base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${base_url}${name}.json`)
	if (res.ok) {
		return {
			props: {
				[name]: await res.json(),
			},
		}
	} else {
		const res = await fetch(`/data/${name}.json`)
		if (res.ok) {
			return {
				props: {
					[name]: await res.json(),
				},
			}
		} else {
			return {
				status: res.status,
				error: new Error(`Could not load ${name}.json`),
			}
		}
	}
}
