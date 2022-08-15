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

			Promise.all(
				metadata.media.map(async mediaLibrary => {
					await fetch(`${baseUrl}/_/media/${mediaLibrary.folder}/info.json`)
						.then(res => res.json()).then(res => {
							console.log('res', res)
							$columns[key].mediaLibraries.push(res)
						})
				}))
		})
</script>

<ColumnHeader>
	<div class="flex rounded-md shadow-sm justify-center items-center">
		Media
	</div>
</ColumnHeader>



{JSON.stringify($columns[key].mediaLibraries)}



{#if metadata}
	{#each metadata.media as media}
	<div>
		{media.type}
		{media.folder}
		{media.name}
	</div>
	{/each}
{/if}