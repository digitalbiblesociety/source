	// see https://kit.svelte.dev/docs#loading
	export async function load({ params, fetch }) {
		const api_base_url = import.meta.env.VITE_BASE_API;
		const iso = params.id.split('-')[0];
		const numeral_id = params.id.split('-')[1];

		const url = `https://api.arclight.org/v2/media-components?apiKey=52b06248a3c6e8.12980089&subTypes=featureFilm,shortFilm&languageIds=${numeral_id}&metadataLanguageTags=en`;
		const res = await fetch(url);
		const languageResponse = await fetch(`${api_base_url}/languages/${iso}.json`);
		if (res.ok) {
			return {
				films: await res.json(),
				language: await languageResponse.json(),
				language_numeral_id: numeral_id
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load JSON for language: ${params.iso}`)
		};
	}