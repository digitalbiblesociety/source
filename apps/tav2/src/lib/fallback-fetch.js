export default async function (fetch, name, file) {
	const base_url = import.meta.env.VITE_BASE_API ?? "/data/"
	const res = await fetch(`${base_url}${file ?? name}.json`)
	if (res.ok) {
		return {
			props: {
				[name]: await res.json(),
			},
		}
	} else {
		return {
			status: res.status,
			error: new Error(`Could not load ${file}.json`),
		}
	}
}
