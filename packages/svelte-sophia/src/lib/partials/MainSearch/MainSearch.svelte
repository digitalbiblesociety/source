<script>
let query
function search() {

}
</script>

<div class="my-1 relative flex items-center">
	<input 
		type="text" name="search" id="search" bind:value={query}
		on:blur={() => search(query)}
		class="block w-full pr-12 sm:text-sm border-stone-300 dark:border-stone-900 dark:bg-stone-800 rounded-md shadow-sm" />
	<div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
	  <kbd class="inline-flex items-center border border-stone-200 rounded px-2 text-sm font-sans font-medium text-stone-400"> ⌘K </kbd>
	</div>
</div>