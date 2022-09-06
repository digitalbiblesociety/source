<script>
	import {distractions, font} from '$lib/stores/preferences'
	import {columns} from '$lib/store'
	import Column from '$lib/columns/Column.svelte'
	import TopBar from '$lib/partials/TopBar.svelte'
	import '../style.css'
</script>

<TopBar />

<div
	class:hide-titles={!$distractions.titles}
	class:hide-chapter={!$distractions.chapters}
	class:hide-verse={!$distractions.verses}
	class:hide-media={!$distractions.media}
	class:justify={$font.justified}
	class:red-words={$distractions.redWords} class="absolute inset-0 top-12 flex flex-row w-screen overflow-hidden">
	{#if $columns.length > 0}
		{#each $columns as column, key}
			{#if $columns[key]}
				<Column {key} />
			{/if}
		{/each}
	{/if}
</div>
