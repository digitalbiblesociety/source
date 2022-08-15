export default (node, params) => {
	let handler
	const removeHandler = () => window.removeEventListener('keydown', handler)
	const setHandler = () => {
		removeHandler()
		if (!params) {
			return
		}

		handler = e => {
			if (
				Boolean(params.alt) != e.altKey
					|| Boolean(params.shift) != e.shiftKey
					|| Boolean(params.control) != (e.ctrlKey || e.metaKey)
					|| params.code != e.code
			) {
				return
			}

			e.preventDefault()
			params.callback ? params.callback() : node.click()
		}

		window.addEventListener('keydown', handler)
	}

	setHandler()
	return {
		update: setHandler,
		destroy: removeHandler,
	}
}
