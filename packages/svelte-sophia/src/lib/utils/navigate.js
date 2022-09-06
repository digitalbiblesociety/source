import {get} from 'svelte/store'
import {columns, columnWrap} from '../store.js'
import {fetchBooks} from '$lib/utils/fetchBooks.js'

export default function navigate(bookId, chapter) {
	const currentColumns = get(columns)
	Promise.all(
		currentColumns.map(async newCol => {
			if (newCol.type === 'bible') {
				console.log('async newCol', newCol)
				const book = await fetchBooks(newCol.metadata.id, bookId)
				newCol.books = [book]
			}

			return newCol
		}),
	).then(newCols => {
		columns.set(newCols)
		get(columnWrap).forEach(column => {
			column.querySelector(`#c${chapter}`).scrollIntoView()
		})
	})
}
