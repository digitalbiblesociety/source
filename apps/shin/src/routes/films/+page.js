	// see https://kit.svelte.dev/docs#loading
	export async function load({ params, fetch }) {
		const country_id = import.meta.env.VITE_COUNTRY_SITE;
		const res = await fetch(
			`https://api.arclight.org/v2/media-countries/${country_id}?apiKey=52b06248a3c6e8.12980089&expand=mediaLanguages&metadataLanguageTags=en`
		);

		if (res.ok) {
			return {
				films: await res.json()
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load JSON for language: ${params.iso}`)
		};
	}