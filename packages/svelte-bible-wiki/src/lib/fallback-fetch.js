export default async function (fetch, name, file) {
	const res = await fetch(`/data/${file ?? name}.json`)
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