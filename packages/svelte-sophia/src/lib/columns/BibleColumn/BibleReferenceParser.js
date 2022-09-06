import bibleData from '$lib/utils/bible/bible.data.json'

function safeRegex(str, regex) {
	let m
	const groups = []
	while ((m = regex.exec(str)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++
		}

		// The result can be accessed through the `m`-variable.
		m.forEach((match, groupIndex) => {
			groups.push(match)
		})
	}

	return groups[0]
}

export default (ref, language = 'en') => {
	ref = ref
		.replace('&ndash;', '-')
		.replace('–', '-')
		.replace(/(\d+[.:])\s+(\d+)/gi, '$1$2')


	const chapterAndVerse = safeRegex(ref, /([^ ]*$)/gm)
	const bookName = ref.replace(chapterAndVerse, '')

//	If (match !== null) {
//		const bookID = parseBookID(language, match)
//	}
}

function parseBookID(language, match) {
	// Find USFM or complete name match
	let bookMatches = Object.values(bibleData).filter(b => {
		if (b.usfm === match.toUpperCase()) {
			return true
		}

		const bookNames = bibleData
		if (bookNames) {
			return bookNames.filter(n => n.toLowerCase() === match).length > 0
		}

		return false
	})

	if (bookMatches.length == 1) {
		const bookID = bookMatches[0].usfm
	} else {
		// Find an abbreviation
		bookMatches = bibleData.filter(
			b => b.abbr[language].filter(abbr => abbr.toLowerCase() === match).length > 0)

		if (bookMatches.length > 0) {
			bookInfo = bookMatches[0]
			bookID = bookInfo.bookID
		}
	}
}