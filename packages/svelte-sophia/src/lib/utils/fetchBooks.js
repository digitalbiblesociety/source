export async function fetchBooks(BibleID, sectionID) {
	const url = import.meta.env.VITE_API_BASEURL + `/${BibleID}/sophia/books/${sectionID}.html`
	const results = fetch(url)
		.then(result => result.text())
		.then(result => {
			const parser = new DOMParser()
			const doc = parser.parseFromString(result, 'text/html')

			return {
				id: sectionID,
				book: doc.querySelector('main').outerHTML,
			}
		})
	return results
}
