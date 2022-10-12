import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "languages")
}
