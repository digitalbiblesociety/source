<script>
	import {columns, preferences} from '$lib/store'
	import Column from '$lib/columns/Column.svelte'
	import TopBar from '$lib/partials/TopBar.svelte'
	import '../style.css'
</script>
<TopBar />
<div
	class:hide-titles={!$preferences.distraction.titles}
	class:hide-chapter={!$preferences.distraction.chapters}
	class:hide-verse={!$preferences.distraction.verses}
	class:hide-media={!$preferences.distraction.media}
	class:justify={$preferences.format.justified}
	class:red-words={$preferences.distraction.red_words} class="absolute inset-0 top-12 flex flex-row w-screen overflow-hidden">
	{#if $columns.length > 0}
		{#each $columns as column, key}
			{#if $columns[key]}
				<Column {key} />
			{/if}
		{/each}
	{/if}
</div>
