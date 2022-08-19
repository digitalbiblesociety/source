	constructor() {
		const args = arguments

		this.bookID = null
		this.chapter1 = null
		this.chapter2 = null
		this.verse1 = null
		this.verse2 = null
		this.language = 'en'

		if (args.length === 1 && typeof args[0] === 'string') { // A string that needs to be parsed
			return BibleReference.parse(args[0])
		}

		if (args.length >= 2 && args.length <= 6) {
			this.bookID = args[0]
			this.chapter1 = args[1]
			if (args.length >= 3) {
				this.verse1 = args[2]
			}

			if (args.length >= 4) {
				this.chapter2 = args[3]
			}

			if (args.length >= 5) {
				this.verse2 = args[4]
			}

			if (args.length >= 6) {
				this.language = args[5]
			}

			return this
		}

		return null
	}

	/**
	 * Tells whether or not the object is valid (i.e. has a book and chapter)
	 *
	 * @returns {boolean}
	 */
	isValid() {
		if (this.getBook() !== null && this.chapter1 > 0) {
			return true
		}

		return false
	}

	/**
	 * Gets the book object for this reference
	 *
	 * @returns {object} Name, chapters, etc.
	 */
	getBook() {
		if (this.bookID === null) {
			return null
		}

		const book = bible.BIBLE_DATA[this.bookID]
		return book
	}

	/**
	 * Formats the chapter:verse range
	 *
	 * @returns {string} 1:5-6 or 12:1-18:2
	 */
	chapterAndVerse(cvSeparator = ':', vvSeparator = '-', ccSeparator = '-') {
		const {chapter1} = this
		const {chapter2} = this
		const {verse1} = this
		const {verse2} = this

		 // John 1
		if (chapter1 > 0 && verse1 <= 0 && chapter2 <= 0 && verse2 <= 0) {
			return chapter1
		}

		 // John 1:1
		if (chapter1 > 0 && verse1 > 0 && chapter2 <= 0 && verse2 <= 0) {
			return chapter1 + cvSeparator + verse1
		}

		 // John 1:1-5
		if (chapter1 > 0 && verse1 > 0 && chapter2 <= 0 && verse2 > 0) {
			return chapter1 + cvSeparator + verse1 + vvSeparator + verse2
		}

		 // John 1-2
		if (chapter1 > 0 && verse1 <= 0 && chapter2 > 0 && verse2 <= 0) {
			return chapter1 + ccSeparator + chapter2
		}

		 // John 1:1-2:2
		if (chapter1 > 0 && verse1 > 0 && chapter2 > 0 && verse2 > 0) {
			return chapter1 + cvSeparator + verse1 + ccSeparator + ((chapter1 != chapter2) ? chapter2 + cvSeparator : '') + verse2
		}

		return '?'
	}

	/**
	 * Formats the book name and chapter:verse range
	 *
	 * @returns {string} Luke 1:5-6 or 12:1-18:2
	 */
	toString() {
		const book = this.getBook()

		if (book === null) {
			return 'invalid'
		}

		return book.names[this.language][0] + ' ' + this.chapterAndVerse()
	}

	/**
	 * Formatted code for Bible App
	 *
	 * @returns {string} USFM plus chapter JHN_1
	 */
	toChapterCode() {
		return this.bookID + '_' + (this.chapter1 > 0 ? this.chapter1 : '1')
	}

	/**
	 * Formatted code for Bible App
	 *
	 * @returns {string} USFM plus chapter and verse JHN_1_2
	 */
	toVerseCode() {
		return this.bookID + '_' + (this.chapter1 > 0 ? this.chapter1 : '1') + '_' + (this.verse1 > 0 ? this.verse1 : '1')
	}