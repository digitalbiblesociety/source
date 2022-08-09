<script>
import {columns} from '$lib/store'
import ColumnHeader from '../ColumnHeader.svelte'
export let key
let query
const baseUrl = import.meta.env.VITE_API_BASEURL
let verses
let loading = false

async function search(query) {
	const results = []
	loading = true

	let words = await fetch(`${baseUrl}/${$columns[key].id}/sophia/search.txt`).then(res => res.text())
	words = words.toLowerCase().split('\n')

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

	//    Search for the object with lowest properties. O(n).
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
		<input bind:value={query} class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300">
	  </div>
	  <button type="button" on:click={() => search(query)} class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
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
			<div class="ml-5 text-sm text-gray-400 dark:text-gray-200">{verse_id}</div>
			<div class="search-result py-4">
				{@html highlight(verse, query)}
			</div>
		{/each}
	{/if}
</div>
{/if}  
	
</ColumnHeader>