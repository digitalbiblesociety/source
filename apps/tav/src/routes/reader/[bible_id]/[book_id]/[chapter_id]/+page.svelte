<script>
import { onMount } from "svelte"
import { page } from "$app/stores"

let chapter
let base_url = `https://api.scripture.api.bible/v1/bibles/${$page.params.bible_id}/chapters`

onMount(async () => {
	await loadChapter(`${base_url}/${$page.params.chapter_id}`)
})

async function loadChapter(url) {
	chapter = await fetch(url, {
		headers: { "api-key": import.meta.env.VITE_API_BIBLE },
	})
		.then((resp) => resp.json())
		.then((chapter) => {
			console.log(chapter)
			return chapter.data
		})
}
</script>

{#if chapter != undefined}
	<section class="ss mx-auto max-w-prose text-lg dark:text-gray-300">
		<div
			class="border-b border-gray-200 p-4 sm:flex sm:items-center sm:justify-between">
			<a
				href="/reader/{$page.params.bible_id}/{chapter.bookId}/{chapter.previous
					.id}"
				on:click="{loadChapter(base_url + '/' + chapter.previous.id)}">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z">
					</path>
				</svg>
			</a>

			<a href="/reader/{$page.params.bible_id}/{chapter.bookId}/">
				{chapter.reference}
			</a>

			<a
				href="/reader/{$page.params.bible_id}/{chapter.bookId}/{chapter.next
					.id}"
				on:click="{loadChapter(base_url + '/' + chapter.next.id)}">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z">
					</path>
				</svg>
			</a>
		</div>
		{@html chapter.content}

		<div class="p-8 text-xs text-gray-500 dark:text-gray-600">
			{chapter.copyright}
		</div>
	</section>
{/if}
