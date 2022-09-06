<script>
	import {Disclosure, DisclosureButton, DisclosurePanel} from '@rgossiaux/svelte-headlessui'
	import {columns, currentReference} from '$lib/store'
	import books from '$lib/data/books.json'
	import parseCurrentReference from '$lib/utils/parseVerseRef.js'
	import navigate from '$lib/utils/navigate.js'

	export let key

	let open = false
</script>

<button type="button" on:click={() => open = !open} 
	class="-ml-px relative h-10 inline-flex sm:hidden items-center space-x-2 px-4 py-2 rounded-l-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 border border-stone-400 dark:border-stone-700">
	<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 cursor-pointer bg-stone-700 text-stone-100 hover:bg-black hover:text-white" viewBox="0 0 20 20" fill="currentColor">
		<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
	</svg>
</button>

<input
	type="text"
	on:click={() => (open = !open)}
	class="h-10 hidden sm:flex lg:ml-4 text-xs dark:text-stone-200 dark:bg-stone-600 rounded-none rounded-l-md sm:text-sm border-stone-400 dark:border-stone-700"
	value={parseCurrentReference($columns, key, $currentReference)}
/>

{#if open}
	<div class="absolute top-12 left-0 z-50 w-full h-full overflow-scroll">
		{#each Object.entries($columns[key].metadata.books) as book}
			<Disclosure class="bg-stone-50 dark:bg-stone-800 border-l-8" let:open style={`border-color:rgb(${books[book[0]]?.color});`}>
				<div style={open ? `background-color:rgba(${books[book[0]]?.color}, .5)` : ''}>
					<DisclosureButton class="text-left pl-4 py-2">
						<span class:font-bold={open}>{book[1].book_name}</span>
					</DisclosureButton>
					<DisclosurePanel class="flex flex-row flex-wrap">
						{#each book[1].chapters as chapter}
								<span 
									on:click={() => {
										navigate($columns, book[0], chapter)
										open = false
									}}
									class="inline-flex justify-center items-center w-10 h-10 mt-1 mr-1 text-center cursor-pointer">
										{chapter}
								</span>
						{/each}
					</DisclosurePanel>
				</div>
			</Disclosure>
		{/each}
	</div>
{/if}