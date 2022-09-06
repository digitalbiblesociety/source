<script>
	import {columns, columnWrap} from '$lib/store'
	import {font} from '$lib/stores/preferences.js'
	import BibleColumn from './BibleColumn/BibleColumn.svelte'
	import MediaColumn from './MediaColumn/MediaColumn.svelte'
	import SearchColumn from './SearchColumn/SearchColumn.svelte'

	export let key
</script>


{#if $columns[key]}
<section
	class="relative z-0 dark:bg-stone-800 dark:text-stone-200"
	style="width:{100 / $columns.length}%;font-size:{$font.size}pt;font-family:{$font.name}"
	bind:this={$columnWrap[key]}>
	{#if $columns[key].type === 'bible'}
		<BibleColumn key={key} />
	{/if}
	{#if $columns[key].type === 'search'}
		<SearchColumn key={key} />
	{/if}
	{#if $columns[key].type === 'media'}
		<MediaColumn key={key} />
	{/if}
</section>
{/if}