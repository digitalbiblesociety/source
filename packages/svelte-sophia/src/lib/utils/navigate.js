import {subscribe} from 'svelte/store'
import {columns} from '../store.js'
import {fetchBooks} from '$lib/utils/fetchBooks.js'

export default async function navigate(bookId, chapter) {
	columns.subscribe((newCols) => {
		console.log('subnallu', newCols)
		for (let i = 0; i < newCols.length; i++) {
			if (newCols[i]?.type === 'bible') {
				const book = await fetchBooks(newCols[i].metadata.id, bookId)
				newCols[i].books = [book]
	
				// Const url = new URL(document.URL)
				// url.hash = '#c' + chapter
				// document.location.href = url.href
	
				// Console.log('query is', `.m${bookId} #c${chapter}`)
				// $columnWrap[i].querySelector(`#c${chapter}`).scrollIntoView()
			}
		}
	})

}
