<script>
import {onMount} from 'svelte'
import {columns} from '$lib/store'
import ColumnHeader from '../ColumnHeader.svelte'
import shortcut from '$lib/utils/shortcut.js'
import Fuse from 'fuse.js'
import parseCurrentReference from '$lib/utils/parseVerseRef.js'
import {Listbox, ListboxOptions, ListboxOption} from '@rgossiaux/svelte-headlessui'
import navigate from '$lib/utils/navigate.js'
export let key

let query

const baseUrl = import.meta.env.VITE_API_BASEURL
let verses
let loading = false
let engine
let searchInput
let results = []
let dropdownVisible
let words

onMount(async () => {
	words = await fetch(`${baseUrl}/${$columns[key].id}/sophia/search.txt`).then(res => res.text())
	words = words.toLowerCase().split('\n')
	engine = new Fuse(words, {
		shouldSort: true,
		threshold: 0.4,
		location: 0,
		distance: 50,
		maxPatternLength: 12,
		minMatchCharLength: 1,
	})
	query = $columns[key].query ?? ''
	search()
})

async function search() {
	const verseResults = []
	loading = true

	Promise.all(
		query.toLowerCase().split(' ').map(async term => {
			term = term.toLowerCase()
			if (words.indexOf(term) !== -1) {
				await fetch(`${baseUrl}/${$columns[key].id}/sophia/search/${words.indexOf(term)}.json`)
					.then(res => res.json()).then(res => {
						verseResults.push(res.verses)
					})
			}
		}),
	).then(values => {
		verses = (verseResults.length > 1) ? getCommonProps(verseResults) : verseResults[0]
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

const instantSearch = function () {
	results = engine.search(query).slice(0, 100)

	results.forEach(resultItem => {
		resultItem = highlighter(resultItem)
	})
	if (results.length > 0) {
		dropdownVisible = true
	} else {
		dropdownVisible = false
	}
}

const highlighter = function (resultItem) {
	resultItem.matches.forEach(matchItem => {
		const text = resultItem.item[matchItem.key]
		const result = []
		const matches = [].concat(matchItem.indices)
		let pair = matches.shift()

		for (let i = 0; i < text.length; i++) {
			const char = text.charAt(i)
			if (pair && i == pair[0]) {
				result.push('<b>')
			}

			result.push(char)
			if (pair && i == pair[1]) {
				result.push('</b>')
				pair = matches.shift()
			}
		}

		resultItem.highlight = result.join('')
		resultItem.highlightKey = matchItem.key

		if (resultItem.children && resultItem.children.length > 0) {
			resultItem.children.forEach(child => {
				highlighter(child)
			})
		}
	})
}

</script>

<ColumnHeader key={key}>

	<div class="flex rounded-md shadow-sm h-10 mt-1">
	  <div class="relative flex flex-col items-stretch focus-within:z-10">
		<input 
			bind:value="{query}"
			bind:this="{searchInput}"
			on:input="{instantSearch}"
			aria-label="Search"
			use:shortcut="{{
				control: true,
				code: 'KeyG',
				callback() {
					searchInput.focus()
				},
			}}"
			use:shortcut="{{
				control: true,
				code: 40,
				callback() {
					searchInput.focus()
				},
			}}"
			class="h-10 w-full sm:width-auto ml-4 pl-4 text-xs dark:text-stone-200 block dark:bg-stone-600 rounded-none rounded-l-md sm:text-sm border-stone-400 dark:border-stone-700">

			{#if results.length}
			<Listbox on:change={e => {
				query = e.detail
				search(e.detail)
				results = []
			}}>
				<ListboxOptions static  class="absolute z-10 mt-1 w-full bg-white dark:bg-stone-600 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
				  {#each results as result}
					<ListboxOption value={result.item}  class="cursor pointer text-stone-900 hover:dark:bg-stone-900 dark:text-stone-200 cursor-default select-none relative py-2 pl-3 pr-9">
					  {result.item}
					</ListboxOption>
				  {/each}
				</ListboxOptions>
			  </Listbox>
			{/if}

	  </div>
	  <button type="button" on:click={() => search(query)} class="-ml-px relative h-10 inline-flex items-center space-x-2 px-4 py-2 rounded-r-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 cursor-pointer bg-stone-700 text-stone-100 hover:bg-black hover:text-white" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
		</svg>
	  </button>
	</div>

{#if verses}
<div class="flex flex-col overflow-scroll absolute inset-0 top-14">
	{#if loading}
			Loading...
		{:else}
		{#each Object.entries(verses) as [verseID, verse]}
			<div 
			on:click={() => navigate(verseID.split('_')[0], verseID.split('_')[1])}
			class="hover:bg-stone-50 hover:dark:bg-stone-800 cursor-pointer">
				<div class="ml-5 font-bold text-stone-400 dark:text-stone-200">
					{ parseCurrentReference($columns, key, verseID) }
				</div>
				<div class="search-result py-4">
					{@html verse }
				</div>
			</div>
		{/each}
	{/if}
</div>
{/if}  
	
</ColumnHeader>