<script context="module">
	export async function load({fetch}) {
		const res = await fetch('/data/bibles_dbs.json', {mode: 'no-cors'})
		if (res.ok) {
			return {
				props: {
					bibles: await res.json(),
				},
			}
		}
	
		return {
			status: res.status,
			error: new Error('Could not load bibles JSON'),
		}
	}
</script>
<script>
	import {onMount} from 'svelte'
	import BibleColumnInfo from './BibleColumnInfo.svelte'
	import Fuse from 'fuse.js'

	export let key
	let bibles
	let query = ''
	let open = false
	let results = []
	let engine
	onMount(async () => {
		bibles = await fetch('/data/bibles_dbs.json', {mode: 'no-cors'}).then(res => res.json())
		results = [...bibles]
		engine = new Fuse(bibles, {
			shouldSort: true,
			includeMatches: true,
			threshold: 0.3, // At what point does the match algorithm give up.
			location: 0, // Determines approximately where in the text is the pattern expected to be found
			distance: 40, // Determines how close the match must be to the fuzzy location (specified by location).
			maxPatternLength: 12,
			minMatchCharLength: 1,
			keys: ['tt', 'tv'],
		})
	})

const filter = function () {
		if (query === '') {
			results = bibles
		} else {
			results = engine.search(query).slice(0, 100)
		}
}

</script>

<div on:click={() => open = !open}>
	<button type="button" on:click={() => engine.search(query)} class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-stone-300 dark:border-stone-900 text-sm font-medium rounded-r-md text-stone-700 bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-full p-1 cursor-pointer bg-stone-700 text-stone-100 hover:bg-black hover:text-white" viewBox="0 0 20 20" fill="currentColor">
			<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
		</svg>
	  </button>
</div>

	{#if bibles}
		<div class:hidden={!open} class="absolute inset-0 top-14 p-4 text-xs rounded-sm bg-white dark:bg-stone-700 dark:text-stone-200 overflow-y-scroll z-50">

			<BibleColumnInfo key={key} />
			
			<div class="mb-8">
				<label for="email" class="block text-sm font-medium text-stone-700">Filter Available Bibles</label>
				<div class="mt-1 relative rounded-md shadow-sm">
				  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-stone-400" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
					  </svg>
				  </div>
				  <input type="search"
				  bind:value="{query}"
				  on:input="{filter}" class="block w-full dark:bg-stone-800 dark:text-stone-200 pl-10 sm:text-sm border-stone-300 dark:border-stone-900 rounded-md" placeholder="Filter">
				</div>
			  </div>

			{#each results as bible}
			<div class="flex p-2 my-2 dark:bg-stone-800 dark:hover:bg-stone-900 cursor-pointer rounded-sm" on:click={() => open = !open}>
				<div class="flex flex-col pl-2">
					<div class="text-stone-900 dark:text-stone-100">{bible.tt ?? bible.item.tt}</div>
					<div class="text-stone-500 dark:text-stone-300 text-xs">{bible.tv ?? bible.item.tv}</div>
				</div>
				{#if bible.tagged}
					<span>Tag Icon</span>
				{/if}
			</div>
			{/each}
		</div>
	{/if}