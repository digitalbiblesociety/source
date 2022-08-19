import bibleData from '$lib/bible/bible.data.json'

export default (textReference, language = 'en') => {
	let match
	const input = textReference
		.replace('&ndash;', '-')
		.replace('–', '-')
		.replace(/(\d+[.:])\s+(\d+)/gi, '$1$2')

	// Take the entire reference (John 1:1 or 1 Cor) and move backwards until we find a letter or space
	for (let i = input.length; i >= 0; i--) {
		if (/[A-Za-z\s]/.test(input.substring(i - 1, i))) {
			match = input.substring(0, i).replace(/\s+$/, '').toLowerCase()
			break
		}
	}

	if (match !== null) {
		const bookID = parseBookID(language, match)
	}
}

function parseBookID(language, match) {
	// Find USFM or complete name match
	let bookMatches = Object.values(bibleData).filter(b => {
		if (b.usfm === match.toUpperCase()) {
			return true
		}

		let bookNames = bibleData
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


function parseChapterAndVerse() {
	if (bookID != null) {
		for (i = 0; i < input.length; i++) {
			c = input.charAt(i)

			if (c == ' ' || isNaN(c)) {
				if (!startedNumber) {
					continue
				}

				if (c == '-' || c == '–') {
					afterRange = true
					afterSeparator = false
				} else if (c == ':' || c == ',' || c == '.' || c == '_') {
					afterSeparator = true
				} else {
					// ignore
				}

				// Reset
				currentNumber = ''
				startedNumber = false
			} else {
				startedNumber = true
				currentNumber += c

				if (afterSeparator) {
					if (afterRange) {
						verse2 = parseInt(currentNumber, 10)
					} else { // 1:1
						verse1 = parseInt(currentNumber, 10)
					}
				} else if (afterRange) {
					chapter2 = parseInt(currentNumber, 10)
				} else { // 1
					chapter1 = parseInt(currentNumber, 10)
				}
			}
		}

		// For books with only one chapter, treat the chapter as a vers
		if (bookInfo.chapters.length == 1) {
			// Jude 6 ==> Jude 1:6
			if (chapter1 > 1 && verse1 == -1) {
				verse1 = chapter1
				chapter1 = 1
			}
		}


		// Reassign 1:1-2
		if (chapter1 > 0 && verse1 > 0 && chapter2 > 0 && verse2 <= 0) {
			verse2 = chapter2
			chapter2 = chapter1
		}

		// Fix 1-2:5
		if (chapter1 > 0 && verse1 <= 0 && chapter2 > 0 && verse2 > 0) {
			verse1 = 1
		}

		// Just book
		if (bookID != null && chapter1 <= 0 && verse1 <= 0 && chapter2 <= 0 && verse2 <= 0) {
			chapter1 = 1
			// Verse1 = 1;
		}

		// Validate max chapter
		if (typeof bookInfo.chapters !== 'undefined') {
			if (chapter1 == -1) {
				chapter1 = 1
			} else if (chapter1 > bookInfo.chapters.length) {
				chapter1 = bookInfo.chapters.length
				if (verse1 > 0) {
					verse1 = 1
				}
			}

			// Validate max verse
			if (verse1 > bookInfo.chapters[chapter1 - 1]) {
				verse1 = bookInfo.chapters[chapter1 - 1]
			}

			if (verse1 > 0 && verse2 <= verse1) {
				chapter2 = -1
				verse2 = -1
			}
		}
	}
}
