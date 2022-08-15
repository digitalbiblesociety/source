import {fetchBooks} from '$lib/utils/fetchBooks.js'

export const infiniteScroll = element => {
	if (element) {
		const observer = new IntersectionObserver(async entries => {
			const first = entries[0]
			if (first.isIntersecting) {
				console.log('infiniteScroll fetching more')
				try {
					const sectionID = element.dataset.ref
					console.log('Init Load')
					if (typeof sectionID !== 'undefined' && sectionID.length > 2) {
						console.log('Fetching Chapters scroll load for ')
						return await fetchBooks(element.dataset.id, sectionID)
					}
				} catch (error) {
					console.log(error)
				}
			}
		})
		observer.observe(element)
	}
}
