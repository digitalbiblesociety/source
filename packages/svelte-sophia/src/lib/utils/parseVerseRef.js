export default function (cols, key, reference) {
	if (!reference) {
		return ''
	}

	const refParts = reference.split('_')
	const book = (cols[key].metadata?.books[refParts[0]]?.book_name ?? refParts[0])

	return book + ' ' + refParts[1] + ':' + refParts[2]
}
