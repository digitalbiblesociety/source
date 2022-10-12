import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch, params }) {
	return FallbackFetch(fetch, `languages/${params.iso}`)
}