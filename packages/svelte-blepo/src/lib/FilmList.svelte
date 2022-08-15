<script context="module">
	// See https://kit.svelte.dev/docs#loading
	export async function load({fetch}) {
		const res = await fetch(`/films.json`)
		if (res.ok) {
			return {
				props: {
					films: await res.json(),
				},
			}
		}
	
		return {
			status: res.status,
			error: new Error('Could not load Films JSON'),
		}
	}
</script>
<script>
	export let films
</script>

{ JSON.stringify(films) }

{#if films}
	<div>
		{#each films as film}
			{ JSON.stringify(film) }
		{/each}
	</div>
{/if}