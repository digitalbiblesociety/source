<script>
	import {Disclosure, DisclosureButton, DisclosurePanel} from '@rgossiaux/svelte-headlessui'
	import {columns, columnWrap, currentReference} from '$lib/store'
	import {books} from '$lib/data/books.js'
	import {fetchBooks} from '$lib/utils/fetchBooks.js'
	import parseCurrentReference from '$lib/utils/parseVerseRef.js'

	export let key

	let open = false

	async function navigate(bookId, chapter) {
		for (let i = 0; i < $columns.length; i++) {
			if ($columns[i]?.type === 'bible') {
				const book = await fetchBooks($columns[i].metadata.id, bookId)
				$columns[i].books = [book]
				console.log('book-nav', book)

				const url = new URL(document.URL)
				url.hash = '#c' + chapter
				document.location.href = url.href

				// Console.log('query is', `.m${bookId} #c${chapter}`)
				// $columnWrap[i].querySelector(`#c${chapter}`).scrollIntoView()
			}
		}
	
		open = false
	}
</script>


<input
	type="text"
	on:click={() => (open = !open)}
	class="h-10 ml-4 text-xs dark:text-stone-200 block dark:bg-stone-600 rounded-none rounded-l-md sm:text-sm border-stone-300 dark:border-stone-700"
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
									on:click="{() => navigate(book[0], chapter)}"
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