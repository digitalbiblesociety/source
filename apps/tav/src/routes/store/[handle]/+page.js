// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
return {
	handle: params.handle,
}
}
