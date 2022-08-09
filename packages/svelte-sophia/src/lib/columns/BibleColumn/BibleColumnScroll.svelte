<script>
	import {columns, columnWrap, scrollPosition, currentReference, scrolling} from '$lib/store'

	import {infiniteScroll} from '$lib/utilities/ChapterScroll.js'
	import {fetchBooks} from '$lib/utilities/fetchBooks.js'

	export let key
	let column

	function parseScroll() {
		$scrollPosition = column.scrollTop
		const verseID = scrollReferenceID()
		for (let i = 0; i <= $columns.length; i++) {
			if ((i !== key) && ($columns[i]?.type === 'bible')) {
				$columnWrap[i].querySelector('[data-id="' + verseID + '"]')?.scrollIntoView()
			}
		}
	}

	// Return the first visible verse id
	function scrollReferenceID() {
		const distanceToContentArea = column.getBoundingClientRect().top
		for (const verse of column.getElementsByClassName('v')) {
			if (verse.getBoundingClientRect().top - distanceToContentArea > -20) {
				$currentReference = verse.dataset.id
				return verse.dataset.id
			}
		}
	}

	const loading = false

	let refBot = null
	let refTop = null

//	$: {
//		if (refBot) {
//			loading = true;
//			let chapterPrev = infiniteScroll(refBot);
//			$columns[key].chapters = [chapterPrev, ...$columns[key].chapters]
//			loading = false;
//		}
//		if (refTop) {
//			loading = true;
//			let chapterNext = infiniteScroll(refTop);
//			$columns[key].chapters = [...$columns[key].chapters, chapterNext]
//			loading = false;
//		}
//	}
</script>

<div />
<div
	class="book-wrap absolute inset-0 top-12 px-4 lg:px-8 overflow-y-scroll"
	bind:this={column}
	on:scroll={parseScroll}
>
	{#if loading === false}
		<div bind:this={refTop} data-id={$columns[key].id} data-ref={
			$columns[key].chapters?.[0]?.section_prev
		} class="h-6 mb-12"></div>
	{/if}
	<slot />
	{#if loading === false}
		<div bind:this={refBot} data-id={$columns[key].id} data-ref={
			$columns[key].chapters?.[$columns[key].chapters.length - 1]?.section_next
		} class="h-6 mt-12"></div>
	{/if}
</div>
