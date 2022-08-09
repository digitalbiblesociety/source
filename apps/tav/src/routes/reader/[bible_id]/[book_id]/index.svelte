<script context="module">
// see https://kit.svelte.dev/docs#loading
export async function load({ params, fetch }) {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${params.bible_id}/books/${params.book_id}/chapters`,
		{
			headers: { "api-key": import.meta.env.VITE_API_BIBLE },
		}
	)
	if (res.ok) {
		return {
			props: {
				chapters: await res.json(),
			},
		}
	}
	return {
		status: res.status,
		error: new Error(`Could not load scripture api chapters endpoint`),
	}
}
</script>

<script>
import { t } from "$lib/translations"
import { page } from "$app/stores"

export let chapters
</script>

<div class="p-8">
	<a
		class="button mx-auto w-2/3"
		href="{`/reader/${$page.params.bible_id}/`}">
		{$t("common.Back")}
	</a>
</div>
<section class="grid grid-cols-4 divide-y divide-x">
	{#each chapters.data as chapter}
		<a
			class="block p-4 text-center hover:bg-gray-200"
			href="{`/reader/${$page.params.bible_id}/${chapter.bookId}/${chapter.id}`}">
			{chapter.reference}
		</a>
	{/each}
</section>
