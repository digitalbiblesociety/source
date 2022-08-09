<script>
	import {Disclosure, DisclosureButton, DisclosurePanel} from '@rgossiaux/svelte-headlessui'
	import {columns, columnWrap, currentReference} from '$lib/store'
	import {books} from '$lib/data/books.js'
	import {fetchBooks} from '$lib/utilities/fetchBooks.js'

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

	function parseCurrentReference(reference) {
		if (!reference) {
			return ''
		}
	
		const refparts = reference.split('_')
		return $columns[key].metadata.books[refparts[0]].book_name + ' ' + refparts[1] + ':' + refparts[2]
	}
</script>

<input
	type="text"
	on:click={() => (open = !open)}
	class="h-8 my-2 ml-4 text-xs rounded-sm dark:bg-gray-700 dark:text-gray-200"
	value={parseCurrentReference($currentReference)}
/>
{#if open}
	<div class="absolute top-12 z-50 w-full h-full overflow-scroll">
		{#each Object.entries($columns[key].metadata.books) as book}
			<Disclosure class="bg-gray-50 dark:bg-gray-800 border-l-8" let:open style={`border-color:rgb(${books[book[0]]?.color});`}>
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