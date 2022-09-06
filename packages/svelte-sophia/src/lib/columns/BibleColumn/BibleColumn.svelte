<script>
	import {onMount} from 'svelte'
	import {columns} from '$lib/store'
	import BibleColumnHeader from './BibleColumnHeader.svelte'
	import BibleColumnScroll from './BibleColumnScroll.svelte'
	import {fetchBooks} from '$lib/utils/fetchBooks.js'

	export let key

	onMount(async () => {
		// Fetch the Corresponding Bible Info Json
		const metadata = await fetch(import.meta.env.VITE_API_BASEURL + `/${$columns[key].id}/info.json`)
			.then(res => res.json())
		$columns[key].metadata = metadata

		const book = await fetchBooks($columns[key].id, Object.keys(metadata.books)[0])

		$columns[key].books = [book]
	})

	function bookParser(book) {
		const el = document.createElement('div')
		el.innerHTML = book
	}
</script>


<BibleColumnHeader key={key} />
<BibleColumnScroll key={key}>
	{#if $columns[key].books}
		{#each $columns[key].books as column, index}
			{#if column?.book}
				{@html column.book}
				<!--
				{bookParser(column.book)}-->
			{/if}
		{/each}
	{/if}
</BibleColumnScroll>
