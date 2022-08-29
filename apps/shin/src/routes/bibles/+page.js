	// See https://kit.svelte.dev/docs#loading
	export async function load({fetch}) {
		const baseUrl = import.meta.env.VITE_BASE_API
		const res = await fetch(`${baseUrl}/bibles_dbs.json`)
		if (res.ok) {
			return {
				bibles: await res.json(),
			}
		}
	
		return {
			status: res.status,
			error: new Error('Could not load bibles JSON'),
		}
	}