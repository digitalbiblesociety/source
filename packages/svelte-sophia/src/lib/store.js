import {writable, derived} from 'svelte/store'

// This is the default columns
export const columns = writable([
	{id: 'ENGKJV', type: 'bible', books: []},
	{id: 'ENGWEB', type: 'bible', books: []},
	{id: 'ENGKJV', type: 'search', query: 'God Love'},
])

export const columnWrap = writable([])

export const currentReference = writable('')
export const currentBookChapter = derived(
	currentReference,
	$currentReference => {
		const reference = $currentReference.split('_')
		reference.splice(-1)
		return reference.join('_')
	},
)
export const scrollPosition = writable()
export const scrolling = writable()


