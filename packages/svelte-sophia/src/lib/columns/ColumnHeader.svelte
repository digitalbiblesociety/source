<script>
	import {columns} from '$lib/store.js'

	export let key
</script>

<header class="bg-stone-200 h-14 dark:bg-stone-900 flex flex-row justify-between items-center">

	<slot />

	{#if $columns.length !== 1}
	<svg xmlns="http://www.w3.org/2000/svg" 
		on:click={() => $columns = $columns.filter((el, index) => index !== key)} 
		class="h-5 w-5 mr-4 text-stone-900 dark:text-stone-200 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
		<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
	</svg>
	{/if}

</header>