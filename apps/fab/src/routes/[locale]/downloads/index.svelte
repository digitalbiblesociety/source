<script context="module">
export async function load({ fetch }) {
	const base_url = import.meta.env.VITE_BASE_API
	const res = await fetch(`${base_url}/data/languages.json`)
	if (res.ok) {
		return {
			props: {
				languages: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(`Could not load Languages`),
	}
}
</script>

<div class="py-4 text-center">
	<h1 class="text-2xl">Distributed Bible Peer-to-Peer Network</h1>
</div>
