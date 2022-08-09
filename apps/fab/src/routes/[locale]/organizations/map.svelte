<script context="module">
import FallbackFetch from "$lib/fallback-fetch.js"
export async function load({ fetch }) {
	return FallbackFetch(fetch, "fobai")
}
</script>

<script>
import WorldMap from "../../../components/Map/WorldMap.svelte"

export let fobai
</script>

<WorldMap pins="{fobai}" />
