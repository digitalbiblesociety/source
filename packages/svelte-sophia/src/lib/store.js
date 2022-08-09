import {writable} from 'svelte/store'

// This is the default columns
export const columns = writable([
	{id: 'ENGKJV', type: 'bible', books: []},
	{id: 'ENGWEB', type: 'bible', books: []},
	{id: 'ENGKJV', type: 'search'},
])

export const columnWrap = writable([])

export const currentReference = writable('')
export const scrollPosition = writable()
export const scrolling = writable()

export const preferences = writable({
	font: {
		name: 'sans-serif',
		size: [14],
	},
	format: {
		media: true,
		justified: false,
	},
	distraction: {
		chapters: true,
		verses: true,
		titles: true,
		footnotes: true,
		red_words: true,
	},
})
