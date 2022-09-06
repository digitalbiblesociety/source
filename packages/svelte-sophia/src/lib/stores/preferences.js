import {writable, derived} from 'svelte/store'

export const distractions = writable({
	chapters: true,
	verses: true,
	titles: true,
	footnotes: true,
	redWords: true,
	media: true,
})

function createFont() {
	const {subscribe, set, update} = writable({
		name: 'sans-serif',
		justified: false,
		size: 14,
	})
	return {
		subscribe,
		change: event => update(font => {
			font.name = event.target.value
			console.log(font)
			return font
		}),
		increaseSize: () => update(font => {
			font.size += 1
			return font
		}),
		decreaseSize: () => update(font => {
			font.size -= 1
			return font
		}),
		reset: () => set({
			name: 'sans-serif',
			size: 14,
		}),
	}
}

export const font = createFont()
