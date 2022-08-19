<script>
	import {onMount} from 'svelte'
	import {columns, preferences} from '$lib/store'
	import ColumnHeader from '../ColumnHeader.svelte'
	export let key
	const baseUrl = import.meta.env.VITE_API_BASEURL
	let metadata
	onMount(async () => {
		metadata = await fetch(baseUrl + '/_/media.json').then(res => res.json())
		$columns[key].metadata = metadata
		console.log($columns)
	
		const results = await Promise.allSettled(
			metadata.media.map(async mediaLibrary => {
				const infoPath = `${baseUrl}/_/media/${mediaLibrary.folder}/info.json`
				return fetch(infoPath).then(res => res.json())
			}),
		)
		const libraries = results.filter(result => !(result.status === 'rejected'))
	})
</script>

<ColumnHeader>
	<div class="flex rounded-md shadow-sm justify-center items-center">
		Media
	</div>
</ColumnHeader>
<!--
{#each $columns as column}
	{#if column.type === 'bible'}

	{/if}
{/each}
-->
{#if metadata}
	{#each metadata.media as media}
	<div>
		{media.type}
		{media.folder}
		{media.name}
	</div>
	{/each}
{/if}