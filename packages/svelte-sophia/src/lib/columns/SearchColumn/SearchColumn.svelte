<script>
import {onMount} from 'svelte'
import {columns} from '$lib/store'
import ColumnHeader from '../ColumnHeader.svelte'
import Fuse from 'fuse.js'
export let key
let query
const baseUrl = import.meta.env.VITE_API_BASEURL
let verses
let loading = false
let engine

onMount(async () => {
	const words = await fetch(`${baseUrl}/${$columns[key].id}/sophia/search.txt`).then(res => res.text().split('\n'))
	engine = new Fuse(words, {
		shouldSort: true,
		threshold: 0.3, // At what point does the match algorithm give up. A threshold of 0.0 requires a perfect match (of both letters and location), a threshold of 1.0 would match anything.
		location: 0, // Determines approximately where in the text is the pattern expected to be found
		distance: 50, // Determines how close the match must be to the fuzzy location (specified by location). An exact letter match which is distance characters away from the fuzzy location would score as a complete mismatch. A distance of 0 requires the match be at the exact location specified. A distance of 1000 would require a perfect match to be within 800 characters of the location to be found using a threshold of 0.8
		maxPatternLength: 12,
		minMatchCharLength: 1,
	})
})

async function search(query) {
	const results = []
	loading = true

	Promise.all(
		query.toLowerCase().split(' ').map(async term => {
			term = term.toLowerCase()
			if (words.indexOf(term) !== -1) {
				const result = await fetch(`${baseUrl}/${$columns[key].id}/sophia/search/${words.indexOf(term)}.json`)
					.then(res => res.json())
				results.push(result.verses)
			}
		}),
	).then(values => {
		verses = (results.length > 1) ? getCommonProps(results) : results[0]
		loading = false
	})
}

function getCommonProps(objects) {
	//    Storage var for object with lowest properties.
	let lowest = {obj: null, nProperties: 1000}

	// Search for the object with lowest properties. O(n).
	// eslint-disable-next-line guard-for-in
	for (const j in objects) {
		const _nProp = Object.keys(objects[j]).length
		if (_nProp < lowest.nProperties) {
			lowest = {obj: objects[j], nProperties: _nProp}
		}
	}

	//    Var that holds the common properties.
	const common = {}

	//    The object with the fewest properties should contain common properties.
	for (const i in lowest.obj) {
		if (isCommonProp(objects, i)) {
			common[i] = objects[0][i]
		}
	}

	return common
}

//    Checks if the prop exists in all objects of given array.
function isCommonProp(arr, prop) {
	for (const i in arr) {
		if (arr[i][prop] === undefined) {
			return false
		}
	}

	return true
}

function preg_quote(str, delimiter) {
	return (String(str))
		.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&')
}

function highlight(str, search) {
	return str.replace(new RegExp('(' + preg_quote(search) + ')', 'gi'), '<em>$1</em>')
}

</script>

<ColumnHeader key={key}>

	<div class="flex rounded-md shadow-sm h-10 mt-1">
	  <div class="relative flex items-stretch flex-grow focus-within:z-10">
		<input bind:value={query} class="block w-full dark:bg-stone-600 rounded-none rounded-l-md pl-10 sm:text-sm border-stone-300">
	  </div>
	  <button type="button" on:click={() => search(query)} class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-stone-300 dark:border-stone-900 text-sm font-medium rounded-r-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
		</svg>
	  </button>
	</div>

{#if verses}
<div class="flex flex-col overflow-scroll absolute inset-0 top-12">
	{#if loading}
			Loading...
		{:else}
		{#each Object.entries(verses) as [verse_id, verse]}
			<div class="ml-5 text-sm text-stone-400 dark:text-stone-200">{verse_id}</div>
			<div class="search-result py-4">
				{@html highlight(verse, query)}
			</div>
		{/each}
	{/if}
</div>
{/if}  
	
</ColumnHeader>