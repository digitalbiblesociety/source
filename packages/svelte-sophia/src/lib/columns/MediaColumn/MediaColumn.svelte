<script>
	import {onMount} from 'svelte'
	import {columns, currentBookChapter} from '$lib/store'
	import parseCurrentReference from '$lib/utils/parseVerseRef.js'
	import ColumnHeader from '../ColumnHeader.svelte'

	export let key
	const baseUrl = import.meta.env.VITE_API_BASEURL
	let metadata
	let libraries
	onMount(async () => {
		metadata = await fetch(baseUrl + '/_/media.json').then(res => res.json())
		$columns[key].metadata = metadata
	
		const results = await Promise.allSettled(
			metadata.media.map(async mediaLibrary => {
				const infoPath = `${baseUrl}/_/media/${mediaLibrary.folder}/info.json`
				return fetch(infoPath).then(res => res.json())
			}),
		)
		libraries = results.filter(result => !(result.status === 'rejected'))
	})
</script>

<ColumnHeader key={key}>
	<div class="flex rounded-md shadow-sm justify-center items-center">
		<h2>Media</h2>
	</div>
</ColumnHeader>

{JSON.stringify($currentBookChapter)}

{#if libraries}
	{#each libraries as library}
		{JSON.stringify(library)}
	{/each}
{/if}