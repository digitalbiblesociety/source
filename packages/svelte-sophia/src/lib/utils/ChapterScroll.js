import {fetchBooks} from '$lib/utils/fetchBooks.js'

export const infiniteScroll = element => {
	if (element) {
		const observer = new IntersectionObserver(async entries => {
			const first = entries[0]
			if (first.isIntersecting) {
				try {
					const sectionID = element.dataset.ref
					if (typeof sectionID !== 'undefined' && sectionID.length > 2) {
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
