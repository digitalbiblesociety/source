<script>
	import {columns, columnWrap, preferences} from '$lib/store'
	import BibleColumn from './BibleColumn/BibleColumn.svelte'
	import SearchColumn from './SearchColumn/SearchColumn.svelte'

	export let key
</script>

{#if $columns[key]}
<section 
	class="relative z-0 dark:bg-stone-800 dark:text-stone-200"
	style="width:{100 / $columns.length}%;font-size:{$preferences.font.size[0]}pt"
	bind:this={$columnWrap[key]}>
	{#if $columns[key].type === 'bible'}
		<BibleColumn key={key} />
	{/if}
	{#if $columns[key].type === 'search'}
		<SearchColumn key={key} />
	{/if}
</section>
{/if}