export default async (bibleID, divisionID) => {
	try {
		fetch(import.meta.env.VITE_API_BASEURL + `/${bibleID}/sophia/books/${divisionID}.html`)
			.then(result => result.text())
			.then(result => {
				const parser = new DOMParser()
				const doc = parser.parseFromString(result, 'text/html')
				return {
					id: divisionID,
					book: doc.querySelector('main').outerHTML,
				}
			})
	} catch (error) {
		console.error('Error fetching more posts in index')
		console.error(error)
	}
}
