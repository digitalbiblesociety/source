	// see https://kit.svelte.dev/docs#loading
	export async function load({ params, fetch }) {
		const film_id = params.id.split('___')[0];
		const lang_id = params.id.split('___')[1];
		const res = await fetch(
			`https://api.arclight.org/v2/media-components/${film_id}/languages/${lang_id}?apiKey=52b06248a3c6e8.12980089`
		);

		if (res.ok) {
			return {
				film: await res.json()
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load JSON for ${film_id}`)
		};
	}